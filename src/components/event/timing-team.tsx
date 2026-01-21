'use client'
import {
	InstagramLogoIcon,
	PhoneIcon,
	WhatsappLogoIcon,
} from '@phosphor-icons/react'
import Image from 'next/image'
import organizerImg from '@/assets/examples/organizer.png'
import { Box } from '../box'
import { Button } from '../button'

export function TimingTeam() {
	return (
		<Box className="gap-4">
			<h3 className="text-2xl font-bold text-zinc-100">Cronometragem</h3>

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
				<div key={i} className="flex gap-2 group">
					<item.Icon
						size={24}
						className="text-cyan-600 group-hover:scale-120 transition-transform"
					/>
					<span className="text-zinc-300">{item.text}</span>
				</div>
			))}

			<Button variant="outline">Falar com a Cronometragem</Button>
		</Box>
	)
}
