'use client'

import { TabNavigator } from '@stz-code/ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { Logo } from '@/assets/images/logo'

type HeaderProps = {
	children: ReactNode
}

export function Header({ children }: HeaderProps) {
	const pathname = usePathname()

	return (
		<header className="flex w-full h-28 fixed bg-neutral-900 z-40 items-center justify-start">
			<div className="flex-1 flex after:triangle">
				{children}
				<div className="flex-1 px-16 bg-zinc-800/50 2xl:flex relative justify-center hidden">
					<TabNavigator.Root active={pathname} className="h-full w-fit">
						<TabNavigator.Control className="flex justify-evenly h-full 22xl:justify-normal gap-16">
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
						<TabNavigator.Bar className="bg-zinc-50 before:absolute before:left-[-5.8px] before:bottom-0 before:w-0 before:h-0 before:border-b-[5px] before:border-b-gray-50 before:border-l-[6px] before:border-l-transparent after:absolute after:right-[-5.9px] after:top-0 after:w-0 after:h-0 after:border-t-[5px] after:border-t-gray-50 after:border-r-[6px] after:border-r-transparent" />
					</TabNavigator.Root>
				</div>
			</div>
			<Link href={'/'} className="w-full 2xl:w-72">
				<Logo className="w-36 h-fit 2xl:w-44 text-zinc-100 ml-4" />
			</Link>
		</header>
	)
}
