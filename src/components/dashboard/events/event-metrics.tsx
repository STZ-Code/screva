'use client'

import {
	ArrowDownLeftIcon,
	ArrowUpRightIcon,
	CaretRightIcon,
	CheckCircleIcon,
	CheckSquareIcon,
	EyesIcon,
	MouseLeftClickIcon,
	TipJarIcon,
} from '@phosphor-icons/react'
import { Avatar, Field, Select, type STZColumnDef, Table } from '@stz-code/ui'
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
							<Select.Trigger className="border-none p-0 pr-9">
								<Select.Placeholder className="font-medium text-xs text-zinc-400">
									Últimas 24 horas
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

			<div className="grid grid-cols-4 gap-4">
				<Kpi.Root>
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

					<Kpi.Value>R$ 456.200,00</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
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

					<Kpi.Value>R$ 40.200,00</Kpi.Value>
				</Kpi.Root>

				<Kpi.Root>
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

					<Kpi.Value>R$ 4.200,00</Kpi.Value>
				</Kpi.Root>

				<Kpi.Root>
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

					<Kpi.Value>R$ 420,00</Kpi.Value>
				</Kpi.Root>
			</div>

			<div className="flex gap-8">
				<div className="flex-1">
					<div>
						<Box className="h-[420px] bg-neutral-900 rounded-b-none shadow-none border-zinc-800">
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

					<div className="flex gap-6 w-full mt-8">
						<Box className="flex-1 shadow-none gap-3">
							<h3 className="text-zinc-400 font-semibold text-lg flex gap-2">
								<EyesIcon size={24} className="text-zinc-100" />
								Vistantes
							</h3>

							<strong className="text-4xl text-zinc-100">4.210</strong>
						</Box>
						<Box className="flex-1 shadow-none gap-3">
							<h3 className="text-zinc-400 font-semibold text-lg flex gap-2">
								<MouseLeftClickIcon size={24} className="text-slate-600" />
								Iniciaram inscrição
							</h3>

							<strong className="text-4xl text-zinc-100">812</strong>
						</Box>
						<Box className="flex-1 shadow-none gap-3">
							<h3 className="text-zinc-400 font-semibold text-lg flex gap-2">
								<CheckSquareIcon size={24} className="text-green-600" />
								Pagamentos concluídos
							</h3>

							<strong className="text-4xl text-zinc-100">536</strong>
						</Box>
						<Box className="flex-1 shadow-none gap-3">
							<h3 className="text-zinc-400 font-semibold text-lg flex gap-2">
								<TipJarIcon size={24} className="text-yellow-300" />
								Taxa de conversão
							</h3>

							<strong className="text-4xl text-zinc-100">13%</strong>
						</Box>
					</div>
				</div>

				<div className="w-1/4 h-full flex flex-col">
					<Box className="rounded-b-none border-zinc-800 gap-3 p-6 flex-1 shadow-none">
						<h2 className="text-2xl text-zinc-100 font-semibold">
							Atividade recente
						</h2>

						<Table.Root columns={columns} data={data} className="border-none">
							<Table.Container>
								<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

								<Table.Body>
									<Table.Row className="border-zinc-800">
										<Table.Fallback>Sem resultados encontrados</Table.Fallback>
									</Table.Row>
								</Table.Body>
							</Table.Container>
						</Table.Root>

						<Table.Root columns={columns} data={data} className="border-none">
							<Table.Container>
								<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

								<Table.Body>
									<Table.Row className="border-zinc-800">
										<Table.Fallback>Sem resultados encontrados</Table.Fallback>
									</Table.Row>
								</Table.Body>
							</Table.Container>
						</Table.Root>
					</Box>
					<div className="bg-zinc-800 py-2 px-4 rounded-b-md flex justify-between">
						<button
							type="button"
							className="text-cyan-600 text-sm flex-1 flex justify-between"
						>
							Ver mais detalhes
							<CaretRightIcon className="size-5" />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
