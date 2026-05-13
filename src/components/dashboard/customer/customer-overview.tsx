'use client'
import { PersonSimpleRunIcon } from '@phosphor-icons/react'
import { Kpi } from '../kpi'
import { Main } from '../main'
import { CustomerEventCard } from './customer-event-card'
import { CustomerHeader } from './customer-header'
import { CustomerLatestEvents } from './customer-latest-events'

export function CustomerOverview() {
	return (
		<Main className="gap-10 flex-row">
			<CustomerHeader />

			<div className="flex flex-1 flex-col gap-6">
				<section className="flex flex-col gap-4">
					<h2 className="text-2xl text-zinc-100 font-semibold">Métricas</h2>

					<div className="flex w-full gap-4">
						<Kpi.Root className="shadow-none flex-1 rounded items-center bg-neutral-900">
							<Kpi.Label className="text-sm normal-case flex gap-2 items-center text-zinc-300">
								<PersonSimpleRunIcon size={24} className="text-cyan-600" />
								Eventos concluídos
							</Kpi.Label>
							<Kpi.Value>30</Kpi.Value>
						</Kpi.Root>
						<Kpi.Root className="shadow-none flex-1 rounded items-center bg-neutral-900">
							<Kpi.Label className="text-sm normal-case flex gap-2 items-center text-zinc-300">
								<PersonSimpleRunIcon size={24} className="text-cyan-600" />
								Eventos concluídos
							</Kpi.Label>
							<Kpi.Value>30</Kpi.Value>
						</Kpi.Root>
						<Kpi.Root className="shadow-none flex-1 rounded items-center bg-neutral-900">
							<Kpi.Label className="text-sm normal-case flex gap-2 items-center text-zinc-300">
								<PersonSimpleRunIcon size={24} className="text-cyan-600" />
								Eventos concluídos
							</Kpi.Label>
							<Kpi.Value>30</Kpi.Value>
						</Kpi.Root>
						<Kpi.Root className="shadow-none flex-1 rounded items-center bg-neutral-900">
							<Kpi.Label className="text-sm normal-case flex gap-2 items-center text-zinc-300">
								<PersonSimpleRunIcon size={24} className="text-cyan-600" />
								Eventos concluídos
							</Kpi.Label>
							<Kpi.Value>30</Kpi.Value>
						</Kpi.Root>
					</div>
				</section>

				<section className="flex flex-col flex-1 gap-4">
					<h2 className="text-2xl text-zinc-100 font-semibold">Sua Jornada</h2>

					<div className="flex w-full gap-4">
						<CustomerEventCard />
						<CustomerEventCard />
						<CustomerEventCard />
					</div>
				</section>

				<CustomerLatestEvents />
			</div>
		</Main>
	)
}
