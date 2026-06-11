'use client'

import { TicketIcon } from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'
import { ActionDivider } from '@/components/action-divider'
import { AdvanceButton } from './advance-button'

export function OrderSummary() {
	const pathname = usePathname()

	const isSummaryPage = pathname.endsWith('/resumo')

	return (
		<section className="hidden flex-1 px-28 py-10 2xl:flex flex-col gap-8">
			<h3 className="text-zinc-100 font-semibold text-4xl">Pedido</h3>

			<div>
				<div className="flex items-center justify-between">
					<span className="text-zinc-400 font-semibold">Data do evento</span>

					<p className="text-zinc-400 font-semibold">28/08/2025</p>
				</div>

				<ActionDivider />

				<div className="flex flex-col gap-8">
					<div className="mt-8 flex flex-col gap-2">
						<div className="flex items-center justify-between">
							<h4 className="text-zinc-200 font-semibold">Produtos</h4>
							<strong className="text-zinc-200 font-semibold">
								Quantidade
							</strong>
						</div>

						<div className="flex items-center justify-between">
							<span className="text-zinc-400 font-semibold">
								02KM - CAMINHADA
							</span>
							<p className="text-zinc-400 font-semibold">3</p>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-zinc-400 font-semibold">
								04KM - CAMINHADA
							</span>
							<p className="text-zinc-400 font-semibold">1</p>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-zinc-400 font-semibold">10KM - RUN</span>
							<p className="text-zinc-400 font-semibold">4</p>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<div className="flex items-center justify-between">
							<h4 className="text-zinc-200 font-semibold">Extras</h4>
							<strong className="text-zinc-200 font-semibold">
								Quantidade
							</strong>
						</div>

						<div className="flex items-center justify-between">
							<span className="text-zinc-400 font-semibold">
								Gravação de Medalha
							</span>
							<p className="text-zinc-400 font-semibold">1</p>
						</div>
					</div>
				</div>

				<ActionDivider />

				{!isSummaryPage && (
					<button
						type="button"
						className="my-8 flex gap-3 items-center justify-center border border-zinc-700 w-full rounded py-5 text-zinc-100 font-semibold hover:bg-neutral-800 transition-colors"
					>
						<TicketIcon size={24} />
						Aplicar cupom
					</button>
				)}

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<span className="text-zinc-400 font-semibold">Subtotal</span>
						<p className="text-zinc-400 font-semibold">R$ 320,00</p>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-zinc-400 font-semibold">Taxa de Serviço</span>
						<p className="text-zinc-400 font-semibold">R$ 32,00</p>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-zinc-400 font-semibold">Descontos</span>
						<p className="text-zinc-400 font-semibold">R$ 17,00</p>
					</div>
				</div>

				<ActionDivider />

				<div className="flex items-center justify-between mt-8">
					<span className="text-zinc-400 font-semibold">Total</span>
					<p className="text-zinc-400 font-semibold">R$ R$ 338,00</p>
				</div>
			</div>

			{!isSummaryPage && <AdvanceButton />}
		</section>
	)
}
