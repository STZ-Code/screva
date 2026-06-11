'use client'

import {
	DotsThreeIcon,
	FunnelIcon,
	MagnifyingGlassIcon,
	PlusIcon,
} from '@phosphor-icons/react'
import {
	Field,
	Sheet,
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { Dropdown } from '@stz-code/ui/layout'
import { Button } from '@/components/button'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { CreateTeamSheet } from '../../teams/create-team-sheet'
import { AddDocumentSheet } from './add-document-sheet'

type Event = {
	id: string
	name: string
}

export function AttachmentsTable() {
	const desktop = useBreakpoint('lg')

	const columns: STZColumnDef<Event>[] = [
		{
			accessorKey: 'name',
			header: 'Nome',
			size: desktop ? 360 : 48,
			cell: (info) => {
				return (
					<div className="min-w-0 py-2 px-6">
						<p className="text-zinc-200 font-medium truncate underline">
							{info.row.original.name}
						</p>
					</div>
				)
			},
		},
		{
			id: 'actions',
			header: () => (
				<div className="2xl:text-left text-center w-full">Ações</div>
			),
			size: 16,
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
			name: 'AUTORIZAÇÃO DE PARTICIPAÇÃO.pdf',
		},
		{
			id: '728e322f',
			name: 'TERMO DE RESPONSABILIDADE.pdf',
		},
		{
			id: '7285452f',
			name: 'REGULAMENTO.pdf',
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
			<div className="flex items-center justify-between mb-2 2xl:flex-row flex-col-reverse 2xl:gap-0 gap-4">
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

				<AddDocumentSheet>
					<Sheet.Trigger asChild>
						<Button
							type="submit"
							className="py-2 outline-none h-fit px-6 2xl:w-72 w-full normal-case font-semibold flex gap-2"
						>
							<PlusIcon size={20} weight="bold" />
							Adicionar documento
						</Button>
					</Sheet.Trigger>
				</AddDocumentSheet>
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
