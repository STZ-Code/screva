'use client'

import { useEffect, useRef } from 'react'

import type { DefaultValues, FieldValues } from 'react-hook-form'
import type { MultiStepStepHandlers } from '@/context/multistep-types'
import { useMultiStepForm } from './use-multistep-form'

type UseStepOptions<TValues extends FieldValues> = {
	defaultValues?: DefaultValues<TValues>
} & MultiStepStepHandlers<TValues>

export function useStep<TValues extends FieldValues>(
	id: string,
	options?: UseStepOptions<TValues>,
) {
	const multistep = useMultiStepForm<TValues>()

	const step = multistep.steps.find((step) => step.id === id)

	if (!step) {
		throw new Error(`Step "${id}" not found.`)
	}

	const onSubmitRef = useRef(options?.onSubmit)
	onSubmitRef.current = options?.onSubmit

	const onSuccessRef = useRef(options?.onSuccess)
	onSuccessRef.current = options?.onSuccess

	useEffect(() => {
		if (!options?.defaultValues) return

		multistep.ensureDefaultValues(options.defaultValues)
	}, [multistep.ensureDefaultValues, options?.defaultValues])

	useEffect(() => {
		if (!onSubmitRef.current && !onSuccessRef.current) return

		multistep.registerStepHandlers(id, {
			onSubmit: (params) => onSubmitRef.current?.(params),
			onSuccess: (result, helpers) =>
				onSuccessRef.current?.(result, helpers),
		})

		return () => multistep.unregisterStepHandlers(id)
	}, [id, multistep.registerStepHandlers, multistep.unregisterStepHandlers])

	return {
		...step,

		isCurrent: multistep.currentStep.id === id,

		control: multistep.form.control,

		register: multistep.form.register,

		formState: multistep.form.formState,

		errors: multistep.form.formState.errors,

		watch: multistep.form.watch,

		setValue: multistep.form.setValue,

		getValues: multistep.form.getValues,

		trigger: multistep.form.trigger,

		submit: multistep.submit,

		next: multistep.next,

		prev: multistep.prev,

		onSubmit: options?.onSubmit,

		onSuccess: options?.onSuccess,
	}
}
