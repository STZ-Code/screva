'use client'
import { Field, Select } from '@stz-code/ui'
import { ArrowDownLeft, ArrowUpRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'
import { Kpi } from '../../kpi'
import { AdminChart } from '../admin-chart'

export function FinanceMetrics() {
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

			<div className="grid grid-cols-4 gap-4">
				<Kpi.Root>
					<div className="flex justify-between items-center">
						<Kpi.Label>Receita Bruta</Kpi.Label>

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

					<Kpi.Value>R$ 456.200,00</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
					<div className="flex justify-between items-center">
						<Kpi.Label>Receita da Plataforma</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
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
								icon={ArrowUpRight}
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
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>

					<Kpi.Value>R$ 420,00</Kpi.Value>
				</Kpi.Root>
			</div>

			<Box className="h-[420px] bg-neutral-900 rounded-b-none border-zinc-800">
				<AdminChart />
			</Box>
		</section>
	)
}
