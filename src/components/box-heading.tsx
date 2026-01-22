import { cn } from '@/utils/utils'

type BoxHeadingProps = {
	children: string
	className?: string
}

export function BoxHeading({ children, className }: BoxHeadingProps) {
	return (
		<h3
			className={cn(
				'text-2xl font-bebas uppercase tracking-wide text-zinc-100',
				className,
			)}
		>
			{children}
		</h3>
	)
}
