'use client'

import { CaretDoubleUpIcon } from '@phosphor-icons/react'
import { motion, type Variants } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/assets/images/logo'
import S from '@/assets/screva-s.svg'
import { SocialMediaLinks } from './social-media-links'

export function Footer() {
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
		<footer className="relative border-t-2 border-t-zinc-700 overflow-hidden">
			<motion.div
				initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
				whileInView={{ opacity: 0.4, scale: 1, rotate: 12 }}
				transition={{ duration: 1.5, ease: 'easeOut' }}
				viewport={{ once: true }}
				className="absolute right-16 lg:right-56 -top-28 z-10 pointer-events-none"
			>
				<Image src={S} alt="S do Screva" className="opacity-40" />
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-50px' }}
				className="py-12 px-12 lg:px-28 flex justify-between flex-col gap-12 md:flex-row md:gap-0 relative z-20"
			>
				<motion.div
					variants={itemVariants}
					className="w-full md:w-1/4 gap-8 flex flex-col"
				>
					<div className="flex flex-col gap-6">
						<Logo className="w-36" />
						<p className="text-justify text-zinc-400 font-medium text-sm leading-relaxed">
							Screva é uma plataforma definitiva para atletas e organizadores de
							eventos. Conectamos você à sua próxima corrida ou desafio,
							garantindo resultados precisos e a melhor experiência.
						</p>
					</div>

					<SocialMediaLinks />

					<motion.a
						href="#inicio"
						whileHover={{
							scale: 1.02,
							backgroundColor: 'rgba(255,255,255,0.1)',
						}}
						whileTap={{ scale: 0.98 }}
						className="text-zinc-100 text-sm border-2 border-zinc-100 w-fit px-4 py-2 flex items-center gap-4 transition-colors"
					>
						<CaretDoubleUpIcon size={20} />
						Voltar ao topo
					</motion.a>
				</motion.div>

				<div className="hidden lg:flex md:w-1/2 flex-col sm:flex-row gap-16 md:justify-end">
					<motion.nav variants={itemVariants}>
						<span className="text-zinc-100 font-bold uppercase tracking-widest text-xs">
							Navegação
						</span>
						<ul className="flex flex-col gap-3 mt-4">
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
										className="text-zinc-400 text-sm transition-colors block"
									>
										<motion.span
											className="block"
											whileHover={{ x: 5, color: '#22d3ee' }}
										>
											{item.label}
										</motion.span>
									</Link>
								</li>
							))}
						</ul>
					</motion.nav>

					<motion.nav variants={itemVariants}>
						<span className="text-zinc-100 font-bold uppercase tracking-widest text-xs">
							Legal
						</span>
						<ul className="flex flex-col gap-3 mt-4">
							{['Política de Privacidade', 'Termos de Serviço', 'Cookies'].map(
								(item) => (
									<li key={item}>
										<motion.a
											href="/"
											whileHover={{ x: 5, color: '#22d3ee' }}
											className="text-zinc-400 text-sm transition-colors block"
										>
											{item}
										</motion.a>
									</li>
								),
							)}
						</ul>
					</motion.nav>
				</div>
			</motion.div>

			<div className="relative w-full h-12">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4 }}
					viewport={{ once: true }}
					className="bg-cyan-600 h-full items-center justify-center absolute bottom-0 z-50 w-full flex"
				>
					<span className="font-medium text-zinc-50 text-sm">
						©2026 Screva. Todos os direitos reservados.
					</span>
				</motion.div>
			</div>
		</footer>
	)
}
