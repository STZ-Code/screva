import { cookies } from 'next/headers'
import Link from 'next/link'
import { MiniLogo } from '@/assets/images/mini-logo'
import { getCurrentUser } from '@/lib/get-current-user'
import { LineVertical } from '../icons/line-vertical'
import { EventsDropdown } from './dropdown/events-dropdown'
import { ProfileDropdown } from './dropdown/profile-dropdown'
import { HeaderTabNavigator } from './header-tab-navigator'
import { ProfileButton } from './profile-button'

export async function Header() {
	const user = await getCurrentUser()

	if (!user) return <p>Loading..</p>

	const cookie = await cookies()

	const currentTeamSlug = cookie.get('eq')?.value
	const currentEventSlug = cookie.get('ev')?.value

	const isContextSlug = currentTeamSlug || currentEventSlug

	const showEventsDropdown = user.role === 'ADMIN' || isContextSlug

	return (
		<header className="2xl:px-12 px-6 2xl:pt-8 pt-6 bg-dashboard-header flex justify-between 2xl:items-start items-center">
			<div className="flex flex-col gap-8 w-full">
				<div className="flex">
					<Link href={'/'} className="cursor-pointer">
						<MiniLogo className="size-8 mr-4" />
					</Link>

					<div className="flex gap-2">
						<LineVertical className="size-8 rotate-24 text-zinc-600" />

						<div className="flex gap-2 2xl:flex-row flex-col items-center">
							<ProfileDropdown user={user} />
							{showEventsDropdown && <EventsDropdown />}
						</div>
					</div>
				</div>

				<HeaderTabNavigator role={user.role} />
			</div>

			<ProfileButton user={user} isAuthenticated={!!user} />
		</header>
	)
}
