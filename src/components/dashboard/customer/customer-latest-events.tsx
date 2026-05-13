import { Avatar, type STZColumnDef, Table, TablePagination } from '@stz-code/ui'
import exampleImg from '@/assets/examples/picos.jpg'

type Event = {
	id: string
	name: string
	city: string
	category: string
	time: string
	pace: string
	posgeneral: string
	poscat: string
}

export function CustomerLatestEvents() {
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
			accessorKey: 'category',
			header: 'Categoria',
			size: 24,
		},
		{
			accessorKey: 'time',
			header: 'Tempo',
			size: 24,
		},
		{
			accessorKey: 'pace',
			header: 'Pace',
			size: 24,
		},
		{
			accessorKey: 'posgeneral',
			header: 'Colocação Geral',
			size: 48,
		},
		{
			accessorKey: 'poscat',
			header: 'Colocação Categoria',
			size: 48,
		},
	]

	const data: Event[] = [
		{
			id: '728ed52f',
			name: 'Evento 1',
			city: 'Petrolina/PE',
			category: '10KM',
			pace: '4:54/km',
			poscat: '42º',
			posgeneral: '42º',
			time: '00:24:32',
		},
		{
			id: '728e322f',
			name: 'Evento 2',
			city: 'Juazeiro/BA',
			category: '10KM',
			pace: '4:54/km',
			poscat: '42º',
			posgeneral: '42º',
			time: '00:24:32',
		},
		{
			id: '7285452f',
			name: 'Evento 3',
			city: 'Petrolina/PE',
			category: '10KM',
			pace: '4:54/km',
			poscat: '42º',
			posgeneral: '42º',
			time: '00:24:32',
		},
		{
			id: '728egrew2f',
			name: 'Evento 4',
			city: 'Petrolina/PE',
			category: '10KM',
			pace: '4:54/km',
			poscat: '42º',
			posgeneral: '42º',
			time: '00:24:32',
		},
	]

	return (
		<section>
			<div className="flex flex-col gap-4">
				<div className="flex justify-between items-center">
					<h2 className="font-semibold text-2xl text-zinc-200">
						Desempenho por evento
					</h2>
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
		</section>
	)
}
