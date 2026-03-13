'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EnvelopeIcon } from '@phosphor-icons/react'
import { Field, Input } from '@stz-code/ui'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { ActionDivider } from './action-divider'
import { Button } from './button'

const forgotPasswordSchema = z.object({
	email: z.email('Digite um e-mail válido'),
})

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>

export function RequestForgotPasswordForm() {
	const { control, handleSubmit } = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(forgotPasswordSchema),
	})

	async function handleRequestForgotPasswordEmail({
		email,
	}: ForgotPasswordSchema) {}

	return (
		<form
			onSubmit={handleSubmit(handleRequestForgotPasswordEmail)}
			className="flex flex-col gap-10"
		>
			<div className="flex flex-col gap-3">
				<h1 className="text-5xl font-bebas text-center">Esqueceu sua senha?</h1>

				<span className="text-zinc-400">
					Digite seu e-mail para receber as instruções de redefinição de senha.
				</span>
			</div>
			<div className="flex flex-col gap-6">
				<Field.Root control={control} name="email">
					<Field.Label>E-mail</Field.Label>
					<Input.Root className="py-3 border-zinc-600 focus-within:ring-2 focus-within:ring-cyan-500">
						<Field.Icon
							icon={EnvelopeIcon}
							className="text-zinc-600 group-focus-within:text-cyan-500"
						/>
						<Input.Control
							placeholder="E-mail"
							className="placeholder:text-zinc-600 text-zinc-400"
						/>
					</Input.Root>
				</Field.Root>

				<ActionDivider />

				<Button type="submit" className="py-3">
					Recuperar senha
				</Button>
			</div>

			<div className="text-zinc-400 flex gap-1 items-center justify-center">
				<span>Já tem uma conta?</span>
				<Link href="/sign-in" className="underline font-semibold">
					Iniciar sessão
				</Link>
			</div>
		</form>
	)
}
