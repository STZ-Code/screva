'use client'
import { CaretRightIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { EventCard } from './event-card'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export function EventList() {
	return (
		<div className="px-28 py-10 flex flex-col gap-5">
			<motion.h3
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className="text-zinc-50 font-bebas text-4xl"
			>
				Próximos Eventos
			</motion.h3>

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
		</div>
	)
}
