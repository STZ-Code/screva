import { Button } from '@/components/button'
import { useMultiStepForm } from '@/hooks/use-multistep-form'

export function AdvanceButton() {
	const { isLastStep, executeStepSubmitFn, currentStep } = useMultiStepForm()

	async function handleAdvance() {
		await executeStepSubmitFn(currentStep.id)

		if (isLastStep) {
			// navegar para sucesso.
		}
	}

	return (
		<Button type="button" onClick={handleAdvance}>
			{isLastStep ? 'Finalizar' : 'Avançar'}
		</Button>
	)
}
