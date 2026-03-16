'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EnvelopeIcon, LockIcon } from '@phosphor-icons/react'
import { Checkbox, Field, Input } from '@stz-code/ui/form'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { authClient } from '@/lib/auth-client'
import { Button } from '../button'

const signInSchema = z.object({
	email: z.email('Digite um e-mail válido'),
	rememberMe: z.array(z.string()),
	password: z.string().min(7, 'No mínimo 7 caractéres'),
})

type SingInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
	const router = useRouter()

	const { handleSubmit, control } = useForm<SingInSchema>({
		resolver: zodResolver(signInSchema),
	})

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
			<Field.Root control={control} name="email">
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
			</Field.Root>
			<Field.Root control={control} name="password">
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
			</Field.Root>

			<div className="w-full flex justify-between items-center gap-2">
				<Field.Root name="rememberMe" control={control}>
					<Checkbox.Group>
						<Checkbox.Item
							name="remember"
							className="border-zinc-600 text-zinc-300"
						>
							Lembrar de mim
						</Checkbox.Item>
					</Checkbox.Group>

					<Field.Error />
				</Field.Root>

				<Link
					href="/esqueci-a-senha"
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
