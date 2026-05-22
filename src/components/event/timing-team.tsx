'use client'
import {
	InstagramLogoIcon,
	PhoneIcon,
	WhatsappLogoIcon,
} from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import organizerImg from '@/assets/examples/organizer.png'
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

export function TimingTeam() {
	return (
		<Box className="gap-4 rounded-none lg:rounded-2xl">
			<BoxHeading>Cronometragem</BoxHeading>

			<div className="flex gap-2 items-center">
				<div className="w-16 h-16 relative">
					<Image
						src={organizerImg}
						alt="Logomarca da equipe de cronometragem"
						fill
					/>
				</div>
				<span className="font-bold text-xl text-zinc-100">Cronosvale</span>
			</div>

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

			<Button variant="outline">Falar com a Cronometragem</Button>
		</Box>
	)
}
