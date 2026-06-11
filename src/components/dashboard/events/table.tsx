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
import { Dropdown } from '@stz-code/ui/dropdown'
import { useRouter } from 'next/navigation'
import exampleImg from '@/assets/examples/picos.jpg'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { formatDate } from '@/utils/format-date'
import { CreateEventSheet } from './create-event-sheet'

type Event = {
	id: string
	name: string
	city: string
	slug: string
	status: 'pending' | 'processing' | 'success' | 'failed'
	date: Date
	subscribers: string
	organizer: string
}

export function EventsTable() {
	const desktop = useBreakpoint('lg')
	const router = useRouter()

	const columns: STZColumnDef<Event>[] = [
		{
			accessorKey: 'name',
			header: 'Evento',
			size: desktop ? 140 : 48,
			cell: (info) => {
				return (
					<div className="flex gap-4 items-center w-full pl-3">
						<Avatar.Root className="size-9 rounded">
							<Avatar.Image src={exampleImg.src} />
							<Avatar.Fallback>Picos Pro Race</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<p className="text-zinc-200 font-medium">
								{info.row.original.name}
							</p>
							<p className="text-zinc-500 text-sm truncate">
								{info.row.original.city}
							</p>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'date',
			header: 'Data',
			size: 36,
			cell: (info) => {
				const rawDate = info.row.original.date

				const formattedDate = formatDate(rawDate)

				return (
					<div>
						<p>{formattedDate}</p>
					</div>
				)
			},
		},
		{
			accessorKey: 'subscribers',
			header: () => (
				<div className="xl:text-left text-center w-full">Inscritos</div>
			),
			meta: {
				label: 'Inscritos',
			},
			size: 24,
			cell: (info) => (
				<div className="xl:text-left text-center w-full">
					{info.row.original.subscribers}
				</div>
			),
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
						Confirmado
					</StatusTag.Label>
				</StatusTag.Root>
			),
		},
		{
			accessorKey: 'organizer',
			header: 'Organizador',
			size: 80,
			cell: (info) => {
				return (
					<div className="flex gap-2 items-center">
						<Avatar.Root className="size-10 rounded">
							<Avatar.Image src="https://github.com/garcez17.png" />
							<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
						</Avatar.Root>
						<div className="flex flex-col">
							<p className="text-zinc-300">{info.row.original.organizer}</p>
							<p className="text-zinc-500">johndoe@mail.com</p>
						</div>
					</div>
				)
			},
		},
		{
			id: 'actions',
			header: () => (
				<div className="xl:text-left text-center w-full">Ações</div>
			),
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

	const data: Event[] = [
		{
			id: '728ed52f',
			name: 'Evento 1',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 3, 10),
			subscribers: '100',
			organizer: 'Organizador 1',
			slug: 'evento-1',
		},
		{
			id: '728e322f',
			name: 'Evento 2',
			city: 'Juazeiro/BA',
			status: 'pending',
			date: new Date(2026, 5, 20),
			subscribers: '100',
			organizer: 'Organizador 1',
			slug: 'evento-2',
		},
		{
			id: '7285452f',
			name: 'Evento 3',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 8, 15),
			subscribers: '100',
			organizer: 'Organizador 1',
			slug: 'evento-3',
		},
		{
			id: '728egrew2f',
			name: 'Evento 4',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 11, 31),
			subscribers: '100',
			organizer: 'Organizador 1',
			slug: 'evento-4',
		},
	]

	function goToEvent(data: Event) {
		router.push(`/dashboard/ev/${data.slug}`)
	}

	return (
		<div className="flex flex-col">
			<Table.Root
				columns={columns}
				data={data}
				hideFilters={['name']}
				config={{
					columnVisibility: {
						status: desktop,
						organizer: desktop,
						date: desktop,
					},
				}}
			>
				<div className="flex items-center justify-between mb-2 xl:flex-row flex-col-reverse gap-4">
					<div className="flex gap-2 w-full">
						<Table.FilterInput
							id="name"
							className="bg-neutral-900"
							fieldClassName="xl:w-1/2 w-full"
						>
							<Field.Icon
								icon={MagnifyingGlassIcon}
								className="text-zinc-600 group-focus-within:text-cyan-500"
							/>
						</Table.FilterInput>

						<Table.FilterDropdown>
							<Table.FilterDropdownTrigger className="bg-neutral-900 border border-zinc-800">
								<FunnelIcon size={24} className="text-zinc-500" />
							</Table.FilterDropdownTrigger>
							<Table.FilterDropdownContent>
								<Table.FilterDropdownItem id="subscribers">
									Inscritos
								</Table.FilterDropdownItem>
								<Table.FilterDropdownItem id="status">
									Status
								</Table.FilterDropdownItem>
							</Table.FilterDropdownContent>
						</Table.FilterDropdown>
					</div>

					<CreateEventSheet />
				</div>

				<Table.Filters>
					<Table.ClearFilters>Limpar Filtros</Table.ClearFilters>
				</Table.Filters>

				<Table.Container className="border-zinc-800 mt-2 bg-neutral-900">
					<Table.Content>
						<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

						<Table.Body>
							<Table.Row
								className="border-zinc-800 hover:bg-zinc-700/50 transition-colors cursor-pointer"
								onRowClick={goToEvent}
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
			</Table.Root>
		</div>
	)
}
