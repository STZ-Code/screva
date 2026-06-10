'use client'

import { CaretRightIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { ActionDivider } from './action-divider'

export function SeeMore() {
	return (
		<ActionDivider>
			<Link href={'/eventos'}>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="whitespace-nowrap cursor-pointer items-center justify-center gap-1 text-2xl font-bebas text-zinc-400 inline-flex group"
				>
					<span className="group-hover:text-zinc-100 transition-colors h-7">
						Ver mais
					</span>
					<CaretRightIcon
						size={20}
						className="text-zinc-400 group-hover:translate-x-1 transition-transform"
					/>
				</motion.button>
			</Link>
		</ActionDivider>
	)
}
