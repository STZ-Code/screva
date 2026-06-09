'use client'

import { PlusIcon } from '@phosphor-icons/react'
import { Sheet } from '@stz-code/ui'
import { Button } from '@/components/button'

export function CreatePriceSheet() {
	return (
		<Sheet.Root>
			<Sheet.Trigger asChild>
				<Button
					type="submit"
					className="py-2 outline-none h-fit rounded px-6 w-full normal-case font-semibold flex gap-2"
				>
					<PlusIcon size={20} weight="bold" />
					Criar Kit
				</Button>
			</Sheet.Trigger>

			<Sheet.Content className="w-2/5 bg-neutral-900 border-cyan-600 gap-0">
				<Sheet.Header className="border-b border-b-neutral-700">
					<Sheet.Title>Criar Kit</Sheet.Title>
				</Sheet.Header>

				<Sheet.Footer className="border-t border-t-neutral-700 flex-row justify-end">
					<Sheet.Trigger asChild>
						<button
							type="button"
							className="text-xs text-zinc-200 border border-zinc-700 bg-zinc-800 rounded w-fit px-2 py-1 hover:bg-zinc-700 transition-colors"
						>
							Cancelar
						</button>
					</Sheet.Trigger>
					<button
						type="submit"
						className="text-xs text-zinc-200 border border-cyan-700 bg-cyan-900 rounded w-fit px-2 py-1 hover:bg-cyan-700 transition-colors"
					>
						Criar
					</button>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	)
}
