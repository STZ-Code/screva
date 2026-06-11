'use client'

import { MultiStepProvider } from '@/context/multistep-context'
import type { MultiStepDefinition } from '@/context/multistep-types'
import { MultiStepIndicator } from '../multi-step-indicator'
import { OrderSummary } from '../order-summary'
import { OrderSummaryTrigger } from '../order-summary-trigger'
import { CheckoutRenderer } from './checkout-renderer'
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

export function CheckoutContent() {
	return (
		<MultiStepProvider steps={steps}>
			<div className="flex h-fit">
				<div className="flex-1 bg-zinc-800/40 w-fit px-6 xl:pl-28 py-6 xl:py-10 xl:pr-14">
					<MultiStepIndicator />

					<div className="py-6 h-fit">
						<CheckoutRenderer />
					</div>
				</div>

				<OrderSummary />
			</div>

			<OrderSummaryTrigger />
		</MultiStepProvider>
	)
}
