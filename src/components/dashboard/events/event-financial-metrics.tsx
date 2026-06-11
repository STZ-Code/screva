'use client'

import { CaretDownIcon, PersonSimpleRunIcon } from '@phosphor-icons/react'
import { Field, Select } from '@stz-code/ui'
import { ArrowDownLeft, ArrowUpRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'
import { AdminChart } from '../admin/admin-chart'
import { Kpi } from '../kpi'

export function EventFinancialMetrics() {
	const { control } = useForm()

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
							<Select.Trigger className="border-none p-0 data-[state=open]:ring-0 focus:ring-0">
								<Select.Placeholder className="font-medium text-xs text-zinc-400 cursor-pointer">
									<div className="flex gap-2 items-center">
										Últimas 24 horas
										<CaretDownIcon size={16} />
									</div>
								</Select.Placeholder>

								<Select.Portal className="bg-neutral-800 border border-zinc-600 ring-0">
									<Select.Item
										value="select-1"
										className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
									>
										Últimas 24h
									</Select.Item>
									<Select.Item
										value="select-2"
										className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
									>
										Essa semana
									</Select.Item>
									<Select.Item
										value="select-3"
										className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
									>
										Último mês
									</Select.Item>
									<Select.Item
										value="select-4"
										className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
									>
										Completo
									</Select.Item>
								</Select.Portal>
							</Select.Trigger>
						</Select.Control>
					</Select.Root>
					<Field.Error />
				</Field.Root>
			</div>

			<div className="flex gap-4 flex-wrap">
				<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Visualizações do evento</Kpi.Label>

						<StatusTag.Root className="bg-emerald-800/30 border-none gap-2">
							<StatusTag.Icon
								icon={ArrowUpRight}
								className="text-emerald-300"
							/>
							<StatusTag.Label className="text-emerald-300 text-xs">
								75.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="xl:text-5xl text-xl">1.245</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon className="text-cyan-600 xl:size-16 size-10" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Cliques no botão de inscrição</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								5.45%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="xl:text-5xl text-xl">270</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon className="text-cyan-600 xl:size-16 size-10" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Inscrições realizadas</Kpi.Label>
						<StatusTag.Root className="bg-emerald-800/30 border-none gap-2">
							<StatusTag.Icon
								icon={ArrowUpRight}
								className="text-emerald-300"
							/>
							<StatusTag.Label className="text-emerald-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="xl:text-5xl text-xl">89</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon className="text-cyan-600 xl:size-16 size-10" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Conversão (%)</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="xl:text-5xl text-xl">7,1%</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon className="text-cyan-600 xl:size-16 size-10" />
					</div>
				</Kpi.Root>
			</div>

			<Box className="xl:h-105 bg-neutral-900 rounded-b-none p-4 border-zinc-800">
				<AdminChart />
			</Box>
		</section>
	)
}
