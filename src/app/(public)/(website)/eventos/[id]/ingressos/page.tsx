import { CheckoutContainer } from '@/components/event/tickets/form/checkout-container'
import { OrderHeader } from '@/components/event/tickets/order-header'

export default function TicketsPage() {
	return (
		<div className="flex flex-col relative">
			<OrderHeader />

			<CheckoutContainer />
		</div>
	)
}
