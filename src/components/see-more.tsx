'use client'

import { CaretRightIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'

export function SeeMore() {
	return (
		<div className="w-full flex items-center justify-center gap-4 mt-5">
			<motion.span
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				className="flex-1 h-[2px] bg-zinc-800 origin-right"
			/>

			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="whitespace-nowrap items-center justify-center gap-1 text-2xl font-bebas text-zinc-400 inline-flex group"
			>
				<span className="group-hover:text-zinc-100 transition-colors h-7">
					Ver mais
				</span>
				<CaretRightIcon
					size={20}
					className="text-zinc-400 group-hover:translate-x-1 transition-transform"
				/>
			</motion.button>

			<motion.span
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				className="flex-1 h-[2px] bg-zinc-800 origin-left"
			/>
		</div>
	)
}
