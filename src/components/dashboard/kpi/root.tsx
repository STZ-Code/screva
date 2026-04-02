export function KpiRoot({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-4 border border-zinc-800 rounded-2xl p-4 bg-neutral-900 shadow-md">
			{children}
		</div>
	)
}

export function KpiValue({ children }: { children: React.ReactNode }) {
	return (
		<span className="text-4xl font-bebas uppercase tracking-wide text-zinc-100">
			{children}
		</span>
	)
}

export function KpiLabel({ children }: { children: React.ReactNode }) {
	return (
		<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
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
