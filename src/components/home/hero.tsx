'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImg1 from '@/assets/images/screva-bg-1.png'
import HeroImg2 from '@/assets/images/screva-bg-2-v2.png'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { RunnerButton } from './runner-button'

export function Hero() {
	const isDesktop = useBreakpoint('lg')

	return (
		<section className="flex w-full relative h-[720px] 2xl:h-fit">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 2xl:gap-6 z-20">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="flex items-center justify-center flex-col"
				>
					<h1 className="text-center cursor-default text-4xl 2xl:text-7xl font-bold text-zinc-200/90 leading-tight">
						Seu Tempo, {!isDesktop && <br />} Sua Meta
					</h1>
					<h1 className="text-center text-4xl 2xl:text-7xl cursor-default font-bold text-zinc-200/90 leading-tight">
						Nossa <span className="italic text-cyan-400">Precisão</span>
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="flex flex-col 2xl:flex-row gap-4 items-center justify-center"
				>
					<Link href={'/eventos'}>
						<RunnerButton>Eventos</RunnerButton>
					</Link>
					<Link href={'/resultados'}>
						<RunnerButton variant="result">Resultados</RunnerButton>
					</Link>
				</motion.div>
			</div>
			<div className="flex w-full h-full z-10">
				<div className="flex-1 overflow-hidden relative">
					<motion.div
						initial={{ scale: 1.2, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.5, ease: 'easeOut' }}
						className="h-full w-full"
					>
						<Image
							src={HeroImg1}
							alt="Bike"
							className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
						/>
					</motion.div>
				</div>

				<div className="hidden 2xl:block flex-1 overflow-hidden relative border-l border-zinc-800">
					<motion.div
						initial={{ scale: 1.2, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
						className="h-full w-full"
					>
						<Image
							src={HeroImg2}
							alt="Runner"
							className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
