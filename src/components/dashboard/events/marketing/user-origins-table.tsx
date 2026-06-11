'use client'

import { FunnelIcon, MagnifyingGlassIcon } from '@phosphor-icons/react'
import {
	Avatar,
	Field,
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import exampleImg from '@/assets/examples/picos.jpg'
import { useBreakpoint } from '@/hooks/use-breakpoint'

type Event = {
	id: string
	name: string
	source: string
}

export function UserOriginsTable() {
	const desktop = useBreakpoint('lg')

	const columns: STZColumnDef<Event>[] = [
		{
			accessorKey: 'name',
			header: 'Nome',
			cell: (info) => {
				return (
					<div className="flex gap-4 items-center w-full pl-3 xl:py-0 py-2">
						<Avatar.Root className="size-9 rounded-full hidden xl:block">
							<Avatar.Image src={exampleImg.src} />
							<Avatar.Fallback>Picos Pro Race</Avatar.Fallback>
						</Avatar.Root>
						<div className="min-w-0">
							<p className="text-zinc-200 font-medium truncate">
								{info.row.original.name}
							</p>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'source',
			header: 'Origem',
			size: desktop ? 16 : 56,
		},
	]

	const data: Event[] = [
		{
			id: '728ed52f',
			name: 'Gabriel Santos Garcez',
			source: 'Instagram',
		},
		{
			id: '728e322f',
			name: 'Vinicius Lemos de Carvalho',
			source: 'Twitter/X',
		},
		{
			id: '7285452f',
			name: 'Lucas Alberto Anjos',
			source: 'Whatsapp',
		},
		{
			id: '728egrew2f',
			name: 'Joel de Oliveira Sá',
			source: 'Link direto',
		},
		{
			id: '728egrew24134f',
			name: 'Alexandre Macedo Nascimento',
			source: 'Instagram',
		},
	]

	return (
		<Table.Root
			columns={columns}
			data={data}
			hideFilters={['name']}
			config={{
				columnVisibility: {},
			}}
		>
			<div className="flex items-center justify-between mb-2 xl:flex-row flex-col-reverse gap-4">
				<div className="flex gap-2 w-full">
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
			</div>

			<Table.Filters>
				<Table.ClearFilters>Limpar Filtros</Table.ClearFilters>
			</Table.Filters>

			<Table.Container className="border-zinc-800 bg-neutral-900 mt-3">
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
	)
}
