'use client'
import { CaretUpDownIcon, PlusCircleIcon } from '@phosphor-icons/react'
import { Avatar, Dropdown, Sheet } from '@stz-code/ui'
import exampleImg from '@/assets/examples/picos.jpg'
import { Tag } from '@/components/tag'
import { CreateTeamSheet } from '../teams/create-team-sheet'

type Role = 'ADMIN' | 'CUSTOMER'

type User = {
	name: string
	email: string
	emailVerified: boolean
	id: string
	avatarUrl: string | null
	role: Role
}

type ProfileDropdownProps = {
	user: User
}

export function ProfileDropdown({ user }: ProfileDropdownProps) {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger className="cursor-pointer">
				<div className="flex max-w-60 w-fit items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-cyan-600">
					<Avatar.Root className="size-7 rounded-full">
						<Avatar.Image src="https://github.com/garcez17.png" />
						<Avatar.Fallback>{user.name}</Avatar.Fallback>
					</Avatar.Root>
					<span className="text-zinc-200 truncate">{user.name}</span>

					{user.role === 'ADMIN' && (
						<Tag className="bg-zinc-700">
							<span className="text-zinc-300 text-xs font-semibold">Admin</span>
						</Tag>
					)}
					<CaretUpDownIcon
						className="ml-auto size-4 text-zinc-200"
						weight="bold"
					/>
				</div>
			</Dropdown.Trigger>

			<Dropdown.Content
				align="end"
				sideOffset={12}
				className="bg-zinc-900 w-56 border-zinc-700"
			>
				<Dropdown.Group>
					<Dropdown.Label>Conta</Dropdown.Label>

					<Dropdown.Item className="hover:bg-zinc-600 transition-colors outline-none rounded">
						<Avatar.Root className="size-6 rounded-full">
							<Avatar.Image src="https://github.com/garcez17.png" />
							<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
						</Avatar.Root>
						<span className="line-clamp-1">Gabriel Garcez</span>
					</Dropdown.Item>
				</Dropdown.Group>

				<Dropdown.Group>
					<Dropdown.Label>Equipes</Dropdown.Label>

					<Dropdown.Item className="hover:bg-zinc-600 transition-colors outline-none rounded">
						<Avatar.Root className="size-6 rounded">
							<Avatar.Image src={exampleImg.src} />
							<Avatar.Fallback>Pro Race</Avatar.Fallback>
						</Avatar.Root>
						<span className="line-clamp-1">Pro Race Organizações</span>
					</Dropdown.Item>
				</Dropdown.Group>

				<Dropdown.Separator className="text-zinc-300 bg-zinc-700" />

				<Dropdown.Item
					className="hover:bg-zinc-600 transition-colors cursor-pointer outline-none rounded"
					asChild
				>
					<CreateTeamSheet>
						<Sheet.Trigger className="outline-none px-2 cursor-pointer py-2 w-full text-sm hover:bg-zinc-600 transition-colors normal-case font-semibold flex gap-2 line-clamp-1">
							<PlusCircleIcon className="size-5 mr-2" />
							Criar nova equipe
						</Sheet.Trigger>
					</CreateTeamSheet>
				</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}
