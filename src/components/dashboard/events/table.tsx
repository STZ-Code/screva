'use client'
import {
	CheckCircleIcon,
	DotsThreeIcon,
	FunnelIcon,
	MagnifyingGlassIcon,
} from '@phosphor-icons/react'
import {
	Avatar,
	Dropdown,
	Field,
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import exampleImg from '@/assets/examples/picos.jpg'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { formatDate } from '@/utils/format-date'
import { CreateEventSheet } from './create-event-sheet'

type Event = {
	id: string
	name: string
	city: string
	status: 'pending' | 'processing' | 'success' | 'failed'
	date: Date
	subscribers: string
	organizer: string
}

export function EventsTable() {
	const desktop = useBreakpoint('lg')
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
							<p className="text-zinc-500 text-sm line-clamp-1">
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
			size: desktop ? 48 : 36,
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
				<div className="lg:text-left text-center w-full">Inscritos</div>
			),
			size: 24,
			cell: (info) => (
				<div className="lg:text-left text-center w-full">
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
				<div className="lg:text-left text-center w-full">Ações</div>
			),
			size: 24,
			cell: () => {
				return (
					<div className="w-full flex items-center lg:justify-start justify-center">
						<Dropdown.Root>
							<Dropdown.Trigger className="self-center">
								<DotsThreeIcon className="size-4 text-zinc-400 cursor-pointer" />
							</Dropdown.Trigger>
							<Dropdown.Content align="start">
								<Dropdown.Item>
									<p>Editar</p>
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
		},
		{
			id: '728e322f',
			name: 'Evento 2',
			city: 'Juazeiro/BA',
			status: 'pending',
			date: new Date(2026, 5, 20),
			subscribers: '100',
			organizer: 'Organizador 1',
		},
		{
			id: '7285452f',
			name: 'Evento 3',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 8, 15),
			subscribers: '100',
			organizer: 'Organizador 1',
		},
		{
			id: '728egrew2f',
			name: 'Evento 4',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 11, 31),
			subscribers: '100',
			organizer: 'Organizador 1',
		},
	]

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
				<div className="flex items-center justify-between mb-2 lg:flex-row flex-col-reverse lg:gap-0 gap-4">
					<div className="flex gap-2 w-full">
						<Table.FilterInput id="name" className="flex-1">
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
							<Table.Row className="border-zinc-800">
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
