'use client'

import { ListIcon, UserIcon } from '@phosphor-icons/react'

export function PublicAuthDropdownTrigger() {
	return (
		<>
			<UserIcon size={32} className="text-gray-50 hidden lg:block" />
			<ListIcon size={32} className="text-gray-50 block lg:hidden" />
		</>
	)
}
