import type { ComponentProps } from 'react'
import { cn } from '@/utils/utils'

type NavSettingsRootProps = ComponentProps<'div'>

export function NavSettingsRoot({
	children,
	className,
	...props
}: NavSettingsRootProps) {
	return (
		<div className={cn('flex flex-col gap-2', className)} {...props}>
			{children}
		</div>
	)
}
