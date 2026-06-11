'use client'
import {
	InstagramLogoIcon,
	PhoneIcon,
	WhatsappLogoIcon,
} from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { Box } from '../box'
import { BoxHeading } from '../box-heading'
import { Button } from '../button'

const listVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: { delay: i * 0.1 + 0.2 },
	}),
}

export function HelpInfo() {
	return (
		<Box className="gap-4 rounded-none xl:rounded-2xl">
			<BoxHeading>Ajuda</BoxHeading>

			<span className="text-sm text-zinc-300">
				Nossa equipe está aqui para ajudar com qualquer dúvida
			</span>

			{[
				{ Icon: PhoneIcon, text: '(87) 9 2222-2222' },
				{ Icon: WhatsappLogoIcon, text: '(87) 9 2222-2222' },
				{ Icon: InstagramLogoIcon, text: 'Rua X, Nº 54, Bairro Z' },
			].map((item, i) => (
				<motion.div
					key={i}
					custom={i}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={listVariants}
					className="flex gap-3 items-center group cursor-pointer"
				>
					<item.Icon
						size={24}
						className="text-cyan-600 group-hover:scale-120 transition-transform"
					/>
					<span className="text-zinc-300">{item.text}</span>
				</motion.div>
			))}

			<Button variant="outline" className="flex gap-2 items-center">
				<WhatsappLogoIcon size={24} />
				Falar no whatsapp
			</Button>
		</Box>
	)
}
