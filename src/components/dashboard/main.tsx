import { cn } from '@/utils/utils'

export function Main({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<main className={cn('flex flex-col py-12 px-16 h-full', className)}>
			{children}
		</main>
	)
}
