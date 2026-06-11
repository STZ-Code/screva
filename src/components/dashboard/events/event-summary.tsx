'use client'

import {
	CalendarBlankIcon,
	ClockAfternoonIcon,
	MapPinIcon,
	PencilSimpleIcon,
} from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import exampleImg from '@/assets/examples/picos.jpg'
import { Box } from '@/components/box'

export function EventSummary() {
	return (
		<Box className="bg-neutral-900 py-4 gap-4 w-fit">
			<div className="flex items-center justify-between">
				<span className="text-lg font-semibold text-zinc-200">
					Visão geral do evento
				</span>

				<Link
					href={'/'}
					className="px-4 py-1 flex gap-2 items-center border border-neutral-800 rounded-lg hover:bg-zinc-100/5 transition-colors text-sm text-zinc-400"
				>
					<PencilSimpleIcon className="size-4" />
					Editar
				</Link>
			</div>

			<div className="flex xl:gap-8 gap-4 xl:flex-row flex-col">
				<Image
					src={exampleImg}
					alt="Event Image"
					className="xl:w-64 w-full object-cover rounded"
				/>

				<div className="xl:space-y-16 space-y-4">
					<div className="flex flex-col gap-2">
						<h2 className="font-semibold text-2xl">Picos Pro Race</h2>

						<p className="text-sm xl:w-1/2 capitalize">
							A edição 2026 da Corrida Sesc de Corridas chega com tudo em
							Pernambuco! De outubro a novembro, correremos por Recife, Serra
							Talhada, Petrolina, Jaboatão dos Guararapes e Garanhuns, serão
							palcos de provas que movem desde corredores iniciantes até atletas
							mais experientes.
						</p>
					</div>

					<div className="flex xl:gap-16 gap-4 flex-col xl:flex-row">
						<div className="flex gap-3">
							<div className="bg-zinc-700 rounded-md w-fit h-fit p-2">
								<CalendarBlankIcon className="size-6 text-cyan-600" />
							</div>

							<div className="flex flex-col">
								<span className="text-zinc-400 font-medium text-sm">Data</span>
								<span className="text-zinc-200 font-semibold text-sm">
									12/01/2026
								</span>
							</div>
						</div>
						<div className="flex gap-3">
							<div className="bg-zinc-700 rounded-md w-fit h-fit p-2">
								<ClockAfternoonIcon className="size-6 text-cyan-600" />
							</div>

							<div className="flex flex-col">
								<span className="text-zinc-400 font-medium text-sm">
									Horário
								</span>
								<span className="text-zinc-200 font-semibold text-sm">
									06:00
								</span>
							</div>
						</div>
						<div className="flex gap-3">
							<div className="bg-zinc-700 rounded-md w-fit h-fit p-2">
								<MapPinIcon className="size-6 text-cyan-600" />
							</div>

							<div className="flex flex-col">
								<span className="text-zinc-400 font-medium text-sm">
									Cidade
								</span>
								<span className="text-zinc-200 font-semibold text-sm">
									Petrolina - PE
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Box>
	)
}
