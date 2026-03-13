'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ActionDivider } from './action-divider'
import { SignUpForm } from './sign-up-form'
import { SocialSignIn } from './social-sign-in'

export function SignUpContainer() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className="w-2/5 flex justify-center"
		>
			<div className="flex flex-col w-96 gap-4">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="flex flex-col gap-2"
				>
					<div className="flex flex-col gap-2">
						<h1 className="text-zinc-200 text-4xl font-bebas tracking-tight">
							Acessar sua conta
						</h1>
						<span className="text-sm text-zinc-300">
							Preencha seus dados para criar sua conta.
						</span>
					</div>

					<div className="flex gap-1">
						<span className="text-sm text-zinc-400">Já possui conta?</span>
						<Link
							href="/sign-in"
							className="text-sm text-cyan-500 font-medium hover:brightness-110 transition-all"
						>
							Faça login
						</Link>
					</div>
				</motion.div>

				<SignUpForm />

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="w-full"
				>
					<ActionDivider>Ou cadastre-se com</ActionDivider>

					<SocialSignIn />
				</motion.div>
			</div>
		</motion.div>
	)
}
