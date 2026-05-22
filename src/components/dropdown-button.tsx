import { Dropdown } from '@stz-code/ui'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/utils'

type DropdownButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode
	className?: string
}

export function DropdownButton({
	children,
	className,
	...props
}: DropdownButtonProps) {
	return (
		<Dropdown.Item className="p-0 hover:outline-none">
			<button
				type="button"
				{...props}
				className={cn(
					'text-zinc-100 flex gap-2 items-center w-full p-2 rounded-sm transition-colors hover:bg-zinc-600 font-medium text-lg',
					className,
				)}
			>
				{children}
			</button>
		</Dropdown.Item>
	)
}
