'use client'
import { ArrowDownLeft, ArrowUpRight } from 'phosphor-react'
import { StatusTag } from '@/components/status-tag'
import { Kpi } from '../../kpi'

export function RiskIndicators() {
	return (
		<div className="flex flex-col lg:w-2/5 gap-3">
			<div className="grid grid-cols-2 gap-4">
				<Kpi.Root className="rounded">
					<div className="flex justify-between items-center">
						<Kpi.Label>Contestações pendentes</Kpi.Label>

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

					<Kpi.Value className="text-3xl">10 contestações</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root className="rounded">
					<div className="flex justify-between items-center">
						<Kpi.Label>Contestações confirmadas</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								5.45%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>

					<Kpi.Value className="text-3xl">21 pagamentos</Kpi.Value>
				</Kpi.Root>

				<Kpi.Root className="rounded">
					<div className="flex justify-between items-center">
						<Kpi.Label>Reembolsos solicitados</Kpi.Label>
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

					<Kpi.Value className="text-3xl">4 reembolsos</Kpi.Value>
				</Kpi.Root>

				<Kpi.Root className="rounded">
					<div className="flex justify-between items-center">
						<Kpi.Label>Taxa de Contestação (%)</Kpi.Label>
						<StatusTag.Root className="bg-red-800/30 border-none gap-2">
							<StatusTag.Icon icon={ArrowDownLeft} className="text-red-300" />
							<StatusTag.Label className="text-red-300 text-xs">
								9.12%
							</StatusTag.Label>
						</StatusTag.Root>
					</div>

					<Kpi.Value className="text-3xl">0.45%</Kpi.Value>
				</Kpi.Root>
			</div>

			<div className="h-full flex items-center">
				<span className="text-zinc-500 text-sm">
					Os dados acima são analisados com base nos limites definidos nas
					configurações da plataforma. <br />
					Eventos com alta taxa de contestação ou reembolso podem exigir revisão
					manual antes do repasse.
				</span>
			</div>
		</div>
	)
}
