import z from 'zod'

export const ticketItemSchema = z.object({
	id: z.string(),
	title: z.string(),
	price: z.number(),
	fee: z.number(),
	quantity: z.number().min(0).default(0),
})

export const ticketCategorySchema = z.object({
	id: z.string(),
	title: z.string(),
	items: z.array(ticketItemSchema),
})

export const ticketItemFormSchema = z.object({
	id: z.string(),
	title: z.string(),
	quantity: z.coerce.number().min(0).default(0),
})

export const ticketCategoryFormSchema = z.object({
	id: z.string(),
	title: z.string(),
	items: z.array(ticketItemFormSchema),
})

/**
 * Categories Step
 */
export const categoriesStepSchema = z.object({
	categories: z.array(ticketCategoryFormSchema),
})

export type CategoriesStepSchema = z.infer<typeof categoriesStepSchema>

export const categoriesStepValidationSchema = categoriesStepSchema.superRefine(
	(data, ctx) => {
		const hasSelectedTicket = data.categories.some((category) =>
			category.items.some((item) => item.quantity > 0),
		)

		if (hasSelectedTicket) return

		ctx.addIssue({
			code: 'custom',
			message: 'Selecione ao menos um ingresso',
			path: ['categories'],
		})
	},
)

/**
 * Athletes Step
 */
export const athleteSchema = z.object({
	useOwnData: z.boolean().default(false).optional(),
	name: z.string().min(1, 'Nome é obrigatório'),
	email: z.email('E-mail inválido'),
	cpf: z.string().min(1, 'CPF é obrigatório'),
	birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
	kitId: z.string().min(1, 'Selecione o kit do atleta'),
})

export const athletesStepSchema = z.object({
	athletes: z.array(athleteSchema),
})

export type AthletesStepSchema = z.infer<typeof athletesStepSchema>

/**
 * Payment Step
 */
export const paymentStepSchema = z.object({})

export type PaymentStepSchema = z.infer<typeof paymentStepSchema>

/**
 * Checkout Form
 */
export const checkoutFormSchema = categoriesStepSchema
	.merge(athletesStepSchema)
	.merge(paymentStepSchema)

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>
