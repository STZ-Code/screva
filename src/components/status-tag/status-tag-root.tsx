import type { Icon } from 'phosphor-react'
import type { ComponentProps } from 'react'
import { cn } from '@/utils/utils'

type StatusTagProps = ComponentProps<'div'>

export function StatusTagRoot({
	children,
	className,
	...props
}: StatusTagProps) {
	return (
		<div
			className={cn(
				'py-1 px-2 border border-zinc-800 rounded flex gap-1 items-center w-fit',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

type StatusTagIconProps = ComponentProps<Icon> & {
	icon: Icon
}

export function StatusTagIcon({
	icon: Icon,
	className,
	...props
}: StatusTagIconProps) {
	return <Icon className={cn('size-4', className)} {...props} />
}

type StatusTagLabelProps = ComponentProps<'span'> & {
	children: string
}

export function StatusTagLabel({
	children,
	className,
	...props
}: StatusTagLabelProps) {
	return (
		<span className={cn('text-zinc-400 font-semibold', className)} {...props}>
			{children}
		</span>
	)
}
