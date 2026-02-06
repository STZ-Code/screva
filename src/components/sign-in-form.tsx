'use client'

import { EnvelopeIcon, LockIcon } from '@phosphor-icons/react'
import { FormField } from '@stz-code/ui'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { authClient } from '@/lib/auth-client'
import { Button } from './button'

const signInSchema = z.object({
	email: z.email('Digite um e-mail válido'),
	rememberMe: z.boolean().optional().default(false),
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
		<motion.form
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
			onSubmit={handleSubmit(handleSignIn)}
			className="flex flex-col w-full gap-4"
		>
			<FormField
				control={control}
				className="w-full bg-zinc-900"
				config={{
					name: 'email',
					type: 'email',
					placeholder: 'E-mail',
					Icon: EnvelopeIcon,
					inputStyles: 'placeholder:text-zinc-500 text-zinc-300',
					wrapperStyles:
						'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-lg',
					iconStyles: 'group-focus-within:text-cyan-500 text-zinc-600',
				}}
			/>

			<FormField
				control={control}
				className="w-full bg-zinc-900"
				config={{
					name: 'password',
					type: 'password',
					inputStyles: 'placeholder:text-zinc-500 text-zinc-300',
					wrapperStyles:
						'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-lg',
					placeholder: 'Senha',
					Icon: LockIcon,
					iconStyles: 'group-focus-within:text-cyan-500 text-zinc-600',
				}}
			/>

			<div className="w-full flex justify-between items-center gap-2">
				<FormField
					control={control}
					config={{
						name: 'rememberMe',
						type: 'checkbox-group',
						options: [{ label: 'Lembrar de mim', name: 'rememberMe' }],
						variant: 'minimal',
					}}
				/>

				<Link
					href="/forgot-password"
					className="text-sm font-semibold text-zinc-500 hover:text-cyan-500 transition-colors"
				>
					Esqueceu sua senha?
				</Link>
			</div>

			<Button type="submit" className="mt-2">
				Entrar
			</Button>
		</motion.form>
	)
}
