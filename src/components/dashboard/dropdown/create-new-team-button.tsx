'use client'

import { PlusCircleIcon } from '@phosphor-icons/react'
import { Sheet } from '@stz-code/ui'

export function CreateNewTeamButton() {
	return (
		<Sheet.Trigger className="outline-none px-2 cursor-pointer py-2 w-full text-sm hover:bg-zinc-600 transition-colors normal-case font-semibold flex gap-2 line-clamp-1">
			<PlusCircleIcon className="size-5 mr-2" />
			Criar nova equipe
		</Sheet.Trigger>
	)
}
