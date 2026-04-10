'use client'
import {
	CheckCircleIcon,
	DotsThreeIcon,
	MagnifyingGlassIcon,
} from '@phosphor-icons/react'
import {
	Avatar,
	Dropdown,
	Field,
	Input,
	Select,
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import exampleImg from '@/assets/examples/picos.jpg'
import { StatusTag } from '@/components/status-tag'
import { formatDate } from '@/utils/format-date'
import { CreateTeamSheet } from './create-team-sheet'

type Event = {
	id: string
	name: string
	description: string
	status: 'active' | 'inactive'
	lastEvent: Date
	eventsCount: number
}

export function TeamsTable() {
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
								{info.row.original.description}
							</p>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'eventsCount',
			header: 'Eventos atendidos',
			size: 24,
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
			name: 'Equipe 1',
			status: 'active',
			lastEvent: new Date(2026, 3, 10),
			eventsCount: 100,
			description: 'Equipe de cronometragem de Picos',
		},
		{
			id: '728e322f',
			name: 'Equipe 2',
			status: 'active',
			lastEvent: new Date(2026, 3, 10),
			eventsCount: 45,
			description: 'Equipe de Petrolina',
		},
		{
			id: '7285452f',
			name: 'Equipe 3',
			status: 'active',
			lastEvent: new Date(2026, 3, 10),
			eventsCount: 6,
			description: 'Equipe de cronometragem de Salgueiro',
		},
		{
			id: '728egrew2f',
			name: 'Equipe 4',
			status: 'inactive',
			lastEvent: new Date(2026, 3, 10),
			eventsCount: 3,
			description: 'Equipe de organização de Garanhuns',
		},
	]

	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-between">
				<form className="flex items-center gap-5">
					<Field.Root control={control} name="q">
						<Input.Root className="py-2 border-zinc-800 focus-within:ring-2 focus-within:ring-cyan-500 bg-neutral-900 shadow-md">
							<Field.Icon
								icon={MagnifyingGlassIcon}
								className="text-zinc-600 group-focus-within:text-cyan-500"
							/>
							<Input.Control
								placeholder="Buscar evento"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>

					<Field.Root name="document" control={control}>
						<Select.Root>
							<Select.Control>
								<Select.Trigger className="border-zinc-800 bg-neutral-900 shadow-md">
									<Select.Placeholder className="text-zinc-600">
										Teste
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
				</form>

				<CreateTeamSheet />
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
