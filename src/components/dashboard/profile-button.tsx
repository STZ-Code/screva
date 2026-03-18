import { CaretDownIcon, SignOutIcon } from '@phosphor-icons/react'
import { Avatar, Dropdown } from '@stz-code/ui'

export function ProfileButton() {
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
					<a href="/api/auth/sign-out">
						<SignOutIcon className="mr-2 size-4" />
						Sair
					</a>
				</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}
