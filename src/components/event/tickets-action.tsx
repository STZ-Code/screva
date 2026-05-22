'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Box } from '../box'
import { BoxHeading } from '../box-heading'
import { Button } from '../button'

export function TicketsAction() {
	return (
		<Box className="gap-5 rounded-none lg:rounded-2xl">
			<div className="flex flex-col gap-3">
				<BoxHeading>Ingressos</BoxHeading>
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

			<Link href={'/eventos/evento-1/ingressos'}>
				<Button variant="primary">Fazer Inscrição</Button>
			</Link>
		</Box>
	)
}
