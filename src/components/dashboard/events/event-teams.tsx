'use client'
import { PencilSimpleIcon } from '@phosphor-icons/react'
import { Avatar } from '@stz-code/ui'
import Link from 'next/link'
import crono from '@/assets/examples/organizer.png'
import exampleImg from '@/assets/examples/picos.jpg'
import { Box } from '@/components/box'

export function EventTeams() {
	return (
		<Box className="bg-neutral-900 py-4 gap-4 w-96">
			<div className="flex items-center justify-between">
				<span className="text-lg font-semibold text-zinc-200">
					Organização e cronometragem
				</span>

				<Link
					href={'/'}
					className="px-4 py-1 flex gap-2 items-center border border-neutral-800 rounded-lg hover:bg-zinc-100/5 transition-colors text-sm text-zinc-400"
				>
					<PencilSimpleIcon className="size-4" />
					Editar
				</Link>
			</div>

			<div className="space-y-6">
				<div className="flex flex-col gap-3">
					<span className="font-medium text-sm text-zinc-300">Organizador</span>

					<div className="flex items-center gap-4">
						<Avatar.Root className="size-16 rounded">
							<Avatar.Image src={exampleImg.src} />
							<Avatar.Fallback>Pro Race</Avatar.Fallback>
						</Avatar.Root>

						<span className="text-zinc-100 font-bold text-xl">
							Picos Race Organização
						</span>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<span className="font-medium text-sm text-zinc-300">
						Cronometragem
					</span>

					<div className="flex items-center gap-4">
						<Avatar.Root className="size-16 rounded">
							<Avatar.Image src={crono.src} />
							<Avatar.Fallback>Cronosvale</Avatar.Fallback>
						</Avatar.Root>

						<span className="text-zinc-100 font-bold text-xl">Cronosvale</span>
					</div>
				</div>
			</div>
		</Box>
	)
}
