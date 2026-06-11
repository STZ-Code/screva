'use client'

import {
	CheckCircleIcon,
	DotsThreeIcon,
	DownloadSimpleIcon,
	FileCsvIcon,
	FilePdfIcon,
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
import { Dropdown } from '@stz-code/ui/dropdown'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { formatDate } from '@/utils/format-date'
import { CreateFinancialReleaseSheet } from './create-financial-release-sheet'
import { StatementDetailsSheet } from './statement-details-sheet'

type Statement = {
	id: string
	name: string
	coupon: string
	type: string
	amount: string
	net_amount: string
	taxes: string
	status: 'pending' | 'processing' | 'success' | 'failed'
	date: Date
}

export function StatementsTable() {
	const { control } = useForm()
	const desktop = useBreakpoint('lg')
	const [statementDetailsOpen, setStatementDetailsOpen] = useState(false)

	const columns: STZColumnDef<Statement>[] = [
		{
			accessorKey: 'name',
			header: 'Nome',
			size: desktop ? 140 : 48,
			cell: (info) => {
				return (
					<div className="min-w-0 py-2">
						<p className="text-zinc-200 font-medium truncate">
							{info.row.original.name}
						</p>
					</div>
				)
			},
		},
		{
			accessorKey: 'date',
			header: 'Data',
			size: 32,
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
			accessorKey: 'coupon',
			header: 'Cupom',
			size: 24,
		},
		{
			accessorKey: 'type',
			header: 'Tipo',
			size: 24,
		},
		{
			accessorKey: 'amount',
			header: 'Bruto',
			size: 24,
		},
		{
			accessorKey: 'taxes',
			header: 'Taxa',
			size: 24,
			cell: (info) => (
				<p className="text-orange-300">{info.row.original.taxes}</p>
			),
		},
		{
			accessorKey: 'net_amount',
			header: 'Líquido',
			size: 24,
			cell: (info) => (
				<p className="text-green-300">{info.row.original.net_amount}</p>
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
			id: 'actions',
			header: () => <div className="text-center w-full">Ações</div>,
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

	const data: Statement[] = [
		{
			id: '728ed52f',
			name: 'Gabriel Santos Garcez',
			coupon: 'Não',
			status: 'pending',
			date: new Date(2026, 3, 10),
			type: 'Inscrição',
			amount: 'R$ 120,00',
			net_amount: 'R$ 110,00',
			taxes: 'R$ 10,00',
		},
		{
			id: '728e322f',
			name: 'Vinicius Lemos de Carvalho',
			coupon: 'PICOS20',
			status: 'pending',
			date: new Date(2026, 5, 20),
			type: 'Inscrição',
			amount: 'R$ 120,00',
			net_amount: 'R$ 110,00',
			taxes: 'R$ 10,00',
		},
		{
			id: '7285452f',
			name: 'Lucas Alberto Anjos',
			coupon: 'PICOS20',
			status: 'pending',
			date: new Date(2026, 8, 15),
			type: 'Inscrição',
			amount: 'R$ 120,00',
			net_amount: 'R$ 110,00',
			taxes: 'R$ 10,00',
		},
		{
			id: '728egrew2f',
			name: 'Joel de Oliveira Sá',
			coupon: 'Não',
			status: 'pending',
			date: new Date(2026, 11, 31),
			type: 'Inscrição',
			amount: 'R$ 120,00',
			net_amount: 'R$ 110,00',
			taxes: 'R$ 10,00',
		},
		{
			id: '728egrew24134f',
			name: 'Alexandre Macedo Nascimento',
			coupon: 'Não',
			status: 'pending',
			date: new Date(2026, 11, 31),
			type: 'Inscrição',
			amount: 'R$ 120,00',
			net_amount: 'R$ 80,00',
			taxes: 'R$ 10,00',
		},
	]

	function handleOpenStatementDetails(_: Statement) {
		setStatementDetailsOpen(true)
	}

	return (
		<Table.Root
			columns={columns}
			data={data}
			hideFilters={['name']}
			config={{
				columnVisibility: {
					taxes: desktop,
					amount: desktop,
					date: desktop,
					type: desktop,
					coupon: desktop,
					status: desktop,
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
							className="text-neutral-600 group-focus-within:text-cyan-500"
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

				<div className="flex items-center gap-2 xl:w-fit w-full xl:flex-row flex-row-reverse">
					<Dropdown.Root>
						<Dropdown.Trigger className="px-3.5 border border-zinc-300 rounded">
							<Dropdown.Label className="flex items-center gap-3 cursor-pointer hover:bg-zinc-300/10 transition-colors">
								<DownloadSimpleIcon size={26} />
								<p className="hidden xl:block">Exportar</p>
							</Dropdown.Label>
						</Dropdown.Trigger>
						<Dropdown.Content
							align="end"
							className="bg-neutral-800 border-zinc-600"
						>
							<Dropdown.Item className="text-zinc-300 cursor-pointer hover:bg-zinc-700 transition-colors">
								<FilePdfIcon className="size-5" />
								PDF
							</Dropdown.Item>
							<Dropdown.Item className="text-zinc-300 cursor-pointer hover:bg-zinc-700 transition-colors">
								<FileCsvIcon className="size-5" />
								CSV
							</Dropdown.Item>
						</Dropdown.Content>
					</Dropdown.Root>

					<CreateFinancialReleaseSheet>
						<Sheet.Trigger asChild>
							<Button
								type="submit"
								className="py-2 outline-none h-fit px-6 xl:w-56 flex-1 w-full normal-case font-semibold flex gap-2"
							>
								<PlusIcon size={20} weight="bold" />
								Novo lançamento
							</Button>
						</Sheet.Trigger>
					</CreateFinancialReleaseSheet>
				</div>
			</div>

			<Table.Filters>
				<Table.ClearFilters>Limpar Filtros</Table.ClearFilters>
			</Table.Filters>

			<Table.Container className="border-zinc-800 bg-neutral-900 mt-3">
				<Table.Content>
					<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

					<Table.Body>
						<Table.Row
							onRowClick={handleOpenStatementDetails}
							className="border-zinc-800 hover:bg-zinc-700/50 transition-colors cursor-pointer"
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

			<StatementDetailsSheet
				open={statementDetailsOpen}
				onOpenChange={setStatementDetailsOpen}
			/>
		</Table.Root>
	)
}
