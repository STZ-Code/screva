'use client'
import { motion } from 'motion/react'
import { Box } from '../box'
import { Button } from '../button'

export function TicketsAction() {
	return (
		<Box className="gap-5">
			<div className="flex flex-col gap-3">
				<h3 className="text-2xl font-bebas uppercase tracking-wide text-zinc-100">
					Ingressos
				</h3>
				<span className="font-bold text-sm text-zinc-400">
					Garanta sua vaga agora!
				</span>
			</div>

			<motion.div
				initial={{ opacity: 0, x: -10 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3 }}
			>
				<p className="font-bold text-xs text-zinc-500 uppercase tracking-widest">
					A partir de
				</p>
				<strong className="text-zinc-100 text-2xl font-bold tracking-tight">
					R$ 40,00 - R$120,00
				</strong>
			</motion.div>

			<Button variant="primary">Fazer Inscrição</Button>
		</Box>
	)
}
