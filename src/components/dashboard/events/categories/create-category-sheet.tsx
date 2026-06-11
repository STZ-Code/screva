'use client'

import { PlusIcon } from '@phosphor-icons/react'
import { Field, Input, Sheet } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { FormSection } from '@/components/form-section'

export function CreateCategorySheet() {
	const { control } = useForm()
	return (
		<Sheet.Root>
			<Sheet.Trigger asChild>
				<Button
					type="submit"
					className="py-2 outline-none h-fit px-6 xl:w-72 w-full normal-case font-semibold flex gap-2"
				>
					<PlusIcon size={20} weight="bold" />
					Adicionar categoria
				</Button>
			</Sheet.Trigger>

			<Sheet.Content className="w-2/5 bg-neutral-900 border-cyan-600 gap-0">
				<Sheet.Header className="border-b border-b-neutral-700">
					<Sheet.Title>Criar categoria</Sheet.Title>
				</Sheet.Header>

				<div className="flex flex-col overflow-auto">
					<FormSection.Root>
						<FormSection.Header>
							<FormSection.Title>Dados da categoria</FormSection.Title>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="name">
								<Field.Label className="text-xs text-zinc-300" required>
									Título da categoria
								</Field.Label>
								<Input.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="Nome do evento"
										type="text"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>
						</FormSection.Content>
					</FormSection.Root>
				</div>

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
