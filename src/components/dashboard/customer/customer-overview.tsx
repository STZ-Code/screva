'use client'
import {
	CalendarBlankIcon,
	MedalIcon,
	PersonSimpleRunIcon,
} from '@phosphor-icons/react'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { Main } from '../main'
import { CustomerHeader } from './customer-header'
import { CustomerHighlights } from './customer-highlights'
import { CustomerInfo } from './customer-info'
import { CustomerSummary } from './customer-summary'

export function CustomerOverview() {
	const desktop = useBreakpoint('lg')

	return (
		<Main className="flex-col py-0 2xl:px-40 px-0">
			<CustomerHeader />

			<CustomerSummary />

			<div className="flex flex-col gap-6 2xl:px-16 px-6 2xl:border-l 2xl:border-r border-zinc-700">
				<div className="flex gap-6 flex-1 2xl:flex-row flex-col">
					<CustomerInfo.Root>
						<CustomerInfo.Header>
							<CustomerInfo.Title>Atividades recentes</CustomerInfo.Title>
							<CustomerInfo.CTA href="#">Ver todas</CustomerInfo.CTA>
						</CustomerInfo.Header>
						<CustomerInfo.Content>
							<CustomerInfo.Item className="px-6 flex gap-4">
								<PersonSimpleRunIcon size={40} className="text-cyan-600" />

								<div className="flex items-center gap-4 flex-1">
									<div className="flex flex-col gap-1 mr-auto">
										<strong>Capivara Run 2026</strong>
										<span className="text-zinc-400 text-sm">10/06/2026</span>
									</div>

									<div className="w-20">
										<span className="font-medium text-zinc-300">32:46</span>
									</div>

									<div className="w-8">
										<span className="font-medium text-zinc-400">17º</span>
									</div>
								</div>
							</CustomerInfo.Item>
							<CustomerInfo.Item className="px-6 flex gap-4">
								<PersonSimpleRunIcon size={40} className="text-cyan-600" />

								<div className="flex items-center gap-4 flex-1">
									<div className="flex flex-col gap-1 mr-auto">
										<strong>Picos Pro Race 2026</strong>
										<span className="text-zinc-400 text-sm">10/06/2026</span>
									</div>

									<div className="w-20">
										<span className="font-medium text-zinc-300">41:46</span>
									</div>

									<div className="w-8">
										<span className="font-medium text-zinc-400">28º</span>
									</div>
								</div>
							</CustomerInfo.Item>
							<CustomerInfo.Item className="px-6 flex gap-4">
								<PersonSimpleRunIcon size={40} className="text-cyan-600" />

								<div className="flex items-center gap-4 flex-1">
									<div className="flex flex-col gap-1 mr-auto">
										<strong>SESC Recife</strong>
										<span className="text-zinc-400 text-sm">10/06/2026</span>
									</div>

									<div className="w-20">
										<span className="font-medium text-zinc-300">28:12</span>
									</div>

									<div className="w-8">
										<span className="font-medium text-zinc-400">7º</span>
									</div>
								</div>
							</CustomerInfo.Item>
						</CustomerInfo.Content>
					</CustomerInfo.Root>
					<CustomerInfo.Root>
						<CustomerInfo.Header>
							<CustomerInfo.Title>Melhores desempenhos</CustomerInfo.Title>
							<CustomerInfo.CTA href="#">Ver todas</CustomerInfo.CTA>
						</CustomerInfo.Header>
						<CustomerInfo.Content>
							<CustomerInfo.Item className="px-6 flex gap-4">
								<MedalIcon size={40} className="text-cyan-600" />

								<div className="flex items-center gap-4 flex-1">
									<div className="flex flex-col gap-1 mr-auto">
										<strong>Capivara Run 2026</strong>
										<span className="text-zinc-400 text-sm">10/06/2026</span>
									</div>

									<div className="w-20 flex flex-col gap-1">
										<span className="font-medium text-zinc-400">28:12</span>
										<span className="font-medium text-zinc-400 text-xs">
											Extra-oficial
										</span>
									</div>
								</div>
							</CustomerInfo.Item>
							<CustomerInfo.Item className="px-6 flex gap-4">
								<MedalIcon size={40} className="text-cyan-600" />

								<div className="flex items-center gap-4 flex-1">
									<div className="flex flex-col gap-1 mr-auto">
										<strong>Picos Pro Race 2026</strong>
										<span className="text-zinc-400 text-sm">10/06/2026</span>
									</div>

									<div className="w-20 flex flex-col gap-1">
										<span className="font-medium text-zinc-400">28:12</span>
										<span className="font-medium text-zinc-400 text-xs">
											Tempo oficial
										</span>
									</div>
								</div>
							</CustomerInfo.Item>
							<CustomerInfo.Item className="px-6 flex gap-4">
								<MedalIcon size={40} className="text-cyan-600" />

								<div className="flex items-center gap-4 flex-1">
									<div className="flex flex-col gap-1 mr-auto">
										<strong>SESC Recife</strong>
										<span className="text-zinc-400 text-sm">10/06/2026</span>
									</div>

									<div className="w-20 flex flex-col gap-1">
										<span className="font-medium text-zinc-400">28:12</span>
										<span className="font-medium text-zinc-400 text-xs">
											Tempo oficial
										</span>
									</div>
								</div>
							</CustomerInfo.Item>
						</CustomerInfo.Content>
					</CustomerInfo.Root>
				</div>

				<CustomerInfo.Root>
					<CustomerInfo.Header>
						<CustomerInfo.Title>Próximos eventos</CustomerInfo.Title>
						<CustomerInfo.CTA href="#">Ver todas</CustomerInfo.CTA>
					</CustomerInfo.Header>
					<CustomerInfo.Content>
						<CustomerInfo.Item className="px-6 flex gap-4">
							<CalendarBlankIcon size={40} className="text-cyan-600" />

							<div className="flex items-center gap-4 flex-1">
								<div className="flex flex-col gap-1 mr-auto">
									<strong>Capivara Run 2026</strong>
									<span className="text-zinc-400 text-sm">10/06/2026</span>
								</div>

								<div>
									<span className="font-medium text-zinc-400">Inscrito</span>
								</div>
							</div>
						</CustomerInfo.Item>
						<CustomerInfo.Item className="px-6 flex gap-4">
							<CalendarBlankIcon size={40} className="text-cyan-600" />

							<div className="flex items-center gap-4 flex-1">
								<div className="flex flex-col gap-1 mr-auto">
									<strong>Picos Pro Race 2026</strong>
									<span className="text-zinc-400 text-sm">10/06/2026</span>
								</div>

								<div>
									<span className="font-medium text-zinc-400">Inscrito</span>
								</div>
							</div>
						</CustomerInfo.Item>
						<CustomerInfo.Item className="px-6 flex gap-4">
							<CalendarBlankIcon size={40} className="text-cyan-600" />

							<div className="flex items-center gap-4 flex-1">
								<div className="flex flex-col gap-1 mr-auto">
									<strong>SESC Recife</strong>
									<span className="text-zinc-400 text-sm">10/06/2026</span>
								</div>

								<div>
									<span className="font-medium text-zinc-400">Inscrito</span>
								</div>
							</div>
						</CustomerInfo.Item>
					</CustomerInfo.Content>
				</CustomerInfo.Root>
			</div>

			<CustomerHighlights />
		</Main>
	)
}
