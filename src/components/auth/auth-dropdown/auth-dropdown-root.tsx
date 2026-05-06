'use client'
import { Dropdown } from '@stz-code/ui'
import type { ReactNode } from 'react'

type AuthDropdownRootProps = {
	children: ReactNode
}

export function AuthDropdownRoot({ children }: AuthDropdownRootProps) {
	return <Dropdown.Root>{children}</Dropdown.Root>
}
