import { Dropdown } from '@stz-code/ui/dropdown'
import { cookies } from 'next/headers'
import Link from 'next/link'
import sescImg from '@/assets/examples/jaboatao.png'
import cronosImg from '@/assets/examples/organizer.png'
import picosImg from '@/assets/examples/picos.jpg'
import { CaretUpDown } from '@/components/icons/caret-up-down'
import { Tag } from '@/components/tag'
import { cn } from '@/utils/utils'
import { CreateTeamSheet } from '../teams/create-team-sheet'
import { CreateNewTeamButton } from './create-new-team-button'
import { ProvAvatar } from './prov-avatar'

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

const teams = [
	{
		id: 'team-1',
		name: 'Pro Race Organizações',
		slug: 'pro-race-organizacoes',
		url: picosImg.src,
	},
	{
		id: 'team-2',
		name: 'SESC Organizações',
		slug: 'sesc-organizacoes',
		url: sescImg.src,
	},
	{
		id: 'team-3',
		name: 'Cronosvale',
		slug: 'cronosvale',
		url: cronosImg.src,
	},
]

const testUser = {
	id: 'user-id',
	name: 'Gabriel Garcez',
	url: 'https://github.com/garcez17.png',
}

export async function ProfileDropdown({ user }: ProfileDropdownProps) {
	const cookie = await cookies()

	const currentTeamSlug = cookie.get('eq')?.value

	const currentTeam = teams.find((team) => team.slug === currentTeamSlug)

	const data = currentTeam ? currentTeam : testUser

	const showTag = user.role === 'ADMIN' && !currentTeam

	return (
		<Dropdown.Root>
			<Dropdown.Trigger className="cursor-pointer">
				<div className="flex max-w-60 w-fit items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-cyan-600">
					<ProvAvatar
						data={{ name: data.name, url: data.url }}
						className={cn('size-6 rounded-full', {
							rounded: !!currentTeam,
						})}
					/>
					<span className="text-zinc-200 truncate">{data.name}</span>

					{showTag && (
						<Tag className="bg-zinc-700">
							<span className="text-zinc-300 text-xs font-semibold">Admin</span>
						</Tag>
					)}
					<CaretUpDown className="ml-auto size-4 text-zinc-200" weight="bold" />
				</div>
			</Dropdown.Trigger>

			<Dropdown.Content
				align="start"
				sideOffset={12}
				className="bg-zinc-900 w-56 border-zinc-700"
			>
				<Dropdown.Group>
					<Dropdown.Label>Conta</Dropdown.Label>

					<Dropdown.Item asChild>
						<Link
							href={'/dashboard'}
							className="cursor-pointer hover:bg-zinc-600 transition-colors outline-none rounded"
						>
							<ProvAvatar
								data={{ name: 'Gabriel Garcez' }}
								className="size-6 rounded-full"
							/>
							{/* <Avatar.Root className="size-6 rounded-full">
								<Avatar.Image src="https://github.com/garcez17.png" />
								<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
							</Avatar.Root> */}
							<span className="line-clamp-1">{user.name}</span>
						</Link>
					</Dropdown.Item>
				</Dropdown.Group>

				<Dropdown.Group>
					<Dropdown.Label>Equipes</Dropdown.Label>

					{teams.map((team) => (
						<Dropdown.Item key={team.id} asChild>
							<Link
								href={`/dashboard/eq/${team.slug}`}
								className="cursor-pointer hover:bg-zinc-600 transition-colors outline-none rounded"
							>
								<ProvAvatar
									className="size-6 rounded"
									data={{ name: 'Gabriel Garcez', url: team.url }}
								/>
								{/* <Avatar.Root className="size-6 rounded">
									<Avatar.Image src={exampleImg.src} />
									<Avatar.Fallback>Pro Race</Avatar.Fallback>
								</Avatar.Root> */}
								<span className="line-clamp-1">{team.name}</span>
							</Link>
						</Dropdown.Item>
					))}
				</Dropdown.Group>

				<Dropdown.Separator className="text-zinc-300 bg-zinc-700" />

				<Dropdown.Item
					className="hover:bg-zinc-600 transition-colors cursor-pointer outline-none rounded"
					asChild
				>
					<CreateTeamSheet>
						<CreateNewTeamButton />
					</CreateTeamSheet>
				</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}
