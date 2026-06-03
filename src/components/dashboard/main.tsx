import { cn } from '@/utils/utils'

export function Main({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<main className={cn('flex flex-col py-12 lg:px-16 px-8', className)}>
			{children}
		</main>
	)
}
