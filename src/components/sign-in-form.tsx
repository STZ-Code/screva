'use client'

import { EnvelopeIcon, LockIcon } from '@phosphor-icons/react'
import { FormField } from '@stz-code/ui'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { authClient } from '@/lib/auth-client'

const signInSchema = z.object({
	email: z.email('Digite um e-mail válido'),
	password: z.string().min(7, 'No mínimo 7 caractéres'),
})

type SingInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
	const router = useRouter()
	const { handleSubmit, control } = useForm<SingInSchema>()

	async function handleSignIn({ email, password }: SingInSchema) {
		await authClient.signIn.email(
			{
				email,
				password,
			},
			{
				onError(context) {
					if (context.error.message) {
						alert(context.error.message)
					}
				},
				onSuccess() {
					router.push('/dashboard')
				},
			},
		)
	}

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			className="flex flex-col w-full gap-4"
		>
			<FormField
				control={control}
				className="w-full bg-zinc-900"
				config={{
					name: 'email',
					type: 'email',
					wrapperStyles:
						'focus-within:ring-2 focus-within:ring-sky-500 border-2 border-zinc-500 focus-within:border-sky-500',
					inputStyles: 'text-zinc-100',
					placeholder: 'E-mail',
					Icon: EnvelopeIcon,
					iconStyles: 'group-focus-within:text-sky-500',
				}}
			/>

			<div className="w-full flex flex-col items-end gap-2">
				<FormField
					control={control}
					className="w-full bg-zinc-900"
					config={{
						name: 'password',
						type: 'password',
						wrapperStyles:
							'focus-within:ring-2 focus-within:ring-sky-500 border-2 border-zinc-500 focus-within:border-sky-500',
						inputStyles: 'text-zinc-100',
						placeholder: 'Senha',
						Icon: LockIcon,
						iconStyles: 'group-focus-within:text-sky-500',
					}}
				/>

				<Link
					href="/forgot-password"
					className="text-sm font-semibold text-sky-600"
				>
					Esqueceu sua senha?
				</Link>
			</div>

			<button
				type="submit"
				className="bg-sky-500 w-full rounded-md py-2 font-bold text-md"
			>
				Entrar
			</button>
		</form>
	)
}
