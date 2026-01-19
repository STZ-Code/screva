'use client'
import { CalendarDotsIcon, CaretRightIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import exampleImg from '@/assets/examples/picos.jpg'
import { EventStatus } from './event-status'

export function EventCard() {
	return (
		<motion.div
			whileTap={{ scale: 0.95 }}
			whileHover={{
				y: -10,
				borderColor: '#22d3ee',
				boxShadow:
					'0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
			}}
			transition={{ type: 'spring', stiffness: 400, damping: 17 }}
			className="p-5 border border-zinc-700 rounded-2xl w-[300px] bg-zinc-900/40 backdrop-blur-sm group"
		>
			<Link href={'/'} className="block">
				<div className="relative overflow-hidden">
					<Image
						src={exampleImg}
						alt="Event Image"
						className="w-64 z-40 object-cover transition-transform duration-500 group-hover:scale-110 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
					/>

					<EventStatus />
				</div>

				<div className="mt-3 w-full">
					<div className="pb-5 border-b border-b-zinc-700 flex items-center justify-between">
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-2">
								<div className="flex items-center">
									<CalendarDotsIcon size={24} className="text-zinc-100 mr-1" />
									<time className="text-zinc-200 text-xs">10 de Dezembro</time>
								</div>
								<span className="h-3 w-[2px] bg-cyan-500" />
								<span className="text-zinc-200 text-xs">06:00h</span>
							</div>

							<strong className="font-bold text-2xl text-zinc-300 group-hover:text-cyan-400 transition-colors">
								Petrolina/PE
							</strong>
						</div>

						<CaretRightIcon
							size={32}
							className="text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
						/>
					</div>

					<div className="py-3 h-20 w-full">
						<p className="text-zinc-100 text-xl font-semibold line-clamp-2 leading-tight">
							1º Corrida Família Ana - Corrida de Teste Para o site Screva
						</p>
					</div>
				</div>
			</Link>
		</motion.div>
	)
}
