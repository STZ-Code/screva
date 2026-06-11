'use client'
import { CheckCircleIcon, DotsThreeIcon } from '@phosphor-icons/react'
import { Avatar, type STZColumnDef, Table, TablePagination } from '@stz-code/ui'
import { Dropdown } from '@stz-code/ui/layout'
import exampleImg from '@/assets/examples/picos.jpg'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { formatDate } from '@/utils/format-date'
import { CreateTransferSheet } from './create-transfer-sheet'

type Event = {
	id: string
	name: string
	city: string
	status: 'pending' | 'processing' | 'success' | 'failed'
	date: Date
	passOn: string
	organizer: string
}

export function TransfersTable() {
	const desktop = useBreakpoint('lg')

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
			accessorKey: 'organizer',
			header: 'Organização',
			size: 60,
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
			accessorKey: 'passOn',
			header: desktop ? 'Valor de repasse' : 'Valor',
			size: 32,
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
			id: 'actions',
			header: () => (
				<div className="2xl:text-left text-center w-full">Ações</div>
			),
			size: 24,
			cell: () => {
				return (
					<div className="w-full flex items-center 2xl:justify-start justify-center">
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
			passOn: 'R$ 1.400,25',
			organizer: 'Organizador 1',
		},
		{
			id: '728e322f',
			name: 'Evento 2',
			city: 'Juazeiro/BA',
			status: 'pending',
			date: new Date(2026, 5, 20),
			passOn: 'R$ 1.400,25',
			organizer: 'Organizador 1',
		},
		{
			id: '7285452f',
			name: 'Evento 3',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 8, 15),
			passOn: 'R$ 1.400,25',
			organizer: 'Organizador 1',
		},
		{
			id: '728egrew2f',
			name: 'Evento 4',
			city: 'Petrolina/PE',
			status: 'pending',
			date: new Date(2026, 11, 31),
			passOn: 'R$ 1.400,25',
			organizer: 'Organizador 1',
		},
	]

	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h2 className="font-semibold text-2xl text-zinc-200">Repasses</h2>

				<CreateTransferSheet />
			</div>

			<Table.Root
				columns={columns}
				data={data}
				config={{
					columnVisibility: {
						name: desktop,
						date: desktop,
						status: desktop,
					},
				}}
			>
				<Table.Container className="border-zinc-800 bg-neutral-900">
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
