'use client'
import { DotsThreeVerticalIcon } from '@phosphor-icons/react'
import { type STZColumnDef, Table } from '@stz-code/ui'
import { Dropdown } from '@stz-code/ui/layout'
import { CheckCircle } from 'phosphor-react'
import { Box } from '@/components/box'
import { StatusTag } from '@/components/status-tag'

type Inscription = {
	id: string
	name: string
	value: number
}

export function PlataformHealth() {
	const columns: STZColumnDef<Inscription>[] = [
		{
			accessorKey: 'name',
			header: 'Evento',
			cell: (info) => {
				return (
					<div>
						<p className="text-zinc-400 font-semibold lg:text-xl text-base">
							{info.row.original.name}
						</p>
					</div>
				)
			},
		},
		{
			accessorKey: 'status',
			header: '',
			size: 8,
			cell: (info) => (
				<div className="flex flex-col gap-2 items-end">
					<StatusTag.Root>
						<StatusTag.Icon
							icon={CheckCircle}
							weight="fill"
							className="text-emerald-500 size-4"
						/>
						<StatusTag.Label className="text-zinc-200 text-xs">
							Saudável
						</StatusTag.Label>
					</StatusTag.Root>

					<div className="flex gap-2">
						<span className="text-zinc-100 font-semibold">0,6%</span>
						<span className="text-zinc-400 text-xs font-semibold">
							(limite: 1%)
						</span>
					</div>
				</div>
			),
		},
	]

	const data: Inscription[] = [
		{
			id: '1',
			name: 'Taxa de contestação',
			value: 6,
		},
		{
			id: '2',
			name: 'Taxa de reembolso',
			value: 6,
		},
		{
			id: '3',
			name: 'Taxa de aprovação',
			value: 6,
		},
	]

	return (
		<div className="h-full flex flex-col flex-1">
			<Box className="border-zinc-800 gap-3 lg:p-6 p-4 flex-1">
				<div className="flex items-center justify-between">
					<h2 className="lg:text-2xl text-lg text-zinc-100 font-semibold">
						Saúde Financeira da Plataforma
					</h2>

					<Dropdown.Root>
						<Dropdown.Trigger>
							<DotsThreeVerticalIcon className="size-6 text-zinc-400 cursor-pointer" />
						</Dropdown.Trigger>
						<Dropdown.Content align="end">
							<Dropdown.Item>
								<p>Editar</p>
							</Dropdown.Item>
						</Dropdown.Content>
					</Dropdown.Root>
				</div>

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
