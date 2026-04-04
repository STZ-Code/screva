'use client'
import {
	DotsThreeIcon,
	LockIcon,
	MagnifyingGlassIcon,
	PlusIcon,
} from '@phosphor-icons/react'
import {
	Avatar,
	Dropdown,
	Field,
	Input,
	Select,
	Sheet,
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { CreateEventSheet } from './create-event-sheet'

type Event = {
	id: string
	name: string
	city: string
	status: 'pending' | 'processing' | 'success' | 'failed'
	date: string
	subscribers: number
	organizer: string
}

export function EventsTable() {
	const { control } = useForm()

	const columns: STZColumnDef<Event>[] = [
		{
			accessorKey: 'name',
			header: 'Evento',
			cell: (info) => {
				return (
					<div className="w-48">
						<p>{info.row.original.name}</p>
						<p>{info.row.original.city}</p>
					</div>
				)
			},
		},
		{
			accessorKey: 'date',
			header: 'Data',
			size: 48,
			cell: (info) => {
				return (
					<div className="w-12">
						<p>{info.row.original.date}</p>
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
						<Dropdown.Trigger className="mx-auto">
							<DotsThreeIcon className="size-4 text-zinc-400 cursor-pointer" />
						</Dropdown.Trigger>
						<Dropdown.Content>
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
			city: 'São Paulo',
			status: 'pending',
			date: '2026-01-01',
			subscribers: 100,
			organizer: 'Organizador 1',
		},
		{
			id: '728e322f',
			name: 'Evento 2',
			city: 'São Paulo',
			status: 'pending',
			date: '2026-01-01',
			subscribers: 100,
			organizer: 'Organizador 1',
		},
		{
			id: '7285452f',
			name: 'Evento 3',
			city: 'São Paulo',
			status: 'pending',
			date: '2026-01-01',
			subscribers: 100,
			organizer: 'Organizador 1',
		},
		{
			id: '728egrew2f',
			name: 'Evento 4',
			city: 'São Paulo',
			status: 'pending',
			date: '2026-01-01',
			subscribers: 100,
			organizer: 'Organizador 1',
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

				<CreateEventSheet />
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
