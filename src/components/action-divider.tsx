'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type ActionDividerProps = {
	children: ReactNode
}

export function ActionDivider({ children }: ActionDividerProps) {
	return (
		<div className="w-full flex items-center justify-center gap-4 mt-5">
			<motion.span
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				className="flex-1 h-[2px] bg-zinc-800 origin-right"
			/>

			{children}

			<motion.span
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				className="flex-1 h-[2px] bg-zinc-800 origin-left"
			/>
		</div>
	)
}
