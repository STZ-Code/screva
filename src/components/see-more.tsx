'use client'

import { CaretRightIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { ActionDivider } from './action-divider'

export function SeeMore() {
	return (
		<ActionDivider>
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
		</ActionDivider>
	)
}
