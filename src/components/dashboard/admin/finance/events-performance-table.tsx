'use client'
import { CheckCircleIcon, DotsThreeIcon } from '@phosphor-icons/react'
import {
	Avatar,
	Dropdown,
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import exampleImg from '@/assets/examples/picos.jpg'
import { StatusTag } from '@/components/status-tag'
import { formatDate } from '@/utils/format-date'

type Event = {
	id: string
	name: string
	city: string
	status: 'pending' | 'processing' | 'success' | 'failed'
	date: Date
	subscribers: number
	organizer: string
}

export function EventsPerformanceTable() {
	const { control } = useForm()

	const columns: STZColumnDef<Event>[] = [
		{
			accessorKey: 'name',
			header: 'Evento',
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
			size: 48,
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
			header: 'Inscritos',
			size: 24,
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
			header: 'Ações',
			size: 24,
			cell: () => {
				return (
					<Dropdown.Root>
						<Dropdown.Trigger>
							<DotsThreeIcon className="size-4 text-zinc-400 cursor-pointer" />
						</Dropdown.Trigger>
						<Dropdown.Content align="start">
							<Dropdown.Item>
								<p>Editar</p>
							</Dropdown.Item>
						</Dropdown.Content>
					</Dropdown.Root>
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
			subscribers: 100,
			organizer: 'Organizador 1',
		},
		{
			id: '728e322f',
			name: 'Evento 2',
			city: 'Juazeiro/BA',
			status: 'pending',
			date: new Date(2026, 5, 20),
			subscribers: 100,
			organizer: 'Organizador 1',
		},
		{
			id: '7285452f',
			name: 'Evento 3',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 8, 15),
			subscribers: 100,
			organizer: 'Organizador 1',
		},
		{
			id: '728egrew2f',
			name: 'Evento 4',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 11, 31),
			subscribers: 100,
			organizer: 'Organizador 1',
		},
	]

	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h2 className="font-semibold text-2xl text-zinc-200">
					Desempenho por evento
				</h2>
			</div>

			<Table.Root columns={columns} data={data} className="border-zinc-800">
				<Table.Container>
					<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

					<Table.Body>
						<Table.Row className="border-zinc-800">
							<Table.Fallback>Sem resultados encontrados</Table.Fallback>
						</Table.Row>
					</Table.Body>
				</Table.Container>

				<TablePagination.Root className="border-zinc-800">
					<TablePagination.Prev />
					<TablePagination.Items
						itemClassName="bg-zinc-50 hover:bg-zinc-200"
						activeClassName="bg-zinc-200 text-cyan-600"
					/>
					<TablePagination.Next />
				</TablePagination.Root>
			</Table.Root>
		</div>
	)
}
