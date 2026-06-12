import type { ComponentType } from 'react'

import type { FieldValues } from 'react-hook-form'

export type MultiStepId = string

export type PaymentMethod = 'pix' | 'card' | 'bank_slip'

export type MultiStepDefinition<TValues extends FieldValues = FieldValues> = {
	id: MultiStepId

	component: ComponentType

	fields?: (keyof TValues)[]
}

export type MultiStepContextValue<TValues extends FieldValues = FieldValues> = {
	steps: MultiStepDefinition<TValues>[]

	currentStepIndex: number

	currentStep: MultiStepDefinition<TValues>

	isFirstStep: boolean

	isLastStep: boolean

	isFormFInished: boolean

	accumulatedValues: Partial<TValues>

	finishForm(): void

	next(values?: Partial<TValues>): void

	prev(): void

	goTo(step: MultiStepId): void

	registerStepSubmitFn(id: MultiStepId, fn: () => void | Promise<void>): void

	executeStepSubmitFn(id: MultiStepId): Promise<void>
}
