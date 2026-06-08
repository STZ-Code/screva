import { cn } from '@/utils/utils'

export function KpiRoot({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={cn(
				'flex flex-col gap-4 border border-zinc-800 rounded-2xl p-4 bg-neutral-900 shadow-md',
				className,
			)}
		>
			{children}
		</div>
	)
}

export function KpiValue({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<span
			className={cn(
				'text-4xl font-bebas uppercase tracking-wide text-zinc-100',
				className,
			)}
		>
			{children}
		</span>
	)
}

export function KpiLabel({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<span
			className={cn(
				'text-[10px] uppercase tracking-widest text-zinc-400 font-bold',
				className,
			)}
		>
			{children}
		</span>
	)
}

export function KpiIndicator({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<span
			className={cn(
				'text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold',
				className,
			)}
		>
			{children}
		</span>
	)
}
