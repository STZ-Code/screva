import { CaretRightIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/utils/utils'

type CustomerInfoRootProps = {
	children: ReactNode
	className?: string
}

function CustomerInfoRoot({ children, className }: CustomerInfoRootProps) {
	return (
		<div
			className={cn(
				'flex flex-col border border-zinc-800 flex-1 rounded-md bg-neutral-900',
				className,
			)}
		>
			{children}
		</div>
	)
}

function CustomerInfoHeader({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<div
			className={cn(
				'flex items-center gap-2 border-b border-zinc-800 p-4 justify-between',
				className,
			)}
		>
			{children}
		</div>
	)
}

function CustomerInfoCTA({
	children,
	className,
	...props
}: { children: ReactNode; className?: string } & ComponentProps<typeof Link>) {
	return (
		<Link
			className={cn(
				'bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-1 px-4 rounded',
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	)
}

type CustomerTitleProps = {
	children: string
	className?: string
}

function CustomerTitle({ children, className }: CustomerTitleProps) {
	return <h3 className={cn('text-lg font-semibold', className)}>{children}</h3>
}

function CustomerInfoContent({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return <div className={cn(className)}>{children}</div>
}

function CustomerInfoItem({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<div
			className={cn(
				'border-b border-zinc-800 py-2 flex items-center gap-2 last:border-none',
				className,
			)}
		>
			{children}

			<CaretRightIcon size={20} className="text-zinc-400" />
		</div>
	)
}

export const CustomerInfo = {
	Root: CustomerInfoRoot,
	Header: CustomerInfoHeader,
	CTA: CustomerInfoCTA,
	Title: CustomerTitle,
	Content: CustomerInfoContent,
	Item: CustomerInfoItem,
}
