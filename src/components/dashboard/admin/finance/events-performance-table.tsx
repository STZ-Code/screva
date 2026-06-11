'use client'
import { Avatar, type STZColumnDef, Table, TablePagination } from '@stz-code/ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import exampleImg from '@/assets/examples/picos.jpg'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { EventPerformanceDetailsSheet } from './events-performance-details-sheet'

type EventPerformance = {
	id: string
	name: string
	city: string
	revenue: string
	refunds: string
	contestations: string
	percentage_contastations: string
}

export function EventsPerformanceTable() {
	const desktop = useBreakpoint('lg')
	const { control } = useForm()
	const [eventPerformanceDetailsOpen, setEventPerformanceDetailsOpen] =
		useState(false)

	const columns: STZColumnDef<EventPerformance>[] = [
		{
			accessorKey: 'name',
			header: 'Evento',
			size: desktop ? 200 : 80,
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
			accessorKey: 'revenue',
			header: 'Receita',
			size: 40,
		},
		{
			accessorKey: 'refunds',
			header: 'Reembolsos',
			size: 40,
		},
		{
			accessorKey: 'contestations',
			header: 'Contestações',
			size: 40,
		},
		{
			accessorKey: 'percentage_contastations',
			header: 'Contestação (%)',
			size: 40,
		},
	]

	const data: EventPerformance[] = [
		{
			id: '728ed52f',
			name: 'Evento 1',
			city: 'Petrolina/PE',
			revenue: 'R$ 4.210,45',
			refunds: '3',
			contestations: '3',
			percentage_contastations: '2%',
		},
		{
			id: '728e322f',
			name: 'Evento 2',
			city: 'Juazeiro/BA',
			revenue: 'R$ 2.450,45',
			refunds: '1',
			contestations: '1',
			percentage_contastations: '2%',
		},
		{
			id: '7285452f',
			name: 'Evento 3',
			city: 'Petrolina/PE',
			revenue: 'R$ 8.920,45',
			refunds: '0',
			contestations: '0',
			percentage_contastations: '0%',
		},
		{
			id: '728egrew2f',
			name: 'Evento 4',
			city: 'Petrolina/PE',
			revenue: 'R$ 640,45',
			refunds: '5',
			contestations: '8',
			percentage_contastations: '3%',
		},
	]

	function handleOpenEventPerformanceDetails() {
		setEventPerformanceDetailsOpen(true)
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h2 className="font-semibold text-2xl text-zinc-200">
					Desempenho por evento
				</h2>
			</div>

			<Table.Root
				columns={columns}
				data={data}
				config={{
					columnVisibility: {
						percentage_contastations: desktop,
						contestations: desktop,
						refunds: desktop,
					},
				}}
			>
				<Table.Container className="border-zinc-800 bg-neutral-900">
					<Table.Content>
						<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

						<Table.Body>
							<Table.Row
								onRowClick={handleOpenEventPerformanceDetails}
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

				<EventPerformanceDetailsSheet
					onOpenChange={setEventPerformanceDetailsOpen}
					open={eventPerformanceDetailsOpen}
				/>
			</Table.Root>
		</div>
	)
}
