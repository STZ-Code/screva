import { cn } from '@/utils/utils'

export function HeadingRoot({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <div className={cn('flex flex-col gap-2', className)}>{children}</div>
}

export function HeadingTitle({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-4xl font-bebas uppercase tracking-wide text-zinc-100">
			{children}
		</h1>
	)
}

export function HeadingDescription({
	children,
}: {
	children: React.ReactNode
}) {
	return <p className="text-sm text-zinc-500">{children}</p>
}
