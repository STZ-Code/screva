'use client'

import { cn } from '@/utils/utils'
import { InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'

type SocialMediaLinksProps = {
	className?: string
}

export function SocialMediaLinks({ className }: SocialMediaLinksProps) {
	return (
		<div className="flex gap-4">
			{[
				{
					Icon: InstagramLogoIcon,
					href: 'https://www.instagram.com/screva',
				},
				{
					Icon: LinkedinLogoIcon,
					href: 'https://www.linkedin.com/company/screva/',
					weight: 'fill' as const,
				},
			].map((social, index) => (
				<motion.a
					key={index}
					href={social.href}
					target="_blank"
					rel="noopener"
					whileHover={{ y: -3, color: '#22d3ee' }}
					className={cn('text-zinc-400 transition-colors', className)}
				>
					<social.Icon size={24} weight={social.weight} />
				</motion.a>
			))}
		</div>
	)
}
