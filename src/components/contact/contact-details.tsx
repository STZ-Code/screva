'use client'
import {
	EnvelopeSimpleIcon,
	MapPinIcon,
	PhoneIcon,
} from '@phosphor-icons/react'
import { motion } from 'motion/react'

const itemVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: { opacity: 1, x: 0 },
}

export function ContactDetails() {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ staggerChildren: 0.1 }}
			className="flex flex-col gap-6"
		>
			{[
				{ Icon: PhoneIcon, text: '(87) 9 2222-2222' },
				{ Icon: EnvelopeSimpleIcon, text: 'screva@gmail.com' },
				{ Icon: MapPinIcon, text: 'Rua X, Nº 54, Bairro Z' },
			].map((item, i) => (
				<motion.div
					key={i}
					variants={itemVariants}
					className="flex gap-4 group"
				>
					<item.Icon
						size={24}
						className="text-cyan-600 group-hover:scale-120 transition-transform"
					/>
					<span className="text-zinc-300">{item.text}</span>
				</motion.div>
			))}
		</motion.div>
	)
}
