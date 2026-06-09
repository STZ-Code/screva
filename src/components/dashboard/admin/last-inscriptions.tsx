'use client'
import { Avatar, type STZColumnDef, Table } from '@stz-code/ui'
import Link from 'next/link'
import { CaretRight, CheckCircle } from 'phosphor-react'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'

type Inscription = {
	id: string
	name: string
	status: string
	event: string
}

export function LastInscriptions() {
	const desktop = useBreakpoint('lg')

	const columns: STZColumnDef<Inscription>[] = [
		{
			accessorKey: 'name',
			header: 'Atleta',
			size: desktop ? 140 : 28,
			cell: (info) => {
				return (
					<div className="flex gap-4 items-center w-full">
						<Avatar.Root className="size-9 rounded-full">
							<Avatar.Image src="https://github.com/garcez17.png" />
							<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
						</Avatar.Root>

						<div className="min-w-0">
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
			header: 'Status do pagamento',
			size: 24,
			cell: (info) => (
				<StatusTag.Root>
					<StatusTag.Icon
						icon={CheckCircle}
						weight="fill"
						className="text-emerald-500"
					/>
					<StatusTag.Label className="text-zinc-200 text-xs">
						Confirmado
					</StatusTag.Label>
				</StatusTag.Root>
			),
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
			<Box className="border-zinc-800 gap-3 p-6 flex-1">
				<h2 className="text-2xl text-zinc-100 font-semibold">
					Últimas inscrições
				</h2>

				<Table.Root columns={columns} data={data}>
					<Table.Container className="border-none">
						<Table.Content>
							<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800 px-0" />

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
