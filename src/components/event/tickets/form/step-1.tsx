'use client'
import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { Field, Input } from '@stz-code/ui'
import { Accordion } from '@stz-code/ui/layout'
import type { DefaultValues, Path } from 'react-hook-form'
import z from 'zod'
import { useMultiStepForm } from '@/hooks/use-multistep-form'
import { useStep } from '@/hooks/use-step'

const itemSchema = z.object({
	id: z.string(),
	title: z.string(),
	price: z.number(),
	fee: z.number(),

	quantity: z.number().min(0).default(0),
})

const categorySchema = z.object({
	id: z.string(),

	title: z.string(),

	items: z.array(itemSchema),
})

export const ticketSchema = z.object({
	categories: z.array(categorySchema),
})

type TicketSchema = z.infer<typeof ticketSchema>

const mockCategories = [
	{
		id: 'category-1',
		title: '02KM - CAMINHADAss',

		items: [
			{
				id: 'kit-01',
				title: 'KIT 01',
				price: 27,
				fee: 3.6,
				stock: 10,
			},
			{
				id: 'kit-02',
				title: 'KIT 02',
				price: 70,
				fee: 3.6,
				stock: 8,
			},
			{
				id: 'kit-03',
				title: 'KIT 03',
				price: 35,
				fee: 3.6,
				stock: 7,
			},
		],
	},
	{
		id: 'category-2',
		title: '05KM - CORRIDA',

		items: [
			{
				id: 'kit-04',
				title: 'KIT PREMIUM',
				price: 75,
				fee: 5.2,
				stock: 3,
			},
			{
				id: 'kit-05',
				title: 'KIT STANDARD',
				price: 55,
				fee: 4.1,
				stock: 2,
			},
		],
	},
]

const ticketStepDefaultValues: DefaultValues<TicketSchema> = {
	categories: mockCategories.map((category) => ({
		items: category.items.map(() => ({
			quantity: 0,
		})),
	})),
}

export function TicketsStep1() {
	const { next } = useMultiStepForm()
	const { control, watch, setValue, getValues } = useStep<TicketSchema>(
		'tickets',
		{
			defaultValues: ticketStepDefaultValues,
		},
	)

	const categories = mockCategories

	function handleDecreaseTicketQuantity(
		field: Path<TicketSchema>,
		quantity: number,
	) {
		const currentQuantity = Number(getValues(field) ?? quantity ?? 0)

		if (currentQuantity === 0) return

		setValue(field, Math.max(0, currentQuantity - 1))
	}

	function handleIncreaseTicketQuantity(
		field: Path<TicketSchema>,
		quantity: number,
		stock: number,
	) {
		const currentQuantity = Number(getValues(field) ?? quantity ?? 0)

		setValue(field, Math.min(stock, currentQuantity + 1))
	}

	return (
		<div className="flex flex-col gap-6 h-fit">
			<div className="flex flex-col gap-3">
				<h2 className="text-zinc-100 font-semibold text-2xl lg:text-xl">
					Suas categorias
				</h2>

				<span className="text-base lg:text-sm text-zinc-400">
					Adicione a quantidade de ingressos por categoria.
				</span>
			</div>

			<Accordion.Root
				type="multiple"
				className="flex flex-col gap-4 h-fit pb-1"
			>
				{categories.map((category, categoryIndex) => (
					<Accordion.Item
						key={category.id}
						value={category.id}
						className="border rounded border-zinc-600 last:border-b"
					>
						<Accordion.Trigger className="px-6 text-zinc-300 font-semibold text-lg lg:text-xl cursor-pointer">
							{category.title}
						</Accordion.Trigger>

						<Accordion.Content className="px-6 flex flex-col gap-4">
							{category.items.map((item, itemIndex) => {
								const field =
									`categories.${categoryIndex}.items.${itemIndex}.quantity` as const

								const quantity = Number(watch(field) ?? 0)

								const stock = item.stock

								return (
									<div
										key={item.id}
										className="flex items-center justify-between gap-1 lg:gap-4"
									>
										<div className="flex flex-col w-24 lg:w-36">
											<span className="text-base lg:text-lg text-zinc-300 line-clamp-2 leading-tight">
												{item.title} teste testge
											</span>
										</div>

										<Field.Root name={field} control={control}>
											<Input.Root className="w-fit px-4 justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
												<Field.Icon
													icon={MinusIcon}
													onClick={() =>
														handleDecreaseTicketQuantity(field, quantity)
													}
													ariaLabel="Diminuir quantidade"
													className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
												/>

												<Input.Control
													className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
													type="number"
													min={0}
													max={stock}
												/>

												<Field.Icon
													icon={PlusIcon}
													onClick={() =>
														handleIncreaseTicketQuantity(field, quantity, stock)
													}
													ariaLabel="Aumentar quantidade"
													className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
												/>
											</Input.Root>

											<Field.Error />
										</Field.Root>

										<div className="flex flex-col gap-0.5 text-right w-24">
											<strong className="text-zinc-200 font-bold text-sm lg:text-base">
												R$ {item.price.toFixed(2)}
											</strong>

											<span className="text-xs text-zinc-400 font-bold">
												(+ R$ {item.fee.toFixed(2)} em taxas)
											</span>
										</div>
									</div>
								)
							})}
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion.Root>

			<button
				type="button"
				onClick={next}
				className="bg-cyan-600 rounded-md font-bold h-12 px-3 cursor-pointer text-sm hover:bg-cyan-700 transition-colors"
			>
				Continuar
			</button>
		</div>
	)
}
