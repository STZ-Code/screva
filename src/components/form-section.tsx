import type { ReactNode } from 'react'
import { cn } from '@/utils/utils'

type FormSectionProps = {
	className?: string
	children: ReactNode
}

export function FormSectionRoot({ children, className }: FormSectionProps) {
	return (
		<section
			className={cn('border-b border-b-neutral-700 flex p-8 gap-4', className)}
		>
			{children}
		</section>
	)
}

export function FormSectionHeader({ children, className }: FormSectionProps) {
	return (
		<div className={cn('flex flex-col gap-1 xl:w-5/12 w-full', className)}>
			{children}
		</div>
	)
}

export function FormSectionContent({ children, className }: FormSectionProps) {
	return (
		<div className={cn('flex flex-col gap-4 flex-1', className)}>
			{children}
		</div>
	)
}

export function FormSectionTitle({ children, className }: FormSectionProps) {
	return <h2 className={cn('text-zinc-200', className)}>{children}</h2>
}

export function FormSectionDescription({
	children,
	className,
}: FormSectionProps) {
	return (
		<span className={cn('text-zinc-400 text-xs', className)}>{children}</span>
	)
}

export const FormSection = {
	Root: FormSectionRoot,
	Header: FormSectionHeader,
	Content: FormSectionContent,
	Title: FormSectionTitle,
	Description: FormSectionDescription,
}
