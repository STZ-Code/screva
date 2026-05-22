import { TicketsStep1 } from '@/components/event/tickets/form/step-1'
import { TicketsStep2 } from '@/components/event/tickets/form/step-2'
import { TicketsStep3 } from '@/components/event/tickets/form/step-3'
import { MultiStepIndicator } from '@/components/event/tickets/multi-step-indicator'
import { OrderHeader } from '@/components/event/tickets/order-header'
import { OrderSummary } from '@/components/event/tickets/order-summary'

export default function TicketsPage() {
	return (
		<div className="flex flex-col">
			<OrderHeader />

			<div className="flex h-fit">
				<div className="flex-1 bg-zinc-800/40 pl-28 py-10 pr-14">
					<MultiStepIndicator />

					<div className="py-6 h-fit">
						{/* <TicketsStep1 /> */}
						{/* <TicketsStep2 /> */}
						<TicketsStep3 />
					</div>
				</div>

				<OrderSummary />
			</div>
		</div>
	)
}
