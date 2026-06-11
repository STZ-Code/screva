'use client'

import { PencilSimpleIcon } from '@phosphor-icons/react'
import { Maps } from '@stz-code/ui/layout'
import Link from 'next/link'
import { Box } from '@/components/box'

export function EventLocation() {
	return (
		<Box className="bg-neutral-900 py-4 gap-4 min-w-96 flex-1">
			<div className="flex items-center justify-between">
				<span className="text-lg font-semibold text-zinc-200">Localização</span>

				<Link
					href={'/'}
					className="px-4 py-1 flex gap-2 items-center border border-neutral-800 rounded-lg hover:bg-zinc-100/5 transition-colors text-sm text-zinc-400"
				>
					<PencilSimpleIcon className="size-4" />
					Editar
				</Link>
			</div>

			<div className="space-y-2 flex flex-col">
				<span className="text-sm text-zinc-300">
					Praça da Igreja, S/N - Centro
				</span>
				<span className="text-sm text-zinc-300">Petrolina - PE, 56304-200</span>
			</div>

			<div className="w-full h-full relative">
				<Maps.Root className="h-full rounded-md">
					<Maps.Marker lat={-9.3892} lng={-40.5087} />
				</Maps.Root>
			</div>
		</Box>
	)
}
