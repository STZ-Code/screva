'use client'

import { useEffect } from 'react'

import type { DefaultValues, FieldValues } from 'react-hook-form'

import { useMultiStepForm } from './use-multistep-form'

type UseStepOptions<TValues extends FieldValues> = {
	defaultValues?: DefaultValues<TValues>
}

export function useStep<TValues extends FieldValues>(
	id: string,
	options?: UseStepOptions<TValues>,
) {
	const multistep = useMultiStepForm<TValues>()

	const step = multistep.steps.find((step) => step.id === id)

	if (!step) {
		throw new Error(`Step "${id}" not found.`)
	}

	useEffect(() => {
		if (!options?.defaultValues) return

		multistep.ensureDefaultValues(options.defaultValues)
	}, [multistep.ensureDefaultValues, options?.defaultValues])

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
	}
}
