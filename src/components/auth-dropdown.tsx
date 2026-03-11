'use client'

import {
	BinocularsIcon,
	ChatIcon,
	HeadsetIcon,
	ListBulletsIcon,
	LockIcon,
	MegaphoneSimpleIcon,
	UserIcon,
} from '@phosphor-icons/react'
import { Dropdown } from '@stz-code/ui'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Logo } from '@/assets/images/logo'
import { Button } from './button'
import { DropdownButton } from './dropdown-button'

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

export function AuthDropdown() {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger asChild>
				<motion.button
					type="button"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: 'spring', stiffness: 400, damping: 20 }}
					className="bg-zinc-800/50 w-28 hover:opacity-60 transition-opacity flex items-center justify-center outline-none"
				>
					<UserIcon size={32} className="text-gray-50" />
				</motion.button>
			</Dropdown.Trigger>

			<Dropdown.Content asChild className="p-0 border-none outline-none">
				<motion.div
					initial={{ opacity: 0, scale: 0.96, y: -8 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.96, y: -8 }}
					transition={{ duration: 0.18, ease: 'easeOut' }}
					className="bg-zinc-900"
				>
					<motion.div
						variants={container}
						initial="hidden"
						animate="visible"
						className="bg-zinc-800 flex flex-col p-6 gap-6 rounded-b-2xl"
					>
						<motion.div
							variants={item}
							className="flex flex-col items-center gap-2"
						>
							<Logo className="w-28" />

							<span className="text-xs text-zinc-50/70">
								Sua plataforma de eventos esportivos
							</span>
						</motion.div>

						<div className="flex flex-col gap-3 items-center">
							<motion.div
								variants={item}
								className="flex flex-col gap-2 w-full"
							>
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

							<motion.div
								variants={item}
								className="flex flex-col gap-2 w-full"
							>
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

					<motion.div
						variants={container}
						initial="hidden"
						animate="visible"
						className="p-6"
					>
						<Dropdown.Group>
							<motion.div variants={item}>
								<DropdownButton>
									<BinocularsIcon />
									Explorar Eventos
								</DropdownButton>
							</motion.div>

							<motion.div variants={item}>
								<DropdownButton>
									<MegaphoneSimpleIcon />
									Anunciar Eventos
								</DropdownButton>
							</motion.div>
						</Dropdown.Group>

						<motion.div
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.2 }}
						>
							<Dropdown.Separator className="bg-zinc-700" />
						</motion.div>

						<Dropdown.Group>
							<motion.div variants={item}>
								<DropdownButton>
									<ChatIcon />
									Central de Ajuda
								</DropdownButton>
							</motion.div>

							<motion.div variants={item}>
								<DropdownButton>
									<HeadsetIcon />
									Contato
								</DropdownButton>
							</motion.div>

							<motion.div variants={item}>
								<DropdownButton>
									<ListBulletsIcon />
									Termos de Uso
								</DropdownButton>
							</motion.div>

							<motion.div variants={item}>
								<DropdownButton>
									<LockIcon />
									Política de Privacidade
								</DropdownButton>
							</motion.div>
						</Dropdown.Group>
					</motion.div>
				</motion.div>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}
