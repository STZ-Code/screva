'use client'

import { TabNavigator } from '@stz-code/ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/assets/images/logo'
import { AuthDropdown } from './auth/auth-dropdown'

export function Header() {
	const pathname = usePathname()

	return (
		<header className="flex w-full h-28">
			<div className="flex-1 flex after:triangle">
				<AuthDropdown />

				<div className="flex-1 px-16 bg-zinc-800/50 flex relative justify-center">
					<TabNavigator.Root active={pathname} className="h-full w-fit">
						<TabNavigator.Control className="flex justify-evenly h-full 2xl:justify-normal gap-16">
							<TabNavigator.Item
								href="/"
								as={Link}
								className="text-zinc-50 text-2xl font-bebas h-full flex items-center justify-center"
							>
								Home
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/eventos"
								as={Link}
								className="text-zinc-50 text-2xl font-bebas h-full flex items-center justify-center"
							>
								Eventos
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/resultados"
								as={Link}
								className="text-zinc-50 text-2xl font-bebas h-full flex items-center justify-center"
							>
								Resultados
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/anunciar"
								as={Link}
								className="text-zinc-50 text-2xl font-bebas h-full flex items-center justify-center"
							>
								Anunciar Evento
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/contato"
								as={Link}
								className="text-zinc-50 text-2xl font-bebas h-full flex items-center justify-center"
							>
								Contato
							</TabNavigator.Item>
						</TabNavigator.Control>
						<TabNavigator.Bar className="bg-zinc-50 before:absolute before:-left-[5.8px] before:bottom-0 before:w-0 before:h-0 before:border-b-[5px] before:border-b-gray-50 before:border-l-[6px] before:border-l-transparent after:absolute after:-right-[5.9px] after:top-0 after:w-0 after:h-0 after:border-t-[5px] after:border-t-gray-50 after:border-r-[6px] after:border-r-transparent" />
					</TabNavigator.Root>
				</div>
			</div>

			<div className="w-72 items-center justify-center flex">
				<Logo className="w-44 text-zinc-100" />
			</div>
		</header>
	)
}
