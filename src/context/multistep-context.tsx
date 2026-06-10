'use client'

import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useMemo,
	useRef,
	useState,
} from 'react'

import type { FieldValues } from 'react-hook-form'
import type {
	MultiStepContextValue,
	MultiStepDefinition,
} from './multistep-types'

export type Step = MultiStepDefinition

type AnyValues = Record<string, unknown>

type MultiStepProviderProps<TValues extends FieldValues> = PropsWithChildren<{
	steps: MultiStepDefinition<TValues>[]
}>

export const MultiStepContext =
	createContext<MultiStepContextValue<AnyValues> | null>(null)

export function MultiStepProvider<TValues extends FieldValues>({
	children,
	steps,
}: MultiStepProviderProps<TValues>) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0)
	const [accumulatedValues, setAccumulatedValues] = useState<Partial<TValues>>(
		{},
	)

	const stepSubmitFnsRef = useRef<Map<string, () => void | Promise<void>>>(
		new Map(),
	)

	const currentStep = steps[currentStepIndex]

	const next = useCallback(
		(values?: Partial<TValues>) => {
			setAccumulatedValues((previous) => ({
				...previous,
				...values,
			}))

			setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1))
		},
		[steps.length],
	)

	const prev = useCallback(() => {
		setCurrentStepIndex((prev) => Math.max(prev - 1, 0))
	}, [])

	const goTo = useCallback(
		(id: string) => {
			const index = steps.findIndex((step) => step.id === id)

			if (index === -1) return
			if (index > currentStepIndex) return

			setCurrentStepIndex(index)
		},
		[currentStepIndex, steps],
	)

	const registerStepSubmitFn = useCallback(
		(id: string, fn: () => void | Promise<void>) => {
			stepSubmitFnsRef.current.set(id, fn)
		},
		[],
	)

	const executeStepSubmitFn = useCallback(async (id: string) => {
		const fn = stepSubmitFnsRef.current.get(id)
		if (fn) {
			await fn()
		}
	}, [])

	const value = useMemo<MultiStepContextValue<TValues>>(
		() => ({
			steps,
			currentStepIndex,
			currentStep,
			accumulatedValues,
			isFirstStep: currentStepIndex === 0,
			isLastStep: currentStepIndex === steps.length - 1,
			next,
			prev,
			goTo,
			registerStepSubmitFn,
			executeStepSubmitFn,
		}),
		[
			currentStep,
			currentStepIndex,
			next,
			steps,
			goTo,
			accumulatedValues,
			registerStepSubmitFn,
			executeStepSubmitFn,
			prev,
		],
	)

	return (
		<MultiStepContext.Provider
			value={value as MultiStepContextValue<AnyValues>}
		>
			{children}
		</MultiStepContext.Provider>
	)
}
