'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/utils/utils'

type TabNavigatorProps = {
	tabs: {
		label: string
		href: string
	}[]
}

export function TabNavigator({ tabs }: TabNavigatorProps) {
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
		<>
			<nav className="flex-1 flex items-center justify-center">
				<ul className="flex justify-evenly h-full 2xl:justify-normal gap-16">
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
				className={cn(
					'absolute bottom-0 h-[5px] bg-gray-50 transition-all duration-300 before:absolute before:-left-[5.8px] before:bottom-0 before:w-0 before:h-0 before:border-b-[5px] before:border-b-gray-50 before:border-l-[6px] before:border-l-transparent after:absolute after:-right-[5.9px] after:top-0 after:w-0 after:h-0 after:border-t-[5px] after:border-t-gray-50 after:border-r-[6px] after:border-r-transparent',
					{
						'before:opacity-0': style.width === 0,
						'after:opacity-0': style.width === 0,
					},
				)}
				style={style}
			/>
		</>
	)
}
