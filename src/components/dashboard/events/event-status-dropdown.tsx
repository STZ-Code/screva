'use client'

import { CaretDownIcon } from '@phosphor-icons/react'
import { Dropdown } from '@stz-code/ui/dropdown'

export function EventStatusDropdown() {
	return (
		<Dropdown.Root>
			<Dropdown.Trigger className="cursor-pointer">
				<div className="flex max-w-60 w-fit items-center gap-2 border px-8 border-zinc-700 h-11 rounded text-sm font-medium outline-none">
					<span className="text-zinc-200 truncate">Rascunho</span>

					<CaretDownIcon
						className="ml-auto size-4 text-zinc-200"
						weight="bold"
					/>
				</div>
			</Dropdown.Trigger>

			<Dropdown.Content
				align="end"
				className="w-96 border-zinc-800 bg-neutral-900 divide-y divide-neutral-800"
			>
				<Dropdown.Item className="cursor-pointer flex items-start flex-col gap-2 py-2 px-2 hover:bg-zinc-800 transition-colors">
					<span className="text-md text-zinc-300">Rascunho</span>

					<span className="text-sm text-zinc-400">
						O evento permanece oculto na plataforma, permitindo edições sem
						impacto para os participantes.
					</span>
				</Dropdown.Item>
				<Dropdown.Item className="cursor-pointer flex items-start flex-col gap-2 py-2 px-2 hover:bg-zinc-800 transition-colors">
					<span className="text-md text-zinc-300">Publicado</span>

					<span className="text-sm text-zinc-400">
						O evento está visível na plataforma e todas as alterações serão
						exibidas aos participantes.
					</span>
				</Dropdown.Item>
				<Dropdown.Item className="cursor-pointer flex items-start flex-col gap-2 py-2 px-2 hover:bg-zinc-800 transition-colors">
					<span className="text-md text-zinc-300">Suspenso</span>

					<span className="text-sm text-zinc-400">
						As inscrições estão temporariamente indisponíveis. O evento continua
						visível na plataforma.
					</span>
				</Dropdown.Item>
				<Dropdown.Item className="cursor-pointer flex items-start flex-col gap-2 py-2 px-2 hover:bg-zinc-800 transition-colors">
					<span className="text-md text-zinc-300">Cancelado</span>

					<span className="text-sm text-zinc-400">
						O evento foi cancelado e não poderá receber novas inscrições ou
						participações.
					</span>
				</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}
