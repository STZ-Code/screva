'use client'

import { CaretDoubleUpIcon } from '@phosphor-icons/react'
import { AnimatePresence, motion, useScroll, type Variants } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Logo } from '@/assets/images/logo'
import S from '@/assets/screva-s.svg'

import { SocialMediaLinks } from './social-media-links'

export function Footer() {
	const { scrollY } = useScroll()
	const [showBackToTop, setShowBackToTop] = useState(false)

	useEffect(() => {
		const unsubscribe = scrollY.on('change', (latest) => {
			setShowBackToTop(latest > 400)
		})

		return unsubscribe
	}, [scrollY])

	function handleScrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const containerVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.1,
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<>
			<AnimatePresence>
				{showBackToTop && (
					<motion.button
						initial={{ opacity: 0, scale: 0.8, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, y: 20 }}
						transition={{ duration: 0.2 }}
						onClick={handleScrollToTop}
						className="
							fixed bottom-6 right-6 z-[999]
							flex size-12 items-center justify-center
							rounded-full border border-cyan-400/30
							bg-zinc-950/80 backdrop-blur-xl
							text-cyan-400 shadow-2xl
							transition-colors
							hover:bg-cyan-400 hover:text-zinc-950 cursor-pointer
						"
					>
						<CaretDoubleUpIcon size={20} weight="bold" />
					</motion.button>
				)}
			</AnimatePresence>

			<footer className="relative overflow-hidden border-t-2 border-t-zinc-700">
				<motion.div
					initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
					whileInView={{ opacity: 0.4, scale: 1, rotate: 12 }}
					transition={{ duration: 1.5, ease: 'easeOut' }}
					viewport={{ once: true }}
					className="pointer-events-none absolute -top-28 right-16 z-10 2xl:right-56"
				>
					<Image src={S} alt="S do Screva" className="opacity-40" />
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
					className="
						relative z-20
						flex flex-col justify-between
						gap-12
						px-6 py-12
						md:flex-row md:gap-0
						2xl:px-28
					"
				>
					<motion.div
						variants={itemVariants}
						className="flex w-full flex-col gap-8 2xl:w-1/4"
					>
						<div className="flex flex-col gap-6">
							<Logo className="w-36" />

							<p className="text-justify text-sm font-medium leading-relaxed text-zinc-400">
								Screva é uma plataforma definitiva para atletas e organizadores
								de eventos. Conectamos você à sua próxima corrida ou desafio,
								garantindo resultados precisos e a melhor experiência.
							</p>
						</div>

						<SocialMediaLinks />

						<motion.button
							onClick={handleScrollToTop}
							whileHover={{
								scale: 1.02,
								backgroundColor: 'rgba(255,255,255,0.08)',
							}}
							whileTap={{ scale: 0.98 }}
							className="
								flex w-fit items-center gap-4
								border border-zinc-700
								bg-zinc-900/60
								px-4 py-2
								text-sm text-zinc-100
								backdrop-blur-sm
								transition-colors cursor-pointer
							"
						>
							<CaretDoubleUpIcon size={20} />
							Voltar ao topo
						</motion.button>
					</motion.div>

					<div className="hidden flex-col gap-16 md:w-1/2 sm:flex-row md:justify-end 2xl:flex">
						<motion.nav variants={itemVariants}>
							<span className="text-xs font-bold uppercase tracking-widest text-zinc-100">
								Navegação
							</span>

							<ul className="mt-4 flex flex-col gap-3">
								{[
									{ label: 'Home', href: '/' },
									{ label: 'Eventos', href: '/eventos' },
									{ label: 'Resultados', href: '/resultados' },
									{ label: 'Anuncie um Evento', href: '/anunciar' },
									{ label: 'Contato', href: '/contato' },
								].map((item) => (
									<li key={item.href}>
										<Link
											href={item.href}
											className="block text-sm text-zinc-400 transition-colors"
										>
											<motion.span
												className="block"
												whileHover={{
													x: 5,
													color: '#22d3ee',
												}}
											>
												{item.label}
											</motion.span>
										</Link>
									</li>
								))}
							</ul>
						</motion.nav>

						<motion.nav variants={itemVariants}>
							<span className="text-xs font-bold uppercase tracking-widest text-zinc-100">
								Legal
							</span>

							<ul className="mt-4 flex flex-col gap-3">
								{[
									'Política de Privacidade',
									'Termos de Serviço',
									'Cookies',
								].map((item) => (
									<li key={item}>
										<motion.a
											href="/"
											whileHover={{
												x: 5,
												color: '#22d3ee',
											}}
											className="block text-sm text-zinc-400 transition-colors"
										>
											{item}
										</motion.a>
									</li>
								))}
							</ul>
						</motion.nav>
					</div>
				</motion.div>

				<div className="relative h-12 w-full">
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4 }}
						viewport={{ once: true }}
						className="
							absolute bottom-0 z-50
							flex h-full w-full items-center justify-center
							bg-cyan-600
						"
					>
						<span className="text-center text-sm font-medium text-zinc-50">
							©2026 Screva. Todos os direitos reservados.
						</span>
					</motion.div>
				</div>
			</footer>
		</>
	)
}
