'use client'

import {
	CheckCircleIcon,
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
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { formatDate } from '@/utils/format-date'
import { CouponDetailsSheet } from './coupon-details-sheet'
import { CreateCouponSheet } from './create-coupon-sheet'

type Coupon = {
	id: string
	name: string
	type: string
	value: string
	uses: string
	status: 'pending' | 'processing' | 'success' | 'failed'
	date: Date
}

export function CouponsTable() {
	const { control } = useForm()
	const desktop = useBreakpoint('lg')
	const [couponDetailsOpen, setCouponDetailsOpen] = useState(false)

	const columns: STZColumnDef<Coupon>[] = [
		{
			accessorKey: 'name',
			header: 'Nome',
			size: desktop ? 130 : 36,
			cell: (info) => {
				return (
					<div className="min-w-0 py-2 px-6">
						<p className="text-cyan-500 font-medium truncate">
							{info.row.original.name}
						</p>
					</div>
				)
			},
		},
		{
			accessorKey: 'type',
			header: 'Tipo',
			size: 24,
		},
		{
			accessorKey: 'value',
			header: 'Valor',
			size: 24,
		},
		{
			accessorKey: 'date',
			header: 'Validade',
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
			accessorKey: 'uses',
			header: 'Uso',
			size: 24,
			cell: (info) => <p>{info.row.original.uses}/200</p>,
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

	const data: Coupon[] = [
		{
			id: '728ed52f',
			name: 'PICOS1O',
			status: 'pending',
			date: new Date(2026, 3, 10),
			type: '%',
			uses: '10',
			value: '15%',
		},
		{
			id: '728e322f',
			name: '30REAIS',
			status: 'pending',
			date: new Date(2026, 5, 20),
			type: 'R$',
			uses: '0',
			value: 'R$ 30,00',
		},
		{
			id: '7285452f',
			name: 'PICOS15',
			status: 'pending',
			date: new Date(2026, 8, 15),
			type: '%',
			uses: '10',
			value: '15%',
		},
		{
			id: '728egrew2f',
			name: 'PICOSPRORACE',
			status: 'pending',
			date: new Date(2026, 11, 31),
			type: '%',
			uses: '10',
			value: '15%',
		},
		{
			id: '728egrew24134f',
			name: 'PRORACE',
			status: 'pending',
			date: new Date(2026, 11, 31),
			type: 'R$',
			uses: '120',
			value: 'R$ 20,00',
		},
	]

	function handleOpenCouponDetails(_: Coupon) {
		setCouponDetailsOpen(true)
	}

	return (
		<Table.Root
			columns={columns}
			data={data}
			hideFilters={['name']}
			config={{
				columnVisibility: {
					date: desktop,
					type: desktop,
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

				<CreateCouponSheet>
					<Sheet.Trigger asChild>
						<Button
							type="submit"
							className="py-2 outline-none h-fit px-6 xl:w-56 w-full normal-case font-semibold flex gap-2"
						>
							<PlusIcon size={20} weight="bold" />
							Criar cupom
						</Button>
					</Sheet.Trigger>
				</CreateCouponSheet>
			</div>

			<Table.Filters>
				<Table.ClearFilters>Limpar Filtros</Table.ClearFilters>
			</Table.Filters>

			<Table.Container className="border-zinc-800 bg-neutral-900 mt-3">
				<Table.Content>
					<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

					<Table.Body>
						<Table.Row
							onRowClick={handleOpenCouponDetails}
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

			<CouponDetailsSheet
				open={couponDetailsOpen}
				onOpenChange={setCouponDetailsOpen}
			/>
		</Table.Root>
	)
}
