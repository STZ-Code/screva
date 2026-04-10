'use client'
import { type STZColumnDef, Table } from '@stz-code/ui'
import { CaretRight } from 'phosphor-react'
import { Box } from '@/components/box'

type Inscription = {
	id: string
	name: string
	status: string
	event: string
}

export function LastInscriptions() {
	const columns: STZColumnDef<Inscription>[] = [
		{
			accessorKey: 'name',
			header: 'Evento',
			cell: (info) => {
				return (
					<div className="w-48">
						<p>{info.row.original.name}</p>
						<p>{info.row.original.event}</p>
					</div>
				)
			},
		},
		{
			accessorKey: 'status',
			header: 'Status do pagamento',
			size: 24,
		},
	]

	const data: Inscription[] = [
		{
			event: 'Picos Pro Race',
			id: '1',
			name: 'Gabriel Garcez',
			status: 'confirmado',
		},
	]

	return (
		<div className="flex-1">
			<Box className="rounded-b-none border-zinc-800 gap-3">
				<h2 className="text-2xl text-zinc-100 font-semibold">
					Últimas inscrições
				</h2>

				<Table.Root columns={columns} data={data} className="border-zinc-800">
					<Table.Container>
						<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

						<Table.Body>
							<Table.Row className="border-zinc-800">
								<Table.Fallback>Sem resultados encontrados</Table.Fallback>
							</Table.Row>
						</Table.Body>
					</Table.Container>
				</Table.Root>
			</Box>
			<div className="bg-zinc-800 py-2 px-4 rounded-b-md flex justify-between">
				<button
					type="button"
					className="text-cyan-600 text-sm flex-1  flex justify-between"
				>
					Ver mais detalhes
					<CaretRight className="size-5" />
				</button>
			</div>
		</div>
	)
}
