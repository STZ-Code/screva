'use client'

import { Avatar } from '@stz-code/ui'
import exampleImg from '@/assets/examples/picos.jpg'
import { OrderSummaryDrawer } from './order-summary-drawer'

export function OrderSummaryTrigger() {
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-500-900 lg:hidden flex justify-between z-60 bg-zinc-800 py-3 px-6 items-center">
			<div className="flex gap-4">
				<Avatar.Root className="size-12 rounded-md">
					<Avatar.Image src={exampleImg.src} />
					<Avatar.Fallback>DESAFIO 5 ROTAS SALVATORE COMPANY</Avatar.Fallback>
				</Avatar.Root>

				<div>
					<span className="text-zinc-200 font-medium">
						Total com taxas inclusas
					</span>
					<div className="flex gap-2">
						<strong className="text-zinc-50">R$ 338,00</strong>
						<span className="text-zinc-300">/ 3 ingressos</span>
					</div>
				</div>
			</div>

			<OrderSummaryDrawer />
		</div>
	)
}
