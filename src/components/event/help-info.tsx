'use client'
import {
	InstagramLogoIcon,
	PhoneIcon,
	WhatsappLogoIcon,
} from '@phosphor-icons/react'
import { Box } from '../box'
import { Button } from '../button'

export function HelpInfo() {
	return (
		<Box className="gap-5">
			<h3 className="text-2xl font-bold text-zinc-100">Ajuda</h3>

			<span>Nossa equipe está aqui para ajudar com qualquer dúvida</span>

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

			<Button variant="outline" className="flex gap-2 items-center">
				<WhatsappLogoIcon size={24} />
				Falar no whatsapp
			</Button>
		</Box>
	)
}
