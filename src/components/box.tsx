'use client'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/utils/utils'

type BoxProps = {
	children: ReactNode
	className?: string
	animate?: boolean
}

export function Box({ children, className, animate = true }: BoxProps) {
	return (
		<motion.div
			initial={animate ? { opacity: 0, y: 20 } : undefined}
			whileInView={animate ? { opacity: 1, y: 0 } : undefined}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className={cn(
				'p-8 border border-white/5 bg-zinc-900/50 backdrop-blur-sm rounded-2xl flex flex-col shadow-2xl shadow-black/20',
				className,
			)}
		>
			{children}
		</motion.div>
	)
}
