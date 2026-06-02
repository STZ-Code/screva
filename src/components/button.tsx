'use client'
import { type HTMLMotionProps, motion } from 'motion/react'
import { cn } from '@/utils/utils'

type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends HTMLMotionProps<'button'> {
	variant?: ButtonVariant
}

export function Button({
	className,
	children,
	variant = 'primary',
	...props
}: ButtonProps) {
	const baseStyles =
		'rounded-lg py-4 w-full font-bold uppercase tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer'

	const variants = {
		primary:
			'text-zinc-100 bg-cyan-600 shadow-lg shadow-cyan-900/20 hover:bg-cyan-500 border-2 border-transparent',
		outline:
			'text-cyan-500 border-2 border-cyan-600 bg-transparent hover:bg-cyan-600/10 shadow-none',
	}

	return (
		<motion.button
			variants={{
				hidden: { opacity: 0, y: 10 },
				visible: { opacity: 1, y: 0 },
			}}
			whileHover={{ scale: 1.01 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: 'spring', stiffness: 400, damping: 17 }}
			className={cn(baseStyles, variants[variant], className)}
			{...props}
		>
			{children}
		</motion.button>
	)
}
