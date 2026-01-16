'use client'
import { UserIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Logo } from '@/assets/images/logo'

const tabs = [
	{ label: 'Home', href: '/' },
	{ label: 'Eventos', href: '/eventos' },
	{ label: 'Resultados', href: '/resultados' },
	{ label: 'Anunciar Evento', href: '/anunciar' },
	{ label: 'Contato', href: '/contato' },
]

export function Header() {
	const [style, setStyle] = useState({ width: 0, left: 0 })

	const pathname = usePathname()

	useEffect(() => {
		const el = document.querySelector<HTMLAnchorElement>(
			`a[data-tab="${pathname}"]`,
		)

		if (!el) return

		setStyle({
			width: el.offsetWidth,
			left: el.offsetLeft,
		})
	}, [pathname])

	return (
		<header className="flex w-full h-28">
			<div className="flex-1 flex after:triangle">
				<button
					type="button"
					className="bg-zinc-800/50 w-28 hover:opacity-60 transition-opacity flex items-center justify-center"
				>
					<UserIcon size={32} className="text-gray-50" />
				</button>

				<div className="flex-1 px-16 bg-zinc-800/50 flex relative">
					<nav className="flex-1">
						<ul className="flex justify-evenly h-full">
							{tabs.map((tab) => (
								<li key={tab.href}>
									<Link
										href={tab.href}
										data-tab={tab.href}
										className="h-full flex hover:opacity-70 transition-opacity items-center justify-center text-2xl font-bebas"
									>
										{tab.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div
						className="
							absolute bottom-0 h-[5px] bg-gray-50
							transition-all duration-300

							before:absolute before:-left-[5.8px] before:bottom-0
							before:w-0 before:h-0
							before:border-b-[5px] before:border-b-gray-50
							before:border-l-[6px] before:border-l-transparent

							after:absolute after:-right-[5.9px] after:top-0
							after:w-0 after:h-0
							after:border-t-[5px] after:border-t-gray-50
							after:border-r-[6px] after:border-r-transparent
						"
						style={style}
					/>
				</div>
			</div>

			<div className="w-72 items-center justify-center flex">
				<Logo className="w-48 text-zinc-100" />
			</div>
		</header>
	)
}
