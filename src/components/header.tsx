import { Logo } from '@/assets/images/logo'
import { AuthDropdown } from './auth/auth-dropdown'
import { TabNavigator } from './tab-navigator'

const tabs = [
	{ label: 'Home', href: '/' },
	{ label: 'Eventos', href: '/eventos' },
	{ label: 'Resultados', href: '/resultados' },
	{ label: 'Anunciar Evento', href: '/anunciar' },
	{ label: 'Contato', href: '/contato' },
]

export function Header() {
	return (
		<header className="flex w-full h-28">
			<div className="flex-1 flex after:triangle">
				<AuthDropdown />

				<div className="flex-1 px-16 bg-zinc-800/50 flex relative">
					<TabNavigator tabs={tabs} />
				</div>
			</div>

			<div className="w-72 items-center justify-center flex">
				<Logo className="w-44 text-zinc-100" />
			</div>
		</header>
	)
}
