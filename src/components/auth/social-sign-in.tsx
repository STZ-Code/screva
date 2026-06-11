'use client'
import { GoogleLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'

const buttonVariant = {
	hover: { scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' },
	tap: { scale: 0.98 },
}

export function SocialSignIn() {
	return (
		<div className="w-full gap-2 flex 2xl:mt-6 mt-4">
			<motion.button
				type="button"
				variants={buttonVariant}
				whileHover="hover"
				whileTap="tap"
				className="flex-1 rounded-xl border border-white/8 bg-zinc-900/40 backdrop-blur-md text-zinc-300 flex items-center justify-center py-3 gap-3 hover:border-zinc-500"
			>
				<GoogleLogoIcon size={24} />
				Google
			</motion.button>
			<motion.button
				type="button"
				variants={buttonVariant}
				whileHover="hover"
				whileTap="tap"
				className="flex-1 rounded-xl border border-white/8 bg-zinc-900/40 backdrop-blur-md text-zinc-300 flex items-center justify-center py-3 gap-3 hover:border-zinc-500"
			>
				<InstagramLogoIcon size={24} />
				Instagram
			</motion.button>
		</div>
	)
}
