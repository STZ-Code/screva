import { cn } from '@/utils/utils'

export function KpiRoot({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-4 border border-zinc-800 rounded-2xl p-4 bg-zinc-900/50 shadow-md">
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

export function KpiLabel({ children }: { children: React.ReactNode }) {
	return (
		<span className="text-[10px] uppercase tracking-[0.1em] text-zinc-400 font-bold">
			{children}
		</span>
	)
}

export function KpiIndicator({ children }: { children: React.ReactNode }) {
	return (
		<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
			{children}
		</span>
	)
}
