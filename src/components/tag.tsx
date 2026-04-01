import type { ReactNode } from 'react'
import { cn } from '@/utils/utils'

type TagProps = {
	className?: string
	children: ReactNode
}

export function Tag({ children, className }: TagProps) {
	return (
		<div className={cn('px-2 py-[2px] rounded', className)}>{children}</div>
	)
}
