'use client'
import { Avatar, type STZColumnDef, Table } from '@stz-code/ui'
import Link from 'next/link'
import { CaretRight, CheckCircle } from 'phosphor-react'
import exampleImg from '@/assets/examples/picos.jpg'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'

type Inscription = {
	id: string
	name: string
	city: string
	status: string
}

export function EventList() {
	const desktop = useBreakpoint('lg')

	const columns: STZColumnDef<Inscription>[] = [
		{
			accessorKey: 'name',
			header: 'Evento',
			size: desktop ? 48 : 28,
			cell: (info) => {
				return (
					<div className="flex gap-4 items-center w-full">
						<Avatar.Root className="size-9 rounded">
							<Avatar.Image src={exampleImg.src} />
							<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
						</Avatar.Root>
						<div className="min-w-0">
							<p className="text-zinc-200 truncate">{info.row.original.name}</p>
							<p className="text-zinc-500 text-sm truncate">
								{info.row.original.city}
							</p>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'status',
			header: '',
			size: 16,
			cell: (info) => (
				<StatusTag.Root>
					<StatusTag.Icon
						icon={CheckCircle}
						weight="fill"
						className="text-emerald-500 size-4"
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
			id: '1',
			city: 'Picos/PI',
			name: 'Picos Pro Race',
			status: 'confirmado',
		},
		{
			id: '2',
			city: 'Santa Maria da Boa Vista/PE',
			name: 'Picos Pro Race 2',
			status: 'confirmado',
		},
	]

	return (
		<div className="lg:w-1/4 h-full flex flex-col">
			<Box className="rounded-b-none border-zinc-800 gap-3 p-6 flex-1">
				<h2 className="text-2xl text-zinc-100 font-semibold">
					Próximos eventos
				</h2>

				<Table.Root columns={columns} data={data}>
					<Table.Container className="border-none">
						<Table.Content>
							<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

							<Table.Body>
								<Table.Row className="border-zinc-800">
									<Table.Fallback>Sem resultados encontrados</Table.Fallback>
								</Table.Row>
							</Table.Body>
						</Table.Content>
					</Table.Container>
				</Table.Root>
			</Box>
			<div className="bg-zinc-800 py-2 px-4 rounded-b-md flex justify-between">
				<Link
					href={'/dashboard/eventos'}
					className="text-cyan-600 text-sm flex-1 flex justify-between cursor-pointer hover:opacity-80 transition-opacity"
				>
					Ver mais detalhes
					<CaretRight className="size-5" />
				</Link>
			</div>
		</div>
	)
}
