import { useMultiStepForm } from '@/hooks/use-multistep-form'

export function CheckoutRenderer() {
	const multistep = useMultiStepForm()

	const Component = multistep.currentStep.component

	return <Component />
}
