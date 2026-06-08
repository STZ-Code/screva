'use client'

import { PencilSimpleLineIcon } from '@phosphor-icons/react'
import {
	type STZColumnDef,
	type STZRow,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { Accordion } from '@stz-code/ui/layout'

type Payment = {
	id: string
	amount: number
	status: 'pending' | 'processing' | 'success' | 'failed'
	email: string
	customer: string
	paymentMethod: string
}

const payments: Payment[] = [
	{
		id: '728ed52f',
		amount: 100,
		status: 'pending',
		email: 'maria.santos@example.com',
		customer: 'Maria Santos',
		paymentMethod: 'Credit card',
	},
	{
		id: '489e1d42',
		amount: 125,
		status: 'processing',
		email: 'ricardo.alves@example.com',
		customer: 'Ricardo Alves',
		paymentMethod: 'Pix',
	},
	{
		id: 'e3a9f1c7',
		amount: 240,
		status: 'success',
		email: 'ana.clara@example.com',
		customer: 'Ana Clara',
		paymentMethod: 'Boleto',
	},
	// {
	// 	id: '72c4b589',
	// 	amount: 52,
	// 	status: 'failed',
	// 	email: 'joao.moura@example.com',
	// 	customer: 'João Moura',
	// 	paymentMethod: 'Debit card',
	// },
	// {
	// 	id: 'b6d2e8fa',
	// 	amount: 178,
	// 	status: 'success',
	// 	email: 'leticia.souza@example.com',
	// 	customer: 'Letícia Souza',
	// 	paymentMethod: 'Credit card',
	// },
	// {
	// 	id: '41f0a7d9',
	// 	amount: 320,
	// 	status: 'processing',
	// 	email: 'carlos.ribeiro@example.com',
	// 	customer: 'Carlos Ribeiro',
	// 	paymentMethod: 'Pix',
	// },
	// {
	// 	id: 'e3a9f1c7',
	// 	amount: 240,
	// 	status: 'success',
	// 	email: 'ana.clara@example.com',
	// 	customer: 'Ana Clara Silva Sales',
	// 	paymentMethod: 'Boleto',
	// },
	// {
	// 	id: '72c4b589',
	// 	amount: 52,
	// 	status: 'failed',
	// 	email: 'joao.moura@example.com',
	// 	customer: 'Maristela Barros',
	// 	paymentMethod: 'Debit card',
	// },
	// {
	// 	id: 'b6d2e8fa',
	// 	amount: 178,
	// 	status: 'success',
	// 	email: 'leticia.souza@example.com',
	// 	customer: 'Lucia Almeida',
	// 	paymentMethod: 'Credit card',
	// },
	// {
	// 	id: '41f0a7d9',
	// 	amount: 320,
	// 	status: 'processing',
	// 	email: 'carlos.ribeiro@example.com',
	// 	customer: 'Vinicius Santos',
	// 	paymentMethod: 'Pix',
	// },
	// {
	// 	id: '728ed52f',
	// 	amount: 100,
	// 	status: 'pending',
	// 	email: 'maria.santos@example.com',
	// 	customer: 'Maria Santos',
	// 	paymentMethod: 'Credit card',
	// },
	// {
	// 	id: '489e1d42',
	// 	amount: 125,
	// 	status: 'processing',
	// 	email: 'ricardo.alves@example.com',
	// 	customer: 'Ricardo Alves',
	// 	paymentMethod: 'Pix',
	// },
	// {
	// 	id: 'e3a9f1c7',
	// 	amount: 240,
	// 	status: 'success',
	// 	email: 'ana.clara@example.com',
	// 	customer: 'Ana Clara',
	// 	paymentMethod: 'Boleto',
	// },
	// {
	// 	id: '72c4b589',
	// 	amount: 52,
	// 	status: 'failed',
	// 	email: 'joao.moura@example.com',
	// 	customer: 'João Moura',
	// 	paymentMethod: 'Debit card',
	// },
	// {
	// 	id: 'b6d2e8fa',
	// 	amount: 178,
	// 	status: 'success',
	// 	email: 'leticia.souza@example.com',
	// 	customer: 'Letícia Souza',
	// 	paymentMethod: 'Credit card',
	// },
	// {
	// 	id: '728ed52f',
	// 	amount: 100,
	// 	status: 'pending',
	// 	email: 'maria.santos@example.com',
	// 	customer: 'Maria Santos',
	// 	paymentMethod: 'Credit card',
	// },
	// {
	// 	id: '489e1d42',
	// 	amount: 125,
	// 	status: 'processing',
	// 	email: 'ricardo.alves@example.com',
	// 	customer: 'Ricardo Alves',
	// 	paymentMethod: 'Pix',
	// },
	// {
	// 	id: 'e3a9f1c7',
	// 	amount: 240,
	// 	status: 'success',
	// 	email: 'ana.clara@example.com',
	// 	customer: 'Ana Clara',
	// 	paymentMethod: 'Boleto',
	// },
	// {
	// 	id: '72c4b589',
	// 	amount: 52,
	// 	status: 'failed',
	// 	email: 'joao.moura@example.com',
	// 	customer: 'João Moura',
	// 	paymentMethod: 'Debit card',
	// },
	// {
	// 	id: 'b6d2e8fa',
	// 	amount: 178,
	// 	status: 'success',
	// 	email: 'leticia.souza@example.com',
	// 	customer: 'Letícia Souza',
	// 	paymentMethod: 'Credit card',
	// },
]

const columns: STZColumnDef<Payment>[] = [
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
	},
]

