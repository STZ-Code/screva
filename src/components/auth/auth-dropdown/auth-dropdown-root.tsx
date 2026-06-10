'use client'
import { Dropdown } from '@stz-code/ui/layout'
import type { ReactNode } from 'react'

type AuthDropdownRootProps = {
	children: ReactNode
}

export function AuthDropdownRoot({ children }: AuthDropdownRootProps) {
	return <Dropdown.Root>{children}</Dropdown.Root>
}
