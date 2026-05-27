'use client'

import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useMemo,
	useState,
} from 'react'

import {
	type DefaultValues,
	type FieldValues,
	type Path,
	useForm,
} from 'react-hook-form'
import type {
	MultiStepContextValue,
	MultiStepDefinition,
} from './multistep-types'

export type Step = MultiStepDefinition

type AnyValues = Record<string, unknown>

type MultiStepProviderProps<TValues extends FieldValues> = PropsWithChildren<{
	steps: MultiStepDefinition<TValues>[]

	defaultValues?: DefaultValues<TValues>
}>

export const MultiStepContext =
	createContext<MultiStepContextValue<AnyValues> | null>(null)

export function MultiStepProvider<TValues extends FieldValues>({
	children,
	steps,
	defaultValues,
}: MultiStepProviderProps<TValues>) {
	const [currentStepIndex, setCurrentStepIndex] = useState(0)

	const form = useForm<TValues>({
		defaultValues,
	})

	const currentStep = steps[currentStepIndex]

	const ensureDefaultValues = useCallback(
		(stepDefaultValues: DefaultValues<TValues>) => {
			function applyDefaults(value: unknown, parentPath?: string) {
				if (value === null || value === undefined) return

				if (Array.isArray(value)) {
					value.forEach((item, index) => {
						const currentPath = parentPath
							? `${parentPath}.${index}`
							: `${index}`
						applyDefaults(item, currentPath)
					})
					return
				}

				if (typeof value === 'object') {
					Object.entries(value).forEach(([key, child]) => {
						const currentPath = parentPath ? `${parentPath}.${key}` : key
						applyDefaults(child, currentPath)
					})
					return
				}

				if (!parentPath) return

				const path = parentPath as Path<TValues>
				if (form.getValues(path) !== undefined) return

				form.setValue(path, value as never)
			}

			applyDefaults(stepDefaultValues)
		},
		[form],
	)

	const value = useMemo<MultiStepContextValue<TValues>>(
		() => ({
			steps,

			form,

			currentStepIndex,

			currentStep,

			isFirstStep: currentStepIndex === 0,

			isLastStep: currentStepIndex === steps.length - 1,

			next() {
				setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1))
			},

			prev() {
				setCurrentStepIndex((prev) => Math.max(prev - 1, 0))
			},

			goTo(id) {
				const index = steps.findIndex((step) => step.id === id)

				if (index === -1) return

				if (index > currentStepIndex) return

				setCurrentStepIndex(index)
			},

			ensureDefaultValues,
		}),
		[currentStep, currentStepIndex, ensureDefaultValues, form, steps],
	)

	return (
		<MultiStepContext.Provider
			value={value as MultiStepContextValue<AnyValues>}
		>
			{children}
		</MultiStepContext.Provider>
	)
}
