'use client'

import {
	ArrowDownLeftIcon,
	ArrowUpRightIcon,
	CaretDownIcon,
	CheckCircleIcon,
	PersonSimpleRunIcon,
} from '@phosphor-icons/react'
import { Avatar, Field, Select, type STZColumnDef } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import exampleImg from '@/assets/examples/picos.jpg'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'
import { Kpi } from '../kpi'
import { EventOverviewChart } from './event-overview-chart'

type Inscription = {
	id: string
	name: string
	city: string
	status: string
}

export function EventMetrics() {
	const { control } = useForm()

	const columns: STZColumnDef<Inscription>[] = [
		{
			accessorKey: 'name',
			header: 'Últimas inscrições',
			size: 48,
			cell: (info) => {
				return (
					<div className="flex gap-4 items-center w-full">
						<Avatar.Root className="size-9 rounded">
							<Avatar.Image src={exampleImg.src} />
							<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<p className="text-zinc-200">{info.row.original.name}</p>
							<p className="text-zinc-500 text-sm line-clamp-1">
								{info.row.original.city}
							</p>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'status',
			header: '',
			size: 16,
			cell: (info) => (
				<StatusTag.Root>
					<StatusTag.Icon
						icon={CheckCircleIcon}
						weight="fill"
						className="text-emerald-500 size-4"
					/>
					<StatusTag.Label className="text-zinc-200 text-xs">
						Confirmado
					</StatusTag.Label>
				</StatusTag.Root>
			),
		},
	]

	const data: Inscription[] = [
		{
			id: '1',
			city: 'Picos/PI',
			name: 'Picos Pro Race',
			status: 'confirmado',
		},
		{
			id: '2',
			city: 'Santa Maria da Boa Vista/PE',
			name: 'Picos Pro Race 2',
			status: 'confirmado',
		},
	]

	return (
		<section className="flex flex-col gap-4">
			<div className="flex gap-2 items-end">
				<h2 className="text-zinc-100 font-semibold text-xl">Métricas</h2>
				<Field.Root
					name="document"
					control={control}
					className="flex justify-end pb-1"
				>
					<Select.Root>
						<Select.Control>
							<Select.Trigger className="border-none p-0">
								<Select.Placeholder className="font-medium text-xs text-zinc-400">
									<div className="flex gap-2 items-center">
										Últimas 24 horas
										<CaretDownIcon size={16} />
									</div>
								</Select.Placeholder>

								<Select.Portal>
									<Select.Item value="select-1">Select 1</Select.Item>
									<Select.Item value="select-2">Select 2</Select.Item>
									<Select.Item value="select-3">Select 3</Select.Item>
								</Select.Portal>
							</Select.Trigger>
						</Select.Control>
					</Select.Root>
					<Field.Error />
				</Field.Root>
			</div>

			<div className="flex gap-4 flex-wrap">
				<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Receita Bruta</Kpi.Label>

						<StatusTag.Root className="bg-emerald-800/30 border-none gap-2">
							<StatusTag.Icon
								icon={ArrowUpRightIcon}
								className="text-emerald-300"
							/>
							<StatusTag.Label className="text-emerald-300 text-xs">
								75.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">R$ 456.200,00</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Receita da Plataforma</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon
								icon={ArrowDownLeftIcon}
								className="text-red-300"
							/>
							<StatusTag.Label className="text-red-300 text-xs">
								5.45%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">R$ 40.200,00</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Disponível para Repasse</Kpi.Label>
						<StatusTag.Root className="bg-emerald-800/30 border-none gap-2">
							<StatusTag.Icon
								icon={ArrowUpRightIcon}
								className="text-emerald-300"
							/>
							<StatusTag.Label className="text-emerald-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">R$ 4.200,00</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] 2xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Saldo</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon
								icon={ArrowDownLeftIcon}
								className="text-red-300"
							/>
							<StatusTag.Label className="text-red-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">R$ 420,00</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
			</div>

			<div className="flex gap-8">
				<div className="flex-1">
					<div>
						<Box className="h-105 bg-neutral-900 rounded-b-none shadow-none border-zinc-800">
							<EventOverviewChart />
						</Box>

						<div className="bg-zinc-800 py-2 px-4 rounded-b-md flex justify-between">
							<span className="text-zinc-300 text-sm">
								Acompanhe a quantidade de inscritos nas últimas 24 horas.
							</span>

							<button type="button" className="text-cyan-600 text-sm">
								Ver mais detalhes
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
