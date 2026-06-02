'use client'

import { useMultiStepForm } from '@/hooks/use-multistep-form'

export function CheckoutRenderer() {
	const { currentStep } = useMultiStepForm()

	const Component = currentStep.component

	return <Component />
}
