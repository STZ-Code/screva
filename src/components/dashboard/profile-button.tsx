'use client'

import { CaretDownIcon, SignOutIcon } from '@phosphor-icons/react'
import { Avatar, Dropdown } from '@stz-code/ui'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export function ProfileButton() {
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
		<Dropdown.Root>
			<Dropdown.Trigger>
				<div className="flex items-center gap-3 outline-none">
					<div className="flex flex-col items-end">
						<span className="text-sm font-medium">Gabriel Garcez</span>
						<span className="text-xs text-zinc-400">ggarcez613@gmail.com</span>
					</div>
					<Avatar.Root className="size-12">
						<Avatar.Image src="https://github.com/garcez17.png" />
						<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
					</Avatar.Root>
					<CaretDownIcon className="size-4 text-zinc-400" />
				</div>
			</Dropdown.Trigger>
			<Dropdown.Content align="end">
				<Dropdown.Item asChild>
					<button type="button" onClick={signOut}>
						<SignOutIcon className="mr-2 size-4" />
						Sair
					</button>
				</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}
