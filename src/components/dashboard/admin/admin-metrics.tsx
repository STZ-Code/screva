'use client'

import { CaretDownIcon, PersonSimpleRunIcon } from '@phosphor-icons/react'
import { Field, Select } from '@stz-code/ui'
import { ArrowDownLeft, ArrowUpRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'
import { Kpi } from '../kpi'
import { AdminChart } from './admin-chart'

export function AdminMetrics() {
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
				<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Volume Transacionado</Kpi.Label>

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
							<Kpi.Value className="text-5xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Eventos Ativos</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								5.45%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Receita da Plataforma</Kpi.Label>
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
							<Kpi.Value className="text-5xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] xl:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Taxa de Conversão</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="text-5xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon size={64} className="text-cyan-600" />
					</div>
				</Kpi.Root>
			</div>

			<div>
				<Box className="xl:h-105 p-4 bg-neutral-900 rounded rounded-b-none border-zinc-800">
					<AdminChart />
				</Box>

				<div className="bg-zinc-800 py-2 px-4 rounded-b-md flex justify-between xl:gap-0 gap-8">
					<span className="text-zinc-300 xl:text-sm text-xs flex-1">
						Acompanhe o crescimento da base de usuários e o valor médio de cada
						inscrição ao longo do tempo.
					</span>

					<button type="button" className="text-cyan-600 text-sm">
						Ver mais detalhes
					</button>
				</div>
			</div>
		</section>
	)
}
