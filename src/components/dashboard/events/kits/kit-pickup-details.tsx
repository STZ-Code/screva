'use client'

import {
	ArrowSquareOutIcon,
	CalendarBlankIcon,
	CopyIcon,
	InfoIcon,
	MapPinIcon,
} from '@phosphor-icons/react'
import { Box } from '@/components/box'
import { BoxHeading } from '@/components/box-heading'
import { Tag } from '@/components/tag'

export function KitPickupDetails() {
	return (
		<Box className="shadow-none gap-6">
			<BoxHeading>Informações de retirada</BoxHeading>

			<div className="flex pb-6 border-b border-zinc-800">
				<div className="flex flex-col border-r border-zinc-600 w-fit gap-8 pr-8">
					<div className="flex gap-4">
						<MapPinIcon size={24} weight="bold" />

						<div className="flex flex-col gap-3 w-fit">
							<span className="text-sm w-fit font-medium text-zinc-400">
								Local de entrega
							</span>

							<strong className="w-fit">Arena Petrolina Eventos</strong>

							<div className="w-48">
								<span>Rua Padre José Lima, 451, Petrolina - PE, 56315-070</span>
							</div>
						</div>
					</div>

					<div className="w-fit flex gap-4">
						<button
							type="button"
							className="flex gap-2 items-center border border-zinc-700 rounded px-4 py-2 bg-neutral-900"
						>
							Abrir no Maps
							<ArrowSquareOutIcon size={16} weight="bold" />
						</button>
						<button
							type="button"
							className="flex gap-2 items-center border border-zinc-700 rounded px-4 py-2 bg-neutral-900"
						>
							Copiar endereço
							<CopyIcon size={16} weight="bold" />
						</button>
					</div>
				</div>

				<div className="ml-8 flex gap-4 pr-8">
					<CalendarBlankIcon size={24} weight="bold" />

					<div className="flex flex-col gap-4">
						<span className="text-sm w-fit font-medium text-zinc-400">
							Datas de retirada
						</span>

						<div className="flex gap-4">
							<Tag className="text-center border border-zinc-700 bg-neutral-950 font-bold py-1">
								25 <br /> MAR
							</Tag>

							<div className="flex flex-col gap-2">
								<span>Sexta-feira</span>
								<time>08:00 às 14:00</time>
							</div>
						</div>

						<div className="flex gap-4">
							<Tag className="text-center border border-zinc-700 bg-neutral-950 font-bold py-1">
								26 <br /> MAR
							</Tag>

							<div className="flex flex-col gap-2">
								<span>Sábado</span>
								<time>15:00 às 19:00</time>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2.5 text-zinc-400">
				<InfoIcon size={24} />
				<p>
					Solicite um documento com foto para retirar ao atleta para retirar o
					kit
				</p>
			</div>
		</Box>
	)
}
