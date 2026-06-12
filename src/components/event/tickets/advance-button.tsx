import { Button } from '@/components/button'
import { useMultiStepForm } from '@/hooks/use-multistep-form'

export function AdvanceButton() {
	const { isLastStep, executeStepSubmitFn, currentStep } = useMultiStepForm()

	if (isLastStep) return null

	async function handleAdvance() {
		await executeStepSubmitFn(currentStep.id)
	}

	return (
		<Button type="button" onClick={handleAdvance}>
			Avançar
		</Button>
	)
}
