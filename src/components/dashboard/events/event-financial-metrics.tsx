'use client'

import { Field, Select } from '@stz-code/ui'
import { ArrowDownLeft, ArrowUpRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'
import { AdminChart } from '../admin/admin-chart'
import { Kpi } from '../kpi'
// import { AdminChart } from './admin-chart'

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

			<div className="flex gap-4 flex-wrap">
				<Kpi.Root>
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

					<Kpi.Value>R$ 4.200,00</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
					<div className="flex justify-between items-center">
						<Kpi.Label>Eventos Ativos</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								5.45%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>

					<Kpi.Value>15 Eventos</Kpi.Value>
				</Kpi.Root>

				<Kpi.Root>
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

					<Kpi.Value>741 Inscrições</Kpi.Value>
				</Kpi.Root>

				<Kpi.Root>
					<div className="flex justify-between items-center">
						<Kpi.Label>Taxa de Conversão</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>

					<Kpi.Value>2.45%</Kpi.Value>
				</Kpi.Root>
			</div>

			<div>
				<Box className="h-[420px] bg-neutral-900 rounded-b-none border-zinc-800">
					<AdminChart />
				</Box>

				<div className="bg-zinc-800 py-2 px-4 rounded-b-md flex justify-between">
					<span className="text-zinc-300 text-sm">
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
