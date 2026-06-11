'use client'

import { Dropdown } from '@stz-code/ui/layout'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Logo } from '@/assets/images/logo'
import { Button } from '@/components/button'

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.05,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 6 },
	visible: { opacity: 1, y: 0 },
}

export function AuthDropdownUnauthenticated() {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className="bg-zinc-800 flex flex-col xl:py-10 py-12 px-12 gap-8 xl:gap-6 xl:rounded-b-2xl"
		>
			<motion.div variants={item} className="flex flex-col items-center gap-2">
				<Logo className="w-28" />

				<span className="text-xs text-zinc-50/70">
					Sua plataforma de eventos esportivos
				</span>
			</motion.div>

			<div className="flex flex-col gap-3 items-center">
				<motion.div variants={item} className="flex flex-col gap-2 w-full">
					<strong className="text-zinc-100 text-sm font-semibold">
						Já tenho conta
					</strong>

					<Dropdown.Item className="p-0 hover:outline-none">
						<Button className="rounded-sm flex py-0">
							<Link href="/sign-in" className="flex-1 py-2 text-center">
								Entrar
							</Link>
						</Button>
					</Dropdown.Item>
				</motion.div>

				<motion.span
					variants={item}
					className="text-zinc-300 font-semibold text-xs"
				>
					ou
				</motion.span>

				<motion.div variants={item} className="flex flex-col gap-2 w-full">
					<strong className="text-zinc-100 text-sm font-semibold">
						Ainda não tem conta?
					</strong>

					<Dropdown.Item className="p-0 hover:outline-none">
						<Button className="py-0 rounded-sm bg-zinc-50 text-cyan-600 hover:bg-zinc-50/90">
							<Link href="/sign-up" className="flex-1 py-2 text-center">
								Cadastre-se
							</Link>
						</Button>
					</Dropdown.Item>
				</motion.div>
			</div>
		</motion.div>
	)
}
