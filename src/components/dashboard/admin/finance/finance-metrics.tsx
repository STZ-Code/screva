'use client'
import { CaretDownIcon, PersonSimpleRunIcon } from '@phosphor-icons/react'
import { Field, Select } from '@stz-code/ui'
import { ArrowDownLeft, ArrowUpRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { Kpi } from '../../kpi'
import { AdminChart } from '../admin-chart'

export function FinanceMetrics() {
	const desktop = useBreakpoint('lg')
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
				<Kpi.Root className="w-[calc(50%-0.5rem)] lg:flex-1 rounded bg-neutral-900 shadow-none">
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
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="lg:text-5xl text-xl">
								R$ 456.200,00
							</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon
							size={desktop ? 64 : 40}
							className="text-cyan-600"
						/>
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] lg:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Receita da Plataforma</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								5.45%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="lg:text-5xl text-xl">
								R$ 40.200,00
							</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon
							size={desktop ? 64 : 40}
							className="text-cyan-600"
						/>
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] lg:flex-1 rounded bg-neutral-900 shadow-none">
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
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="lg:text-5xl text-xl">30</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon
							size={desktop ? 64 : 40}
							className="text-cyan-600"
						/>
					</div>
				</Kpi.Root>
				<Kpi.Root className="w-[calc(50%-0.5rem)] lg:flex-1 rounded bg-neutral-900 shadow-none">
					<div className="flex justify-between items-center">
						<Kpi.Label>Saldo</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex flex-col gap-1">
							<Kpi.Value className="lg:text-5xl text-xl">R$ 420,00</Kpi.Value>
							<span className="text-sm text-zinc-400">Este ano</span>
						</div>

						<PersonSimpleRunIcon
							size={desktop ? 64 : 40}
							className="text-cyan-600"
						/>
					</div>
				</Kpi.Root>
			</div>

			<Box className="lg:h-105 bg-neutral-900 rounded-b-none p-4 border-zinc-800">
				<AdminChart />
			</Box>
		</section>
	)
}
