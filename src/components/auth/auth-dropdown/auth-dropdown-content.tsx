'use client'

import {
	BinocularsIcon,
	ChatIcon,
	HeadsetIcon,
	ListBulletsIcon,
	LockIcon,
	MegaphoneSimpleIcon,
	SignOutIcon,
	UserIcon,
} from '@phosphor-icons/react'
import { Dropdown } from '@stz-code/ui'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'
import { DropdownButton } from '@/components/dropdown-button'
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
		await authClient.signOut(
			{},
			{
				onSuccess() {
					router.push('/sign-in')
				},
			},
		)
	}

	return (
		<Dropdown.Content asChild className="p-0 border-none outline-none">
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
					className="p-6"
				>
					<Dropdown.Group>
						{isAuthenticated && (
							<motion.div variants={item}>
								<Link href={'/dashboard'}>
									<DropdownButton>
										<UserIcon className="size-5 mr-2" />
										Perfil
									</DropdownButton>
								</Link>
							</motion.div>
						)}

						<motion.div variants={item}>
							<DropdownButton>
								<BinocularsIcon className="size-5 mr-2" />
								Explorar Eventos
							</DropdownButton>
						</motion.div>

						<motion.div variants={item}>
							<DropdownButton>
								<MegaphoneSimpleIcon className="size-5 mr-2" />
								Anunciar Eventos
							</DropdownButton>
						</motion.div>

						{isAuthenticated && (
							<motion.div variants={item}>
								<DropdownButton onClick={signOut}>
									<SignOutIcon className="size-5 mr-2" />
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
						<Dropdown.Separator className="bg-zinc-700" />
					</motion.div>

					<Dropdown.Group>
						<motion.div variants={item}>
							<DropdownButton>
								<ChatIcon className="size-5 mr-2" />
								Central de Ajuda
							</DropdownButton>
						</motion.div>

						<motion.div variants={item}>
							<DropdownButton>
								<HeadsetIcon className="size-5 mr-2" />
								Contato
							</DropdownButton>
						</motion.div>

						<motion.div variants={item}>
							<DropdownButton>
								<ListBulletsIcon className="size-5 mr-2" />
								Termos de Uso
							</DropdownButton>
						</motion.div>

						<motion.div variants={item}>
							<DropdownButton>
								<LockIcon className="size-5 mr-2" />
								Política de Privacidade
							</DropdownButton>
						</motion.div>
					</Dropdown.Group>
				</motion.div>
			</motion.div>
		</Dropdown.Content>
	)
}
