import { toast } from '@stz-code/ui'
import { useState, useTransition } from 'react'

interface FormState {
	success: boolean
	message: string | null
	errors: Record<string, string[]> | null
}

export function useFormState(
	action: (data: FormData) => Promise<FormState>,
	initalState?: FormState,
) {
	const [isPending, startTransition] = useTransition()

	const [formState, setFormData] = useState(
		initalState ?? {
			success: false,
			message: null,
			errors: null,
		},
	)

	function handleSubmit<T extends Record<string, unknown>>(data: T) {
		const formData = new FormData()

		for (const [key, value] of Object.entries(data)) {
			if (Array.isArray(value)) {
				value.forEach((item) => {
					formData.append(key, String(item))
				})
			} else if (value !== null && value !== undefined) {
				formData.append(key, String(value))
			}
		}

		startTransition(async () => {
			try {
				const state = await action(formData)

				setFormData(state)

				if (state.success) {
					toast.success('Mensagem enviada com sucesso!', {
						position: 'bottom-center',
					})
				}
			} catch (err) {
				console.error('Form submission error:', err)
			}
		})
	}

	return [formState, handleSubmit, isPending] as const
}
