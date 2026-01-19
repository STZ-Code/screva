'use client'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { EventCard } from './event-card'

type EventListProps = {
	title: string
	headerActions?: ReactNode
	footerActions: ReactNode
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export function EventList({
	footerActions,
	headerActions,
	title,
}: EventListProps) {
	return (
		<div className="px-28 py-10 flex flex-col gap-5">
			<motion.h3
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className="text-zinc-50 font-bebas text-4xl"
			>
				{title}
			</motion.h3>

			{headerActions}

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
				className="flex flex-wrap gap-6"
			>
				{[...Array(10)].map((_, i) => (
					<motion.div
						key={i}
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<EventCard />
					</motion.div>
				))}
			</motion.div>

			{footerActions}
		</div>
	)
}
