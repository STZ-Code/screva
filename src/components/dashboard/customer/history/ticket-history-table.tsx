'use client'

import {
	Avatar,
	type STZColumnDef,
	type STZRow,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { Accordion } from '@stz-code/ui/layout'
import exampleImg from '@/assets/examples/picos.jpg'
import { ActionDivider } from '@/components/action-divider'

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
	{
		id: '72c4b589',
		amount: 52,
		status: 'failed',
		email: 'joao.moura@example.com',
		customer: 'João Moura',
		paymentMethod: 'Debit card',
	},
	{
		id: 'b6d2e8fa',
		amount: 178,
		status: 'success',
		email: 'leticia.souza@example.com',
		customer: 'Letícia Souza',
		paymentMethod: 'Credit card',
	},
	{
		id: '41f0a7d9',
		amount: 320,
		status: 'processing',
		email: 'carlos.ribeiro@example.com',
		customer: 'Carlos Ribeiro',
		paymentMethod: 'Pix',
	},
	{
		id: 'e3a9f1c7',
		amount: 240,
		status: 'success',
		email: 'ana.clara@example.com',
		customer: 'Ana Clara Silva Sales',
		paymentMethod: 'Boleto',
	},
	{
		id: '72c4b589',
		amount: 52,
		status: 'failed',
		email: 'joao.moura@example.com',
		customer: 'Maristela Barros',
		paymentMethod: 'Debit card',
	},
	{
		id: 'b6d2e8fa',
		amount: 178,
		status: 'success',
		email: 'leticia.souza@example.com',
		customer: 'Lucia Almeida',
		paymentMethod: 'Credit card',
	},
	{
		id: '41f0a7d9',
		amount: 320,
		status: 'processing',
		email: 'carlos.ribeiro@example.com',
		customer: 'Vinicius Santos',
		paymentMethod: 'Pix',
	},
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
	{
		id: '72c4b589',
		amount: 52,
		status: 'failed',
		email: 'joao.moura@example.com',
		customer: 'João Moura',
		paymentMethod: 'Debit card',
	},
	{
		id: 'b6d2e8fa',
		amount: 178,
		status: 'success',
		email: 'leticia.souza@example.com',
		customer: 'Letícia Souza',
		paymentMethod: 'Credit card',
	},
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
	{
		id: '72c4b589',
		amount: 52,
		status: 'failed',
		email: 'joao.moura@example.com',
		customer: 'João Moura',
		paymentMethod: 'Debit card',
	},
	{
		id: 'b6d2e8fa',
		amount: 178,
		status: 'success',
		email: 'leticia.souza@example.com',
		customer: 'Letícia Souza',
		paymentMethod: 'Credit card',
	},
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

export function TicketHistoryTable() {
	return (
		<Table.Root columns={columns} data={payments}>
			<Table.Container className="h-fit rounded border border-zinc-800 rounded-x">
				<Table.Content>
					<Accordion.Root type="single" collapsible>
						<Table.Accordion
							className="p-3"
							renderItem={(row: STZRow<Payment>) => (
								<Accordion.Item
									value={row.id}
									className="overflow-hidden rounded-xl shadow-sm border border-zinc-600 last:border-b"
								>
									<Accordion.Trigger className="w-full px-6 hover:no-underline cursor-pointer hover:bg-neutral-800 transition-colors">
										<div className="flex flex-col gap-4 w-1/2">
											<time className="text-base font-medium text-zinc-200">
												5 de março
											</time>

											<div className="flex w-full justify-between">
												<div className="flex gap-4">
													<Avatar.Root className="size-16 rounded border border-zinc-600">
														<Avatar.Image src={exampleImg.src} />
														<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
													</Avatar.Root>

													<div className="flex flex-col">
														<span className="font-semibold text-zinc-400">
															Número do pedido: #SCR-028391
														</span>
														<span className="font-semibold text-zinc-400">
															28/08/2025
														</span>
														<span className="font-semibold text-zinc-400">
															Confirmada
														</span>

														<button
															type="button"
															className="w-fit cursor-pointer text-sky-500 hover:text-sky-600 transition-colors"
														>
															Opções
														</button>
													</div>
												</div>

												<div className="flex flex-col gap-6">
													<span className="font-semibold text-zinc-400">
														Organizado por: SESC
													</span>

													<button
														type="button"
														className="w-fit cursor-pointer text-sky-500 hover:text-sky-600 transition-colors"
													>
														Enviar mensagem
													</button>
												</div>
											</div>
										</div>
									</Accordion.Trigger>
									<Accordion.Content className="border-t px-4 py-4 text-sm text-zinc-700">
										{/* <div className="space-y-2">
									<p className="truncate">
										<strong>Email:</strong> {row.original.email}
									</p>
									<p>
										<strong>Amount:</strong> R$ {row.original.amount}
									</p>
									<p>
										<strong>Method:</strong> {row.original.paymentMethod}
									</p>
								</div> */}
										<div className="flex flex-col gap-8">
											<div className="flex flex-col gap-2">
												<div className="flex items-center justify-between">
													<h4 className="text-zinc-200 font-semibold">
														Produtos
													</h4>
													<strong className="text-zinc-200 font-semibold">
														Quantidade
													</strong>
												</div>

												<div className="flex items-center justify-between">
													<span className="text-zinc-400 font-semibold">
														02KM - CAMINHADA
													</span>
													<p className="text-zinc-400 font-semibold">3</p>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-zinc-400 font-semibold">
														04KM - CAMINHADA
													</span>
													<p className="text-zinc-400 font-semibold">1</p>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-zinc-400 font-semibold">
														10KM - RUN
													</span>
													<p className="text-zinc-400 font-semibold">4</p>
												</div>
												<ActionDivider />
											</div>

											<div className="flex flex-col gap-2">
												<div className="flex items-center justify-between">
													<h4 className="text-zinc-200 font-semibold">
														Extras
													</h4>
													<strong className="text-zinc-200 font-semibold">
														Quantidade
													</strong>
												</div>

												<div className="flex items-center justify-between">
													<span className="text-zinc-400 font-semibold">
														Gravação de Medalha
													</span>
													<p className="text-zinc-400 font-semibold">1</p>
												</div>

												<ActionDivider />
											</div>

											<div className="flex items-center justify-between">
												<span className="text-zinc-400 font-semibold">
													Total
												</span>
												<p className="text-zinc-400 font-semibold">
													R$ R$ 338,00
												</p>
											</div>
										</div>
									</Accordion.Content>
								</Accordion.Item>
							)}
						>
							<Table.Fallback>No payments found</Table.Fallback>
						</Table.Accordion>
					</Accordion.Root>
				</Table.Content>
				{/* <TablePagination.Root className="border-t-zinc-800">
				<TablePagination.Prev />
				<TablePagination.Items />
				<TablePagination.Next />
			</TablePagination.Root> */}
			</Table.Container>
		</Table.Root>
	)
}
