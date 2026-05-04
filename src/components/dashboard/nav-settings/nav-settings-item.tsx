import Link from 'next/link'
import type { ComponentProps } from 'react'
import { cn } from '@/utils/utils'

type NavSettingsItemProps = ComponentProps<typeof Link>

export function NavSettingsItem({
	href,
	className,
	children,
}: NavSettingsItemProps) {
	return (
		<Link
			href={href}
			className={cn(
				'text-zinc-400/80 font-semibold text-sm py-3 px-4 w-56 rounded-md hover:bg-zinc-800/40 transition-colors',
				className,
			)}
		>
			{children}
		</Link>
	)
}
