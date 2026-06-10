'use client'

import { LineVerticalIcon } from '@phosphor-icons/react'
import type { IconProps } from 'phosphor-react'
import { cn } from '@/utils/utils'

export function LineVertical({ className, ...props }: IconProps) {
	return <LineVerticalIcon {...props} className={cn(className)} />
}