export function EventCategoriesTable() {
	return (
		<Table.Root columns={columns} data={payments}>
			<Table.Container className="h-fit border-0 rounded-none">
				<Table.Content>
					<tbody>
						<tr>
							<td>
								<Accordion.Root type="multiple">
									<Table.Accordion
										className="space-y-0"
										renderItem={(row: STZRow<Payment>) => (
											<Accordion.Item
												value={row.id}
												className="overflow-hidden border-b border-b-zinc-600 last:border-b"
											>
												<Accordion.Trigger className="w-full px-4 py-6 hover:no-underline rounded-none cursor-pointer hover:bg-neutral-800 data-[state=open]:bg-neutral-800 transition-colors font-bebas text-2xl">
													03 Km - PASSEIO/INICIANTES
												</Accordion.Trigger>
												<Accordion.Content className="border-t p-6 text-sm border-zinc-700 bg-dashboard-header flex flex-col gap-5">
													<div className="flex items-center justify-between">
														<span className="lg:text-2xl text-xl font-semibold text-zinc-100">
															KIT BASICO
														</span>

														<button
															type="button"
															className="bg-cyan-600 p-2 rounded flex gap-2 items-center font-medium"
														>
															<PencilSimpleLineIcon size={20} />
															Editar
														</button>
													</div>

													<div className="flex flex-col gap-4">
														<div className="flex lg:gap-20 gap-6">
															<div className="flex flex-col pl-3 border-l-4 border-emerald-600">
																<strong className="font-semibold text-lg text-zinc-200">
																	80
																</strong>
																<span className="text-zinc-400">
																	Inscrições confirmadas
																</span>
															</div>
															<div className="flex flex-col pl-3 border-l-4 border-sky-600">
																<strong className="font-semibold text-lg text-zinc-200">
																	14
																</strong>
																<span className="text-zinc-400">
																	Inscrições pendentes
																</span>
															</div>
															<div className="flex flex-col pl-3 border-l-4 border-yellow-600">
																<strong className="font-semibold text-lg text-zinc-200">
																	200
																</strong>
																<span className="text-zinc-400">
																	Quantidade restante de vagas
																</span>
															</div>
														</div>

														<div className="flex flex-col gap-2">
															<span className="text-lg font-semibold">
																Total de inscrições
															</span>

															<div className="flex h-3 gap-1 overflow-hidden bg-muted">
																<div className="bg-emerald-500 w-[10%] rounded-xs" />
																<div className="bg-blue-500 w-[5%] rounded-xs" />
																<div className="bg-amber-400 w-[85%] rounded-xs" />
															</div>
														</div>
													</div>

													<div className="flex flex-col gap-2">
														<span className="lg:text-lg text-base font-semibold">
															Detalhes do kit
														</span>

														<div className="flex gap-20">
															<div className="flex flex-col pl-3 border-l-4 border-zinc-700">
																<span className="text-zinc-400">Valor</span>
																<strong className="font-semibold lg:text-lg text-base text-zinc-200">
																	R$ 80,00
																</strong>
															</div>
															<div className="flex flex-col pl-3 border-l-4 border-zinc-700">
																<span className="text-zinc-400">
																	Vendas até
																</span>
																<strong className="font-semibold lg:text-lg text-base text-zinc-200">
																	13/04/2026
																</strong>
															</div>
														</div>

														<div className="mt-2">
															<div className="flex flex-col pl-3 border-l-4 border-zinc-700">
																<span className="text-zinc-400">Descrição</span>
																<strong className="font-semibold lg:text-base text-sm text-zinc-200">
																	Medalha de participação (ao concluir a prova),
																	Número de peito, Chip de cronometragem,
																	Alfinetes, Pulseira de Identificação, Brindes
																	dos Patrocinadores, Manual do Atleta.
																</strong>
															</div>
														</div>
													</div>
												</Accordion.Content>
											</Accordion.Item>
										)}
									>
										<Table.Fallback>No payments found</Table.Fallback>
									</Table.Accordion>
								</Accordion.Root>
							</td>
						</tr>
					</tbody>
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
