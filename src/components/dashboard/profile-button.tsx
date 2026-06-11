'use client'

import { CaretDownIcon } from '@phosphor-icons/react'
import { Avatar } from '@stz-code/ui'
import { AuthDropdown } from '../auth/auth-dropdown'

type ProfileButtonProps = {
	isAuthenticated?: boolean
	user:
		| {
				name: string
				avatarUrl: string | null
				email: string
				role: string
		  }
		| undefined
}

export function ProfileButton({ user, isAuthenticated }: ProfileButtonProps) {
	return (
		<AuthDropdown.Root>
			<AuthDropdown.Trigger
				type="button"
				className="cursor-pointer group hover:opacity-80 transition-opacity"
			>
				<div className="xl:flex hidden items-center gap-3 outline-none">
					<div className="flex flex-col items-end">
						<span className="text-sm font-medium">Gabriel Garcez</span>
						<span className="text-xs text-zinc-400">ggarcez613@gmail.com</span>
					</div>
					<Avatar.Root className="size-12">
						<Avatar.Image src="https://github.com/garcez17.png" />
						<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
					</Avatar.Root>
					<CaretDownIcon className="size-4 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
				</div>
			</AuthDropdown.Trigger>

			<AuthDropdown.Content isAuthenticated={isAuthenticated}>
				{isAuthenticated && user ? (
					<AuthDropdown.Authenticated user={user} />
				) : (
					<AuthDropdown.Unauthenticated />
				)}
			</AuthDropdown.Content>
		</AuthDropdown.Root>
	)
}
