'use client'
import { Avatar } from '@stz-code/ui'
import { motion } from 'motion/react'
import { Tag } from '@/components/tag'

type AuthDropdownAuthenticatedProps = {
	user: {
		name: string
		avatarUrl: string | null
		email: string
		role: string
	}
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

export function AuthDropdownAuthenticated({
	user,
}: AuthDropdownAuthenticatedProps) {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className="bg-zinc-800 flex flex-col lg:py-10 py-12 px-12 gap-6 lg:rounded-b-2xl"
		>
			<div className="flex flex-col gap-3 items-center">
				<motion.div
					variants={item}
					className="flex flex-col gap-2 w-full items-center"
				>
					<Avatar.Root className="size-16 rounded">
						{user.avatarUrl && <Avatar.Image src={user.avatarUrl} />}

						<Avatar.Fallback className="bg-neutral-900 rounded">
							{user.name}
						</Avatar.Fallback>
					</Avatar.Root>

					<strong className="text-zinc-100 font-semibold">{user.name}</strong>

					<span className="text-zinc-300 text-sm lg:text-xs">{user.email}</span>

					{/* <Tag className="bg-zinc-700">
						<span className="text-zinc-200 text-xs font-semibold">
							{user.role}
						</span>
					</Tag> */}
				</motion.div>
			</div>
		</motion.div>
	)
}
