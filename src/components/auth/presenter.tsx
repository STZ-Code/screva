'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import signInHero from '@/assets/images/sign-in-hero.png'
import signUpHero from '@/assets/images/sign-up-hero.png'
import { cn } from '@/utils/utils'

type PresenterProps = {
	type: 'sign-in' | 'sign-up'
}

export function Presenter({ type }: PresenterProps) {
	return (
		<div className="flex-1 w-full h-full relative overflow-hidden hidden xl:block rounded-r-[40px]">
			<motion.div
				initial={{ scale: 1.15, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.5, ease: 'easeOut' }}
				className="w-full h-full relative"
			>
				<Image
					src={type === 'sign-in' ? signInHero : signUpHero}
					alt="Atleta em ação"
					fill
					priority
					className={cn('transition-all duration-1000 ease-in-out')}
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.4 }}
				transition={{ delay: 1, duration: 2 }}
				className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-600 rounded-full blur-[120px] z-20 pointer-events-none"
			/>
		</div>
	)
}
