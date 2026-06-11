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
		<Box className="shadow-none gap-6 2xl:p-8 p-4">
			<BoxHeading>Informações de retirada</BoxHeading>

			<div className="flex 2xl:flex-row flex-col pb-6 border-b border-zinc-800 2xl:divide-x 2xl:divide-zinc-600 2xl:gap-0 gap-8">
				<div className="flex flex-col 2xl:w-fit gap-8 2xl:pr-8 w-full">
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

					<div className="2xl:w-fit flex gap-4 justify-between w-full">
						<button
							type="button"
							className="flex gap-2 2xl:text-base text-sm items-center border border-zinc-700 rounded 2xl:px-4 px-5 py-2 bg-neutral-900"
						>
							Abrir no Maps
							<ArrowSquareOutIcon size={16} weight="bold" />
						</button>
						<button
							type="button"
							className="flex gap-2 2xl:text-base text-sm items-center border border-zinc-700 rounded 2xl:px-4 px-5 py-2 bg-neutral-900"
						>
							Copiar endereço
							<CopyIcon size={16} weight="bold" />
						</button>
					</div>
				</div>

				<div className="2xl:ml-8 flex gap-4 2xl:pr-8">
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
				<InfoIcon className="2xl:size-6 size-8" />
				<p className="2xl:text-base text-sm">
					Solicite um documento com foto para retirar ao atleta para retirar o
					kit
				</p>
			</div>
		</Box>
	)
}
