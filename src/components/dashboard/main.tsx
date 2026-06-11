import { cn } from '@/utils/utils'

export function Main({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<main className={cn('flex flex-col py-12 xl:px-16 px-6', className)}>
			{children}
		</main>
	)
}
