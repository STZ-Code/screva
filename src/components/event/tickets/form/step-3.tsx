'use client'
import {
	BarcodeIcon,
	CreditCardIcon,
	PixLogoIcon,
	WalletIcon,
} from '@phosphor-icons/react'

export function TicketsStep3() {
	return (
		<div className="flex flex-col gap-6 h-fit w-full">
			<h2 className="text-zinc-100 font-semibold text-xl">
				Escolha a forma de pagamento
			</h2>

			<div className="flex flex-col lg:flex-row gap-2 w-full">
				<div className="flex gap-2">
					<button
						type="button"
						className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors border border-zinc-600 rounded flex items-center justify-center gap-2 flex-1 py-2"
					>
						<CreditCardIcon size={24} />

						<span className="font-semibold text-sm">
							Cartão Crédito
							<br />
							Cartão Débito
						</span>
					</button>

					<button
						type="button"
						className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors font-semibold text-sm border border-zinc-600 rounded flex items-center justify-center gap-2 flex-1 py-2"
					>
						<PixLogoIcon size={24} />
						PIX
					</button>
				</div>

				<div className="flex gap-2">
					<button
						type="button"
						className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors font-semibold text-sm border border-zinc-600 rounded flex items-center justify-center gap-2 flex-1 py-2"
					>
						<BarcodeIcon size={24} />
						Boleto Bancário
					</button>

					<button
						type="button"
						className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors font-semibold text-sm border border-zinc-600 rounded flex items-center justify-center gap-2 flex-1 py-2"
					>
						<WalletIcon size={24} />
						<span>
							Google Pay
							<br />
							Apple Pay
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}
