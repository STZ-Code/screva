import { MultiStepIndicator } from '@/components/event/tickets/multi-step-indicator'
import { OrderHeader } from '@/components/event/tickets/order-header'
import { OrderSummary } from '@/components/event/tickets/order-summary'

export default function TicketsPage() {
	return (
		<div className="flex flex-col">
			<OrderHeader />

			<div className="flex">
				<div className="flex-1 bg-zinc-800/50 pl-28 py-10 pr-14">
					<MultiStepIndicator />

					<div className="py-6">
						<div className="flex flex-col gap-3">
							<h2 className="text-zinc-100 font-semibold text-xl">
								Suas categorias
							</h2>

							<span className="text-sm text-zinc-400">
								Adicione a quantidade de ingressos por categoria.
							</span>
						</div>

						<div className="py-6">acoordion com categorias</div>
					</div>
				</div>

				<OrderSummary />
			</div>
		</div>
	)
}
