'use client'
import { Dropdown } from '@stz-code/ui'
import { motion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/utils/utils'

type AuthDropdownTriggerProps = ComponentProps<typeof motion.button> & {
	children: ReactNode
	className?: string
}

export function AuthDropdownTrigger({
	children,
	className,
	...props
}: AuthDropdownTriggerProps) {
	return (
		<Dropdown.Trigger>
			<motion.button className={cn(className)} {...props}>
				{children}
			</motion.button>
		</Dropdown.Trigger>
	)
}
