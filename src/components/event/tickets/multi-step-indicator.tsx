'use client'

import { MoneyWavyIcon, TicketIcon, UsersIcon } from '@phosphor-icons/react'

export function MultiStepIndicator() {
	return (
		<div className="flex items-center justify-between px-24 py-7 bg-neutral-900 rounded border border-zinc-700 relative">
			{/* Barra base */}
			<div className="absolute left-[18%] right-[18%] top-[62%] -translate-y-1/2 h-[2px] bg-zinc-700" />

			{/* Barra ativa */}
			<div className="absolute left-[18%] w-[32%] top-[62%] -translate-y-1/2 h-[2px] bg-cyan-600" />

			{/* STEP 1 */}
			<div className="flex flex-col items-center justify-center gap-2 relative z-10 bg-neutral-900 px-2">
				<span className="text-sm text-cyan-600">Ingressos e Extras</span>

				<div className="border border-cyan-600 rounded-full p-2 w-fit text-cyan-600 bg-neutral-900">
					<TicketIcon size={14} />
				</div>
			</div>

			{/* STEP 2 */}
			<div className="flex flex-col items-center justify-center gap-2 relative z-10 bg-neutral-900 px-2">
				<span className="text-sm text-cyan-600">Perfil do Atleta</span>

				<div className="border border-cyan-600 rounded-full p-2 w-fit text-cyan-600 bg-neutral-900">
					<UsersIcon size={14} />
				</div>
			</div>

			{/* STEP 3 */}
			<div className="flex flex-col items-center justify-center gap-2 relative z-10 bg-neutral-900 px-2">
				<span className="text-sm text-zinc-500">Pagamento</span>

				<div className="border border-zinc-700 rounded-full p-2 w-fit text-zinc-500 bg-neutral-900">
					<MoneyWavyIcon size={14} />
				</div>
			</div>
		</div>
	)
}
