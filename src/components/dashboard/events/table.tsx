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
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'

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
			maxSize: 8,
			size: 8,
		},
		{
			accessorKey: 'status',
			header: 'Status',
			maxSize: 8,
			size: 8,
			// cell: (info) => {
			// 	return (
			// 		<div className='w-6'>
			// 			<p>{info.row.original.status}</p>
			// 		</div>
			// 	)
			// }
		},
		{
			accessorKey: 'organizer',
			header: 'Organizador',
			cell: (info) => {
				return (
					<div className="flex gap-2 w-7 items-center">
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
			cell: () => {
				return (
					<div className="w-fit">
						<Dropdown.Root>
							<Dropdown.Trigger>
								<DotsThreeIcon className="size-4 text-zinc-400 cursor-pointer" />
							</Dropdown.Trigger>
							<Dropdown.Content>
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

					<Field.Root control={control} name="status">
						<Input.Root className="border-none p-0 w-52 shadow-md">
							<Select.Root>
								<Select.Control
									className="border-zinc-800 bg-neutral-900"
									placeholder="Todos"
								>
									<Select.Portal>
										<Select.Item value="select-1">Select 1</Select.Item>
										<Select.Item value="select-2">Select 2</Select.Item>
										<Select.Item value="select-3">Select 3</Select.Item>
									</Select.Portal>
								</Select.Control>
							</Select.Root>
						</Input.Root>
					</Field.Root>
				</form>

				<Button
					type="submit"
					className="py-2 h-fit px-6 w-fit normal-case font-semibold flex gap-2"
				>
					<PlusIcon size={20} weight="bold" />
					Criar evento
				</Button>
			</div>

			<Table.Root columns={columns} data={data}>
				<Table.Container>
					<Table.Header className="text-zinc-400" />

					<Table.Body />
				</Table.Container>

				<TablePagination.Root>
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
