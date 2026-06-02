'use client'
import { TicketIcon } from '@phosphor-icons/react'

export function CheckoutSuccess() {
	return (
		<div className="flex flex-col bg-zinc-600/40 items-center justify-center py-20 gap-6">
			<TicketIcon size={48} className="text-cyan-600" />
			<div className="flex flex-col items-center gap-2">
				<h1 className="text-2xl font-bold">Obrigado pela sua compra!</h1>
				<p className="text-zinc-400 text-center text-sm">
					Recebemos o seu pedido com sucesso.
					<br />A aprovação do pagamento pode levar até 2 horas.
				</p>
			</div>
		</div>
	)
}
