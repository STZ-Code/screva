'use client'
import {
	CheckCircleIcon,
	DotsThreeIcon,
	FunnelIcon,
	MagnifyingGlassIcon,
} from '@phosphor-icons/react'
import {
	Avatar,
	Field,
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { Dropdown } from '@stz-code/ui/layout'
import { useState } from 'react'
import exampleImg from '@/assets/examples/picos.jpg'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { formatDate } from '@/utils/format-date'
import { SubscriptionDetailsSheet } from './subscription-details-sheet'

type Subscription = {
	id: string
	name: string
	description: string
	status: 'active' | 'inactive'
	lastEvent: Date
	eventsCount: string
}

export function SubscriptionsTable() {
	const desktop = useBreakpoint('lg')
	const [subscriptionDetailsOpen, setSubscriptionDetailsOpen] = useState(false)

	const columns: STZColumnDef<Subscription>[] = [
		{
			accessorKey: 'name',
			header: 'Evento',
			size: 60,
			cell: (info) => {
				return (
					<div className="flex items-center gap-4 w-full pl-3">
						<Avatar.Root className="size-9 rounded shrink-0">
							<Avatar.Image src={exampleImg.src} />
							<Avatar.Fallback>Picos Pro Race</Avatar.Fallback>
						</Avatar.Root>

						<div className="flex-1 min-w-0">
							<p className="text-zinc-200 font-medium truncate">
								{info.row.original.name}
							</p>

							<p className="text-zinc-500 text-sm truncate">
								{info.row.original.description}
							</p>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'eventsCount',
			header: desktop ? 'Eventos atendidos' : 'Eventos',
			size: 24,
			cell: (info) => (
				<div className="2xl:w-fit w-full">
					<p className="text-center">{info.row.original.eventsCount}</p>
				</div>
			),
		},
		{
			accessorKey: 'lastEvent',
			header: 'Última atividade',
			size: 24,
			cell: (info) => {
				const rawDate = info.row.original.lastEvent

				const formattedDate = formatDate(rawDate)

				return (
					<div>
						<p>{formattedDate}</p>
					</div>
				)
			},
		},
		{
			accessorKey: 'status',
			header: 'Status',
			size: 32,
			cell: (info) => (
				<StatusTag.Root>
					<StatusTag.Icon
						icon={CheckCircleIcon}
						weight="fill"
						className="text-emerald-500"
					/>
					<StatusTag.Label className="text-zinc-200 text-xs">
						Ativo
					</StatusTag.Label>
				</StatusTag.Root>
			),
		},
		{
			header: 'Ações',
			size: 24,
			cell: () => {
				return (
					<div className="w-full flex items-center xl:justify-start justify-center">
						<Dropdown.Root>
							<Dropdown.Trigger className="self-center hover:bg-zinc-900 rounded w-8 transition-colors">
								<DotsThreeIcon className="size-4 text-zinc-400 cursor-pointer" />
							</Dropdown.Trigger>
							<Dropdown.Content
								align="end"
								className="bg-neutral-800 border-zinc-600"
							>
								<Dropdown.Item className="text-zinc-300 cursor-pointer hover:bg-zinc-700 transition-colors">
									Editar
								</Dropdown.Item>
								<Dropdown.Item className="text-red-400 cursor-pointer hover:bg-zinc-700 transition-colors">
									Apagar
								</Dropdown.Item>
							</Dropdown.Content>
						</Dropdown.Root>
					</div>
				)
			},
		},
	]

	const data: Subscription[] = [
		{
			id: '728ed52f',
			name: 'Equipe 1',
			status: 'active',
			lastEvent: new Date(2026, 3, 10),
			eventsCount: '100',
			description: 'Equipe de cronometragem de Picos',
		},
		{
			id: '728e322f',
			name: 'Equipe 2',
			status: 'active',
			lastEvent: new Date(2026, 3, 10),
			eventsCount: '45',
			description: 'Equipe de Petrolina',
		},
		{
			id: '7285452f',
			name: 'Equipe 3',
			status: 'active',
			lastEvent: new Date(2026, 3, 10),
			eventsCount: '6',
			description: 'Equipe de cronometragem de Salgueiro',
		},
		{
			id: '728egrew2f',
			name: 'Equipe 4',
			status: 'inactive',
			lastEvent: new Date(2026, 3, 10),
			eventsCount: '3',
			description: 'Equipe de organização de Garanhuns',
		},
	]

	function handleOpenSubscriptionDetails(_: Subscription) {
		setSubscriptionDetailsOpen(true)
	}

	return (
		<div className="flex flex-col">
			<Table.Root
				columns={columns}
				data={data}
				hideFilters={['name']}
				config={{
					columnVisibility: {
						lastEvent: desktop,
						status: desktop,
					},
				}}
			>
				<div className="flex gap-2 mb-4">
					<Table.FilterInput
						id="name"
						fieldClassName="xl:w-1/2 w-full"
						className="bg-neutral-900"
					>
						<Field.Icon
							icon={MagnifyingGlassIcon}
							className="text-zinc-600 group-focus-within:text-cyan-500"
						/>
					</Table.FilterInput>

					<Table.FilterDropdown>
						<Table.FilterDropdownTrigger className="bg-zinc-900 border border-zinc-800">
							<FunnelIcon size={24} className="text-zinc-500" />
						</Table.FilterDropdownTrigger>
						<Table.FilterDropdownContent>
							<Table.FilterDropdownItem id="eventsCount">
								Eventos
							</Table.FilterDropdownItem>
							<Table.FilterDropdownItem id="status">
								Status
							</Table.FilterDropdownItem>
						</Table.FilterDropdownContent>
					</Table.FilterDropdown>
				</div>

				<Table.Filters>
					<Table.ClearFilters>Limpar Filtros</Table.ClearFilters>
				</Table.Filters>

				<Table.Container className="border-zinc-800 bg-neutral-900">
					<Table.Content>
						<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

						<Table.Body>
							<Table.Row
								onRowClick={handleOpenSubscriptionDetails}
								className="border-zinc-800 hover:bg-zinc-700/50 transition-colors cursor-pointer"
							>
								<Table.Fallback>Sem resultados encontrados</Table.Fallback>
							</Table.Row>
						</Table.Body>
					</Table.Content>

					<TablePagination.Root className="border-zinc-800">
						<TablePagination.Prev className="border-zinc-500 text-zinc-300 disabled:border-zinc-600 hover:bg-zinc-100/10 disabled:text-zinc-600 cursor-pointer" />
						<TablePagination.Items
							itemClassName="bg-zinc-600 hover:bg-zinc-700 cursor-pointer"
							activeClassName="bg-cyan-600 text-zinc-200 hover:bg-cyan-700 cursor-pointer"
						/>
						<TablePagination.Next className="border-zinc-500 text-zinc-300 disabled:border-zinc-600 hover:bg-zinc-100/10 disabled:text-zinc-600 cursor-pointer" />
					</TablePagination.Root>
				</Table.Container>

				<SubscriptionDetailsSheet
					open={subscriptionDetailsOpen}
					onOpenChange={setSubscriptionDetailsOpen}
				/>
			</Table.Root>
		</div>
	)
}
