'use client'

import { DotsThreeIcon, InstagramLogoIcon } from '@phosphor-icons/react'
import { type STZColumnDef, Table, TablePagination } from '@stz-code/ui'
import { Dropdown } from '@stz-code/ui/layout'
import { useBreakpoint } from '@/hooks/use-breakpoint'

type Event = {
	id: string
	name: string
	views: string
	clicks: string
	registrations: string
	conversion: string
}

export function SourcesChannelsTable() {
	const desktop = useBreakpoint('lg')

	const columns: STZColumnDef<Event>[] = [
		{
			accessorKey: 'name',
			header: 'Nome',
			size: desktop ? 100 : 48,
			cell: (info) => {
				return (
					<div className="flex gap-4 items-center w-full pl-3 py-2">
						<InstagramLogoIcon className="size-6 text-pink-400" />
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
			accessorKey: 'views',
			header: 'Visualizações',
			size: 24,
		},
		{
			accessorKey: 'clicks',
			header: 'Cliques',
			size: 24,
		},
		{
			accessorKey: 'registrations',
			header: 'Inscrições',
			size: 24,
		},
		{
			accessorKey: 'conversion',
			header: 'Conversão',
			size: 24,
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
			name: 'Instagram',
			views: '1400',
			clicks: '400',
			registrations: '280',
			conversion: '12%',
		},
		{
			id: '728e322f',
			name: 'Whatsapp',
			views: '1400',
			clicks: '400',
			registrations: '280',
			conversion: '12%',
		},
		{
			id: '7285452f',
			name: 'Link direto',
			views: '1400',
			clicks: '400',
			registrations: '280',
			conversion: '12%',
		},
		{
			id: '728egrew2f',
			name: 'Google',
			views: '1400',
			clicks: '400',
			registrations: '280',
			conversion: '12%',
		},
	]

	return (
		<Table.Root
			columns={columns}
			data={data}
			hideFilters={['name']}
			config={{
				columnVisibility: {
					registrations: desktop,
					conversion: desktop,
					clicks: desktop,
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
	)
}
