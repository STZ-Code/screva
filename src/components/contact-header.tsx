'use client'
import { motion } from 'motion/react'

export function ContactHeader() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className="flex flex-col gap-4"
		>
			<h1 className="font-bebas text-6xl">Entre em contato conosco</h1>
			<p className="font-light text-zinc-300 text-justify">
				Nossa equipe está aqui para ajudar você a superar qualquer obstáculo...
			</p>
		</motion.div>
	)
}
