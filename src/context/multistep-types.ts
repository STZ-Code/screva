import type { ComponentType } from 'react'

import type { DefaultValues, FieldValues, UseFormReturn } from 'react-hook-form'

export type MultiStepId = string

export type MultiStepDefinition<TValues extends FieldValues = FieldValues> = {
	id: MultiStepId

	component: ComponentType

	fields?: (keyof TValues)[]

	includeInFinalPayload?: boolean

	mode?: 'default' | 'isolated'
}

export type MultiStepContextValue<TValues extends FieldValues = FieldValues> = {
	steps: MultiStepDefinition<TValues>[]

	form: UseFormReturn<TValues>

	currentStepIndex: number

	currentStep: MultiStepDefinition<TValues>

	isFirstStep: boolean

	isLastStep: boolean

	next(): void

	prev(): void

	goTo(step: MultiStepId): void

	ensureDefaultValues(defaultValues: DefaultValues<TValues>): void
}
