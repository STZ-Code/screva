import { Box } from '@/components/box'
import { Kpi } from '../kpi'
import { AdminChart } from './admin-chart'

export function AdminMetrics() {
	return (
		<section className="flex flex-col gap-4">
			<div className="flex gap-2 items-end">
				<h2 className="text-zinc-100 font-semibold text-xl">Métricas</h2>
				<span className="font-medium text-xs text-zinc-400 pb-1">
					Últimas 24 horas
				</span>
			</div>

			<div className="grid grid-cols-4 gap-4">
				<Kpi.Root>
					<Kpi.Label>Volume Transacionado</Kpi.Label>
					<Kpi.Value>R$ 4.200,00</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
					<Kpi.Label>Eventos Ativos</Kpi.Label>
					<Kpi.Value>15 Eventos</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
					<Kpi.Label>Receita da Plataforma</Kpi.Label>
					<Kpi.Value>741 Inscrições</Kpi.Value>
				</Kpi.Root>
				<Kpi.Root>
					<Kpi.Label>Taxa de Conversão</Kpi.Label>
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
