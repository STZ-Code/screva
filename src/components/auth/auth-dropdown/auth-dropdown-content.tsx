'use client'

import {
	HeadsetIcon,
	ListBulletsIcon,
	LockIcon,
	MegaphoneSimpleIcon,
	PersonSimpleRunIcon,
	RankingIcon,
	SignOutIcon,
	UserIcon,
} from '@phosphor-icons/react'
import { Dropdown } from '@stz-code/ui/layout'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { DropdownButton } from '@/components/dropdown-button'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { authClient } from '@/lib/auth-client'

type AuthDropdownContentProps = {
	children: ReactNode
	isAuthenticated?: boolean
}

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

export function AuthDropdownContent({
	children,
	isAuthenticated,
}: AuthDropdownContentProps) {
	const router = useRouter()

	async function signOut() {
		// document.cookie = 'email=; Max-Age=0; path=/'

		// router.push('/sign-in')
		await authClient.signOut(
			{},
			{
				onSuccess() {
					router.push('/sign-in')
				},
			},
		)
	}

	const isDesktop = useBreakpoint('lg')

	return (
		<Dropdown.Content
			asChild
			className="p-0 border-none outline-none rounded-none xl:rounded-md w-screen xl:w-fit h-[calc(100vh-6rem)] xl:h-fit"
			sideOffset={isDesktop ? 0 : -8}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.96, y: -8 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.96, y: -8 }}
				transition={{ duration: 0.18, ease: 'easeOut' }}
				className="bg-zinc-900"
			>
				{children}

				<motion.div
					variants={container}
					initial="hidden"
					animate="visible"
					className="py-6 px-4 flex flex-col gap-3"
				>
					<Dropdown.Group className="xl:gap-1 gap-3 flex flex-col">
						{isAuthenticated && (
							<motion.div variants={item}>
								<Link href={'/dashboard'}>
									<DropdownButton className="cursor-pointer xl:text-base">
										<UserIcon className="size-8 2xl:size-7 xl:size-6 mr-2" />
										Perfil
									</DropdownButton>
								</Link>
							</motion.div>
						)}

						<motion.div variants={item}>
							<Link href={'/eventos'}>
								<DropdownButton className="cursor-pointer xl:text-base">
									<PersonSimpleRunIcon className="size-8 2xl:size-7 xl:size-6 mr-2" />
									Eventos
								</DropdownButton>
							</Link>
						</motion.div>

						<motion.div variants={item}>
							<Link href={'/resultados'}>
								<DropdownButton className="cursor-pointer xl:text-base">
									<RankingIcon className="size-8 2xl:size-7 xl:size-6 mr-2" />
									Resultados
								</DropdownButton>
							</Link>
						</motion.div>

						<motion.div variants={item}>
							<DropdownButton className="cursor-pointer xl:text-base">
								<MegaphoneSimpleIcon className="size-8 2xl:size-7 xl:size-6 mr-2" />
								Anunciar Eventos
							</DropdownButton>
						</motion.div>

						{isAuthenticated && (
							<motion.div variants={item}>
								<DropdownButton
									onClick={signOut}
									className="cursor-pointer xl:text-base"
								>
									<SignOutIcon className="size-8 2xl:size-7 xl:size-6 mr-2" />
									Sair
								</DropdownButton>
							</motion.div>
						)}
					</Dropdown.Group>

					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.2 }}
					>
						<Dropdown.Separator className="bg-zinc-800" />
					</motion.div>

					<Dropdown.Group className="xl:gap-1 gap-3 flex flex-col">
						<Link href={'/contato'}>
							<motion.div variants={item}>
								<DropdownButton className="cursor-pointer xl:text-base">
									<HeadsetIcon className="size-8 2xl:size-7 xl:size-6 mr-2" />
									Contato
								</DropdownButton>
							</motion.div>
						</Link>

						<motion.div variants={item}>
							<DropdownButton className="cursor-pointer xl:text-base">
								<ListBulletsIcon className="size-8 2xl:size-7 xl:size-6 mr-2" />
								Termos de Uso
							</DropdownButton>
						</motion.div>

						<motion.div variants={item}>
							<DropdownButton className="cursor-pointer xl:text-base">
								<LockIcon className="size-8 2xl:size-7 xl:size-6 mr-2" />
								Política de Privacidade
							</DropdownButton>
						</motion.div>
					</Dropdown.Group>
				</motion.div>
			</motion.div>
		</Dropdown.Content>
	)
}
