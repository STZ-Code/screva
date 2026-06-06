'use client'

import {
	CheckCircleIcon,
	PersonSimpleRunIcon,
	TimerIcon,
} from '@phosphor-icons/react'
import {
	Avatar,
	type STZColumnDef,
	type STZRow,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { Accordion } from '@stz-code/ui/layout'
import Image from 'next/image'
import exampleImg from '@/assets/examples/picos.jpg'
import creditCardImg from '@/assets/images/mastercard.png'
import { ActionDivider } from '@/components/action-divider'
import { StatusTag } from '@/components/status-tag'

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
			<Table.Container className="h-fit border-none rounded-none hover:shadow-none">
				<Table.Content>
					<Accordion.Root type="single" collapsible>
						<Table.Accordion
							className="space-y-0 divide-y divide-zinc-700"
							renderItem={(row: STZRow<Payment>) => (
								<Accordion.Item value={row.id} className="overflow-hidden">
									<Accordion.Trigger className="w-full rounded-none px-6 hover:no-underline cursor-pointer data-[state=open]:bg-neutral-800 hover:bg-neutral-800 transition-colors">
										<div className="flex w-full lg:flex-row flex-col lg:gap-0 gap-8">
											<div className="flex lg:gap-10 gap-6 lg:w-1/2 w-full">
												<div className="flex flex-col gap-4">
													<time className="text-base font-medium text-zinc-200">
														5 de março
													</time>

													<Avatar.Root className="size-20 rounded border border-zinc-600">
														<Avatar.Image src={exampleImg.src} />
														<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
													</Avatar.Root>
												</div>

												<div className="flex flex-col gap-2">
													<div className="flex flex-col gap-2">
														<div className="flex gap-4 items-center">
															<span className="text-lg font-medium text-zinc-400">
																Pedido
															</span>

															<StatusTag.Root className="border-zinc-700">
																<StatusTag.Icon
																	icon={CheckCircleIcon}
																	weight="fill"
																	className="text-emerald-500"
																/>
																<StatusTag.Label className="text-zinc-200 text-xs">
																	Confirmado
																</StatusTag.Label>
															</StatusTag.Root>
														</div>
														<p className="font-semibold text-xl text-zinc-100">
															#SCR-028391
														</p>
													</div>

													<div className="flex flex-col gap-1">
														<span className="text-sm text-zinc-400">
															Organização
														</span>
														<p className="font-semibold text-sm text-zinc-100">
															ITAIM Equipe
														</p>
													</div>
												</div>
											</div>

											<div className="flex flex-col gap-6">
												<div className="flex gap-4">
													<PersonSimpleRunIcon size={32} />

													<div>
														<span className="text-sm text-zinc-400">
															Organização
														</span>
														<p className="font-semibold text-sm text-zinc-100">
															Picos Pro Race Organizações
														</p>
													</div>
												</div>
												<div className="flex gap-4">
													<TimerIcon size={32} />

													<div>
														<span className="text-sm text-zinc-400">
															Equipe de cronometragem
														</span>
														<p className="font-semibold text-sm text-zinc-100">
															Cronosvale
														</p>
													</div>
												</div>
											</div>
										</div>
									</Accordion.Trigger>
									<Accordion.Content className="border-t px-4 py-4 text-sm text-zinc-700 bg-neutral-800/40 flex lg:flex-row flex-col gap-8">
										<div className="flex flex-col gap-8 flex-1">
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
										<div className="flex flex-col gap-8">
											<div className="flex flex-col gap-2">
												<span className="text-zinc-300 font-semibold text-md">
													Pagamento
												</span>

												<div className="flex lg:gap-16 gap-4">
													<div className="flex">
														<Image
															src={creditCardImg}
															alt="mastercard"
															width={64}
														/>

														<div className="flex flex-col">
															<span className="text-zinc-200 font-semibold">
																Mastercard com final 8745
															</span>
															<span className="text-zinc-500 font-semibold">
																Cartão de crédito
															</span>
														</div>
													</div>

													<div className="flex flex-col">
														<span className="text-zinc-100 font-semibold text-right">
															R$ 140,00
														</span>
														<span className="text-zinc-300 font-medium">
															(2x R$ 70,00)
														</span>
													</div>
												</div>
											</div>

											<div className="flex flex-col gap-2">
												<span className="text-zinc-300 font-semibold text-md">
													Ações
												</span>

												<div className="flex flex-col gap-2">
													<button
														type="button"
														className="bg-cyan-700 hover:bg-cyan-800 transition-colors py-2 px-16 text-zinc-200 font-semibold text-md rounded cursor-pointer"
													>
														Contatar organizador
													</button>
													<button
														type="button"
														className="bg-cyan-700 hover:bg-cyan-800 transition-colors py-2 px-16 text-zinc-200 font-semibold text-md rounded cursor-pointer"
													>
														Solicitar reembolso
													</button>
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
