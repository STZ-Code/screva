'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import contactImg from '@/assets/images/contact-img.png'

export function ContactHero() {
	return (
		<div className="w-3/5 relative overflow-hidden hidden xl:block">
			<motion.div
				initial={{ scale: 1.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.2, ease: 'easeOut' }}
				className="h-full w-full"
			>
				<Image src={contactImg} alt="Atleta" fill className="object-cover" />
			</motion.div>
		</div>
	)
}
