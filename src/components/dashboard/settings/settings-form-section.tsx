import type { ComponentProps } from 'react'
import { cn } from '@/utils/utils'

type SettingsFormSectionRootProps = ComponentProps<'form'>

function SettingsFormSectionRoot({
	children,
	...props
}: SettingsFormSectionRootProps) {
	return (
		<form
			{...props}
			className={cn(
				'border border-zinc-600 flex flex-col rounded',
				props.className,
			)}
		>
			{children}
		</form>
	)
}

function SettingsFormSectionContent({
	children,
	...props
}: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn(
				'flex flex-col gap-4 flex-1 p-6 bg-zinc-600/20',
				props.className,
			)}
		>
			{children}
		</div>
	)
}

function SettingsFormSectionFooter({
	children,
	...props
}: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn(
				'px-6 py-3 border-t border-t-zinc-600 bg-neutral-900 rounded-b',
				props.className,
			)}
		>
			{children}
		</div>
	)
}

export const SettingsFormSection = {
	Root: SettingsFormSectionRoot,
	Content: SettingsFormSectionContent,
	Footer: SettingsFormSectionFooter,
}
