'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EnvelopeIcon, LockIcon, UserIcon } from '@phosphor-icons/react'
import { Field, Input } from '@stz-code/ui'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { authClient } from '@/lib/auth-client'
import { Button } from '../button'

const signUpSchema = z
	.object({
		name: z.string().min(3, 'Insira seu nome'),
		email: z.email('Digite um e-mail válido'),
		password: z.string().min(7, 'No mínimo 7 caracteres'),
		password_confirmation: z.string().min(7, 'No mínimo 7 caracteres'),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: 'As senhas não coincidem',
		path: ['password_confirmation'],
	})

type SingUpSchema = z.infer<typeof signUpSchema>

export function SignUpForm() {
	const router = useRouter()

	const { handleSubmit, control } = useForm<SingUpSchema>({
		resolver: zodResolver(signUpSchema),
	})

	async function handlesignUp({ email, password, name }: SingUpSchema) {
		const payload = {
			email,
			password,
			name,
			organizationId: 'b44666f4-0b49-4a59-a1ea-41c8ff8ac3df',
		}

		await authClient.signUp.email(payload, {
			onError(context) {
				if (context.error.message) {
					alert(context.error.message)
				}
			},
			onSuccess() {
				router.push('/dashboard')
			},
		})
	}

	return (
		<form
			onSubmit={handleSubmit(handlesignUp)}
			className="flex flex-col w-full 2xl:gap-4 gap-2"
		>
			<Field.Root control={control} name="name">
				<Field.Label>Nome</Field.Label>
				<Input.Root className="border-zinc-600 py-3 focus-within:ring-2 focus-within:ring-cyan-500">
					<Field.Icon
						icon={UserIcon}
						className="text-zinc-600 group-focus-within:text-cyan-500"
					/>
					<Input.Control
						placeholder="Nome"
						className="placeholder:text-zinc-600 text-zinc-400"
					/>
				</Input.Root>

				<Field.Error />
			</Field.Root>

			<Field.Root control={control} name="email">
				<Field.Label>E-mail</Field.Label>
				<Input.Root className="border-zinc-600 py-3 focus-within:ring-2 focus-within:ring-cyan-500">
					<Field.Icon
						icon={EnvelopeIcon}
						className="text-zinc-600 group-focus-within:text-cyan-500"
					/>
					<Input.Control
						placeholder="E-mail"
						className="placeholder:text-zinc-600 text-zinc-400"
					/>
				</Input.Root>

				<Field.Error />
			</Field.Root>

			<div className="flex 2xl:flex-col gap-4 flex-row">
				<Field.Root control={control} name="password">
					<Field.Label>Senha</Field.Label>

					<Input.Root className="border-zinc-600 py-3 focus-within:ring-2 focus-within:ring-cyan-500">
						<Field.Icon
							icon={LockIcon}
							className="text-zinc-600 group-focus-within:text-cyan-500"
						/>
						<Input.Control
							placeholder="Senha"
							type="password"
							className="placeholder:text-zinc-600 text-zinc-400"
						/>
					</Input.Root>

					<Field.Error />
				</Field.Root>

				<Field.Root control={control} name="password_confirmation">
					<Field.Label>Confirme sua senha</Field.Label>

					<Input.Root className="border-zinc-600 py-3 focus-within:ring-2 focus-within:ring-cyan-500">
						<Field.Icon
							icon={LockIcon}
							className="text-zinc-600 group-focus-within:text-cyan-500"
						/>
						<Input.Control
							placeholder="Confirme sua senha"
							type="password"
							className="placeholder:text-zinc-600 text-zinc-400"
						/>
					</Input.Root>

					<Field.Error />
				</Field.Root>
			</div>

			<Button type="submit" className="mt-2 py-3">
				Cadastrar
			</Button>
		</form>
	)
}
