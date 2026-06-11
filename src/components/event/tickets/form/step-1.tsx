'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { Field, Input } from '@stz-code/ui'
import { Accordion } from '@stz-code/ui/layout'
import { useEffect } from 'react'
import type { DefaultValues, Path } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useMultiStepForm } from '@/hooks/use-multistep-form'

const ticketItemFormSchema = z.object({
	quantity: z.number().min(0).default(0).optional(),
})

const ticketCategoryFormSchema = z.object({
	items: z.array(ticketItemFormSchema),
})

export const categoriesStepSchema = z
	.object({
		categories: z.array(ticketCategoryFormSchema),
	})
	.superRefine((data, ctx) => {
		const hasSelectedItem = data.categories.some((category) =>
			category.items.some((item) => {
				if (!item.quantity) return false

				return item.quantity > 0
			}),
		)

		if (hasSelectedItem) return

		ctx.addIssue({
			code: 'custom',
			message: 'Selecione ao menos um ingresso',
			path: ['categories'],
		})
	})

type CategoriesStepSchema = z.infer<typeof categoriesStepSchema>

const mockCategories = [
	{
		id: 'category-1',
		title: '02KM - CAMINHADA',

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

const ticketStepDefaultValues: DefaultValues<CategoriesStepSchema> = {
	categories: mockCategories.map((category) => ({
		id: category.id,
		title: category.title,
		items: category.items.map((item) => ({
			id: item.id,
			title: item.title,
			quantity: 0,
		})),
	})),
}

export function TicketsStep1() {
	const { next, registerStepSubmitFn } =
		useMultiStepForm<CategoriesStepSchema>()

	const { control, watch, setValue, getValues, handleSubmit, trigger } =
		useForm<CategoriesStepSchema>({
			defaultValues: ticketStepDefaultValues,
			mode: 'onChange',
			resolver: zodResolver(categoriesStepSchema),
		})

	const categories = mockCategories

	function handleDecreaseTicketQuantity(
		field: Path<CategoriesStepSchema>,
		quantity: number,
	) {
		const currentQuantity = Number(getValues(field) ?? quantity ?? 0)

		if (currentQuantity === 0) return

		setValue(field, Math.max(0, currentQuantity - 1))
	}

	function handleIncreaseTicketQuantity(
		field: Path<CategoriesStepSchema>,
		quantity: number,
		stock: number,
	) {
		const currentQuantity = Number(getValues(field) ?? quantity ?? 0)

		setValue(field, Math.min(stock, currentQuantity + 1))
	}

	useEffect(() => {
		registerStepSubmitFn('tickets', async () => {
			const isValid = await trigger()

			if (!isValid) return

			const payload = {
				categories: getValues('categories'),
			}

			next(payload)
		})
	}, [getValues, next, registerStepSubmitFn, trigger])

	async function handleAdvance(_: CategoriesStepSchema) {
		const payload = { categories: getValues('categories') }

		next(payload)
	}

	return (
		<form
			onSubmit={handleSubmit(handleAdvance)}
			className="flex flex-col gap-6 h-fit"
		>
			<div className="flex flex-col gap-3">
				<h2 className="text-zinc-100 font-semibold text-2xl xl:text-xl">
					Suas categorias
				</h2>

				<span className="text-base xl:text-sm text-zinc-400">
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
						<Accordion.Trigger className="px-6 text-zinc-300 font-semibold text-lg xl:text-xl cursor-pointer">
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
										className="flex items-center justify-between gap-1 xl:gap-4"
									>
										<div className="flex flex-col w-24 xl:w-36">
											<span className="text-base xl:text-lg text-zinc-300 line-clamp-2 leading-tight">
												{item.title}
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
											<strong className="text-zinc-200 font-bold text-sm xl:text-base">
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
				type="submit"
				// onClick={handleAdvance}
				className="block xl:hidden bg-cyan-600 rounded-md font-bold h-12 px-3 cursor-pointer text-sm hover:bg-cyan-700 transition-colors"
			>
				Continuar
			</button>
		</form>
	)
}
