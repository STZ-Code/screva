'use client'

import { ListIcon, UserIcon } from '@phosphor-icons/react'

export function PublicAuthDropdownTrigger() {
	return (
		<>
			<UserIcon size={32} className="text-gray-50 hidden 2xl:block" />
			<ListIcon size={32} className="text-gray-50 block 2xl:hidden" />
		</>
	)
}
