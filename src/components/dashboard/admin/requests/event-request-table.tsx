'use client'

import {
	CalendarDotsIcon,
	FilePdfIcon,
	MapPinIcon,
	PersonSimpleRunIcon,
	TimerIcon,
	UsersIcon,
	WhatsappLogoIcon,
} from '@phosphor-icons/react'
import {
	Avatar,
	Sheet,
	type STZColumnDef,
	type STZRow,
	Table,
	TablePagination,
} from '@stz-code/ui'
import { Accordion } from '@stz-code/ui/layout'
import exampleImg from '@/assets/examples/picos.jpg'
import { Button } from '@/components/button'
import { Tag } from '@/components/tag'
import { ConfirmEventSheet } from '../events/confirm-event-sheet'

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

export function EventRequestTable() {
	return (
		<Table.Root columns={columns} data={payments}>
			<Table.Container className="h-fit border-0 rounded-none">
				<Table.Content>
					<tbody>
						<tr>
							<td>
								<Accordion.Root type="single" collapsible>
									<Table.Accordion
										className="space-y-0"
										renderItem={(row: STZRow<Payment>) => (
											<Accordion.Item
												value={row.id}
												className="overflow-hidden border-b border-b-zinc-600 last:border-b"
											>
												<Accordion.Trigger className="w-full px-4 py-6 hover:no-underline rounded-none cursor-pointer data-[state=open]:bg-neutral-800 hover:bg-neutral-800 transition-colors">
													<div className="flex gap-8 xl:flex-row flex-col justify-between w-full xl:pr-16">
														<div className="flex gap-8 xl:flex-row flex-col">
															<div className="flex gap-8">
																<div className="flex flex-col gap-4">
																	<Tag className="bg-emerald-800 text-emerald-300 xl:text-sm text-xs">
																		Novo evento
																	</Tag>

																	<Avatar.Root className="size-24 rounded">
																		<Avatar.Image src={exampleImg.src} />
																		<Avatar.Fallback>
																			Gabriel Garcez
																		</Avatar.Fallback>
																	</Avatar.Root>
																</div>

																<div className="flex gap-16">
																	<div className="flex flex-col gap-4">
																		<h2 className="font-bold xl:text-2xl text-xl text-zinc-50">
																			1ª Evento ITAIM RUN
																		</h2>

																		<div className="flex flex-col gap-1">
																			<span className="text-sm text-zinc-400">
																				Organização
																			</span>
																			<p className="font-semibold text-sm text-cyan-500">
																				ITAIM Equipe
																			</p>
																		</div>

																		<div className="flex gap-1">
																			<MapPinIcon size={16} />

																			<p className="font-semibold text-sm text-zinc-100">
																				Picos/PI
																			</p>
																		</div>
																	</div>
																</div>
															</div>

															<div className="flex gap-8 xl:flex-row flex-col">
																<div className="flex flex-col gap-8">
																	<div className="flex gap-4">
																		<CalendarDotsIcon size={32} />

																		<div>
																			<span className="text-sm text-zinc-400">
																				Data do evento
																			</span>
																			<p className="font-semibold text-sm text-cyan-500">
																				18/11/2026
																			</p>
																		</div>
																	</div>
																	<div className="flex gap-4">
																		<UsersIcon size={32} />

																		<div>
																			<span className="text-sm text-zinc-400">
																				Atletas esperados
																			</span>
																			<p className="font-semibold text-sm text-cyan-500">
																				Entre 100 e 150 atletas
																			</p>
																		</div>
																	</div>
																</div>
																<div className="flex flex-col gap-8">
																	<div className="flex gap-4">
																		<PersonSimpleRunIcon size={32} />

																		<div>
																			<span className="text-sm text-zinc-400">
																				Modalidades
																			</span>
																			<p className="font-semibold text-sm text-cyan-500">
																				MTB, Corrida de rua
																			</p>
																		</div>
																	</div>
																	<div className="flex gap-4">
																		<TimerIcon size={32} />

																		<div>
																			<span className="text-sm text-zinc-400">
																				Equipe de cronometragem
																			</span>
																			<p className="font-semibold text-sm text-cyan-500">
																				Cronosvale
																			</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div className="flex flex-col gap-1">
															<span className="text-sm text-zinc-400">
																Solicitado em
															</span>
															<p className="font-semibold text-sm text-zinc-100">
																10/05/2026
															</p>
														</div>
													</div>
												</Accordion.Trigger>
												<Accordion.Content className="border-t px-4 py-6 text-sm border-zinc-700 bg-dashboard-header flex flex-col gap-5">
													<div className="flex w-full gap-6 flex-col xl:flex-row">
														<div className="flex-1 border border-zinc-700 p-6 flex flex-col gap-2.5">
															<span className="font-bold text-zinc-50 text-xl">
																Detalhes do evento
															</span>
															<p className="text-lg text-zinc-400 font-semibold">
																Evento para corredores amadores e profissionais,
																com categorias de 5, 10 e 15 Km. Terá corridas
																de bicicletas com categorias de 10, 15 e 25 Km.
															</p>
														</div>
														<div className="border border-zinc-700 p-6 flex flex-col gap-2.5">
															<span className="text-xl font-bold text-zinc-50">
																Anexos
															</span>
															<div className="flex flex-col gap-3">
																<button
																	type="button"
																	className="flex items-center gap-1 underline hover:text-cyan-600 cursor-pointer transition-colors"
																>
																	<FilePdfIcon
																		size={24}
																		className="text-cyan-600"
																	/>
																	PAR-Q CIRCUITO SESC.pdf
																</button>
																<button
																	type="button"
																	className="flex items-center gap-1 underline hover:text-cyan-600 cursor-pointer transition-colors"
																>
																	<FilePdfIcon
																		size={24}
																		className="text-cyan-600"
																	/>
																	AUTORIZAÇÃO DE PARTICIPAÇÃO.pdf
																</button>
																<button
																	type="button"
																	className="flex items-center gap-1 underline hover:text-cyan-600 cursor-pointer transition-colors"
																>
																	<FilePdfIcon
																		size={24}
																		className="text-cyan-600"
																	/>
																	TERMO DE RESPONSABILIDADE.pdf
																</button>
															</div>
														</div>
													</div>

													<div className="flex justify-between flex-col xl:flex-row gap-6 xl:gap-0">
														<button
															type="button"
															className="h-12 border-2 font-semibold border-sky-500 text-sky-500 hover:bg-sky-900/30 cursor-pointer transition-colors px-4 flex items-center gap-3"
														>
															<WhatsappLogoIcon size={24} />
															Contato com o organizador
														</button>

														<div className="flex gap-4">
															<button
																type="button"
																className="h-12 w-44 border-2 font-semibold border-zinc-300 hover:text-red-400 hover:bg-red-900/30 hover:border-red-500 transition-colors px-4 cursor-pointer"
															>
																Rejeitar solicitação
															</button>

															<ConfirmEventSheet>
																<Sheet.Trigger asChild>
																	<Button
																		type="submit"
																		className="h-12 w-52 font-semibold px-8 rounded-none cursor-pointer bg-cyan-600 outline-none xl:w-56 normal-case"
																	>
																		Confirmar evento
																	</Button>
																</Sheet.Trigger>
															</ConfirmEventSheet>
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
