'use client'

import { CaretUpDownIcon } from '@phosphor-icons/react'
import type { IconProps } from 'phosphor-react'
import { cn } from '@/utils/utils'

export function CaretUpDown({ className, ...props }: IconProps) {
	return <CaretUpDownIcon {...props} className={cn(className)} />
}
