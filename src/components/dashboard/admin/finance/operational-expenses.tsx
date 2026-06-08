'use client'
import { Avatar, type STZColumnDef, Table } from '@stz-code/ui'
import { Box } from '@/components/box'
import { useBreakpoint } from '@/hooks/use-breakpoint'

type Inscription = {
	id: string
	name: string
	status: string
	event: string
}

export function OperationalExpenses() {
	const desktop = useBreakpoint('lg')

	const columns: STZColumnDef<Inscription>[] = [
		{
			accessorKey: 'name',
			header: '',
			size: desktop ? 200 : 40,
			cell: (info) => {
				return (
					<div className="flex gap-4 items-center">
						<Avatar.Root className="size-9 rounded-full">
							<Avatar.Image src="https://github.com/garcez17.png" />
							<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
						</Avatar.Root>
						<div className="flex-1 min-w-0">
							<p className="text-zinc-200 truncate">{info.row.original.name}</p>
							<p className="text-zinc-500 text-sm truncate">
								{info.row.original.event}
							</p>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'status',
			header: '',
			size: 24,
			cell: (info) => <p className="font-semibold text-lg">R$ 1.400,00</p>,
		},
	]

	const data: Inscription[] = [
		{
			event: 'Picos Pro Race',
			id: '1',
			name: 'Gabriel Garcez',
			status: 'confirmado',
		},
		{
			event: 'Picos Pro Race',
			id: '2',
			name: 'Alexandre Macedo Nascimento',
			status: 'confirmado',
		},
		{
			event: 'Picos Pro Race',
			id: '3',
			name: 'Lucas Alberto',
			status: 'confirmado',
		},
		{
			event: 'Picos Pro Race',
			id: '4',
			name: 'Vinicius Lemos',
			status: 'confirmado',
		},
		{
			event: 'Picos Pro Race',
			id: '5',
			name: 'Joel Oliveira',
			status: 'confirmado',
		},
	]

	return (
		<div className="flex-1 h-full flex flex-col">
			<Box className="border-zinc-800 gap-3 lg:p-6 p-4 flex-1">
				<h2 className="lg:text-2xl text-xl text-zinc-100 font-semibold">
					Despesas Operacionais
				</h2>

				<Table.Root columns={columns} data={data}>
					<Table.Container className="border-none">
						<Table.Content>
							<Table.Body>
								<Table.Row className="border-zinc-800">
									<Table.Fallback>Sem resultados encontrados</Table.Fallback>
								</Table.Row>
							</Table.Body>
						</Table.Content>
					</Table.Container>
				</Table.Root>
			</Box>
		</div>
	)
}
