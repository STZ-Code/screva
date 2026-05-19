'use client'

import {
	CalendarDotsIcon,
	MapPinIcon,
	PersonSimpleRunIcon,
	TimerIcon,
	UsersIcon,
} from '@phosphor-icons/react'
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
import { Tag } from '@/components/tag'

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
		<Table.Root
			columns={columns}
			data={payments}
			className="h-fit border-0 rounded-none"
		>
			<Accordion.Root type="single" collapsible>
				<Table.Accordion
					className="space-y-0"
					renderItem={(row: STZRow<Payment>) => (
						<Accordion.Item
							value={row.id}
							className="overflow-hidden border-b border-b-zinc-600 last:border-b"
						>
							<Accordion.Trigger className="w-full px-4 py-6 hover:no-underline rounded-none cursor-pointer hover:bg-neutral-800 transition-colors">
								<div className="flex gap-8">
									<div className="flex flex-col gap-4">
										<Tag className="bg-emerald-800 text-emerald-300">
											Novo evento
										</Tag>

										<Avatar.Root className="size-24 rounded">
											<Avatar.Image src={exampleImg.src} />
											<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
										</Avatar.Root>
									</div>

									<div className="flex gap-16">
										<div className="flex flex-col gap-4">
											<h2 className="font-bold text-2xl text-zinc-50">
												1ª Evento ITAIM RUN
											</h2>

											<div className="flex flex-col gap-1">
												<span className="text-sm text-zinc-400">
													Organização
												</span>
												<p className="font-semibold text-sm text-zinc-100">
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
										<div className="flex flex-col gap-8">
											<div className="flex gap-2">
												<CalendarDotsIcon size={32} />

												<div>
													<span className="text-sm text-zinc-400">
														Data do evento
													</span>
													<p className="font-semibold text-sm text-zinc-100">
														18/11/2026
													</p>
												</div>
											</div>
											<div className="flex gap-2">
												<UsersIcon size={32} />

												<div>
													<span className="text-sm text-zinc-400">
														Atletas esperados
													</span>
													<p className="font-semibold text-sm text-zinc-100">
														Entre 100 e 150 atletas
													</p>
												</div>
											</div>
										</div>
										<div className="flex flex-col gap-8">
											<div className="flex gap-2">
												<PersonSimpleRunIcon size={32} />

												<div>
													<span className="text-sm text-zinc-400">
														Modalidades
													</span>
													<p className="font-semibold text-sm text-zinc-100">
														MTB, Corrida de rua
													</p>
												</div>
											</div>
											<div className="flex gap-2">
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
								</div>

								<div className="flex flex-col gap-1">
									<span className="text-sm text-zinc-400">Solicitado em</span>
									<p className="font-semibold text-sm text-zinc-100">
										10/05/2026
									</p>
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
											<h4 className="text-zinc-200 font-semibold">Produtos</h4>
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
											<h4 className="text-zinc-200 font-semibold">Extras</h4>
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
										<span className="text-zinc-400 font-semibold">Total</span>
										<p className="text-zinc-400 font-semibold">R$ R$ 338,00</p>
									</div>
								</div>
							</Accordion.Content>
						</Accordion.Item>
					)}
				>
					<Table.Fallback>No payments found</Table.Fallback>
				</Table.Accordion>
			</Accordion.Root>

			<TablePagination.Root className="border-t-zinc-800">
				<TablePagination.Prev />
				<TablePagination.Items />
				<TablePagination.Next />
			</TablePagination.Root>
		</Table.Root>
	)
}
