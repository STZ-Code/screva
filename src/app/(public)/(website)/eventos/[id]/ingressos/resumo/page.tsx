import { CheckoutSuccess } from '@/components/event/tickets/checkout-success'
import { OrderSummary } from '@/components/event/tickets/order-summary'

export default function CheckoutSuccessPage() {
	return (
		<div className="flex flex-col relative">
			<CheckoutSuccess />
			<OrderSummary />
		</div>
	)
}
