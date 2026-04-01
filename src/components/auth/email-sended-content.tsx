'use client'

import Link from 'next/link'
import { CheckCircle } from 'phosphor-react'
import { ActionDivider } from '../action-divider'

export function EmailSendedContent() {
	return (
		<div className="flex-1 items-center justify-center flex">
			<div className="flex flex-col items-center justify-center gap-6">
				<h1 className="text-5xl font-bebas text-center">E-mail enviado!</h1>

				<div className="flex flex-col gap-2 justify-center items-center">
					<CheckCircle size={64} className="text-emerald-600" />

					<span className="text-zinc-400">
						Enviamos um e-mail com instruções para redefinir sua senha.
					</span>
				</div>

				<ActionDivider />

				<Link
					href="/sign-in"
					className="w-full py-3 bg-cyan-600 rounded-lg flex justify-center font-semibold text-zinc-100"
				>
					Voltar ao login
				</Link>
			</div>
		</div>
	)
}
