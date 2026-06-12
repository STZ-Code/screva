import { MultiStepProvider } from '@/context/multistep-context'
import type { MultiStepDefinition } from '@/context/multistep-types'
import { CheckoutContent } from './checkout-content'
import { TicketsStep1 } from './step-1'
import { TicketsStep2 } from './step-2'
import { TicketsStep3 } from './step-3'

const steps: MultiStepDefinition[] = [
	{
		id: 'tickets',
		component: TicketsStep1,
	},
	{
		id: 'athlete-profiles',
		component: TicketsStep2,
	},
	{
		id: 'payment-methods',
		component: TicketsStep3,
	},
]

export function CheckoutContainer() {
	return (
		<MultiStepProvider steps={steps}>
			<CheckoutContent />
		</MultiStepProvider>
	)
}
