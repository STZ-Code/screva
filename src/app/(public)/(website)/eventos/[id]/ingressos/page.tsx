import { CheckoutContent } from '@/components/event/tickets/form/checkout-content'
import { OrderHeader } from '@/components/event/tickets/order-header'

export default function TicketsPage() {
	return (
		<div className="flex flex-col relative">
			<OrderHeader />

			<CheckoutContent />
		</div>
	)
}
