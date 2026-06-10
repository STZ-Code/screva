'use client'

import { TicketIcon } from '@phosphor-icons/react'
import { Drawer } from '@stz-code/ui/layout'
import { ActionDivider } from '@/components/action-divider'

type OrderSummaryDrawerProps = {
	className?: string
}

export function OrderSummaryDrawer({ className }: OrderSummaryDrawerProps) {
	return (
		<Drawer.Root>
			<Drawer.Trigger className="bg-cyan-600 rounded-md font-bold h-12 px-3 cursor-pointer text-sm hover:bg-cyan-700 transition-colors">
				Ver resumo
			</Drawer.Trigger>
			<Drawer.Content className="bg-zinc-900 border-zinc-600 z-70">
				<Drawer.Header>
					<Drawer.Title className="text-2xl text-zinc-100">Pedido</Drawer.Title>
					<Drawer.Description className="text-zinc-400">
						Resumo do seu pedido
					</Drawer.Description>
				</Drawer.Header>
				<div className="flex flex-col px-4">
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

						{/* <div className="flex flex-col gap-2">
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
						</div> */}
					</div>

					<ActionDivider />

					<button
						type="button"
						className="my-8 flex gap-3 items-center justify-center border border-zinc-700 w-full rounded py-5 text-zinc-100 font-semibold hover:bg-neutral-800 transition-colors"
					>
						<TicketIcon size={24} />
						Aplicar cupom
					</button>

					<div className="flex flex-col gap-2">
						<div className="flex items-center justify-between">
							<span className="text-zinc-400 font-semibold">Subtotal</span>
							<p className="text-zinc-400 font-semibold">R$ 320,00</p>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-zinc-400 font-semibold">
								Taxa de Serviço
							</span>
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
						<p className="text-zinc-400 font-semibold">R$ 338,00</p>
					</div>
				</div>
				<Drawer.Footer>
					<Drawer.Close asChild>
						<button
							type="button"
							className="py-4 border-3 border-zinc-200 font-bold bg-transparent hover:bg-zinc-300/10 transitions-colors cursor-pointer"
						>
							Fechar
						</button>
					</Drawer.Close>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	)
}
