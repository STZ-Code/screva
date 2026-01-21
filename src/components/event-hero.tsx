'use client'
import { CalendarDotsIcon, MapPinIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import eventImgExample from '@/assets/examples/jaboatao.png'
import eventHeroImg from '@/assets/images/event-hero.png'

export function EventHero() {
	return (
		<section className="relative w-full overflow-hidden min-h-[500px] flex items-center">
			<motion.div
				initial={{ scale: 1.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.5, ease: 'easeOut' }}
				className="absolute inset-0 z-0"
			>
				<Image
					src={eventHeroImg}
					alt="Background Evento"
					fill
					priority
					className="object-cover z-0"
				/>
			</motion.div>

			<div className="z-10 px-28 flex items-center justify-between flex-1">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="flex flex-col gap-4"
				>
					<h1 className="text-zinc-100 font-semibold text-2xl">
						CIRCUITO SESC - ETAPA JABOATÃO DOS GUARARAPES
					</h1>

					<div className="flex items-center gap-2">
						<div className="flex items-center">
							<CalendarDotsIcon size={24} className="text-zinc-100 mr-1" />
							<time className="text-zinc-200 text-sm">10 de Dezembro</time>
						</div>
						<span className="h-3 w-[2px] bg-cyan-500" />
						<span className="text-zinc-200 text-sm">06:00h</span>
					</div>

					<div className="flex gap-1 group">
						<MapPinIcon
							size={24}
							className="text-zinc-200 group-hover:scale-120 transition-transform"
						/>
						<span className="text-zinc-200">Praça da Igreja</span>
					</div>

					<strong className="font-bold text-3xl">
						Jaboatão dos Guararapes/PE
					</strong>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ type: 'spring', stiffness: 100, delay: 0.8 }}
					className="w-64 h-64 rounded-lg relative"
				>
					<Image src={eventImgExample} alt="Corrida de Jaboatão" fill />
				</motion.div>
			</div>
		</section>
	)
}
