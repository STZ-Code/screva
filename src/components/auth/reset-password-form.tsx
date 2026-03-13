'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { LockIcon } from '@phosphor-icons/react'
import { Field, Input } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { ActionDivider } from '../action-divider'
import { Button } from '../button'
import { PasswordRequirements } from './password-requirements'

const resetPasswordSchema = z
	.object({
		password: z.string().min(7, 'No mínimo 7 caracteres'),
		password_confirmation: z.string().min(7, 'No mínimo 7 caracteres'),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: 'As senhas não coincidem',
		path: ['password_confirmation'],
	})

type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>

export function ResetPasswordForm() {
	const { control, handleSubmit, watch } = useForm<ResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
	})

	const password = watch('password')

	async function handleResetPasswordEmail({ password }: ResetPasswordSchema) {}

	return (
		<form
			onSubmit={handleSubmit(handleResetPasswordEmail)}
			className="flex flex-col gap-10"
		>
			<div className="flex flex-col gap-3">
				<h1 className="text-5xl font-bebas text-center">Esqueceu sua senha?</h1>

				<span className="text-zinc-400">
					Digite seu e-mail para receber as instruções de redefinição de senha.
				</span>
			</div>
			<div className="flex flex-col gap-6">
				<Field.Root control={control} name="password">
					<Field.Label>Sua nova senha</Field.Label>
					<Input.Root className="py-3 border-zinc-600 focus-within:ring-2 focus-within:ring-cyan-500">
						<Field.Icon
							icon={LockIcon}
							className="text-zinc-600 group-focus-within:text-cyan-500"
						/>
						<Input.Control
							placeholder="Digite sua nova senha"
							type="password"
							className="placeholder:text-zinc-600 text-zinc-400"
						/>
					</Input.Root>
				</Field.Root>

				<Field.Root control={control} name="password_confirmation">
					<Field.Label>Confirmação de senha</Field.Label>
					<Input.Root className="py-3 border-zinc-600 focus-within:ring-2 focus-within:ring-cyan-500">
						<Field.Icon
							icon={LockIcon}
							className="text-zinc-600 group-focus-within:text-cyan-500"
						/>
						<Input.Control
							placeholder="Confirme sua nova senha"
							type="password"
							className="placeholder:text-zinc-600 text-zinc-400"
						/>
					</Input.Root>
				</Field.Root>

				<PasswordRequirements password={password} />

				<ActionDivider />

				<Button type="submit" className="py-3">
					Redefinir senha
				</Button>
			</div>
		</form>
	)
}
