'use client'

import { Field, Input, Textarea } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { maskProvider } from '@/utils/mask'
import { SettingsFormSection } from './settings-form-section'

export function SettingsEventBasicInfoForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content>
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Informações básicas do evento
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Atualize as informações principais do evento.
					</FormSection.Description>
				</FormSection.Header>

				<div className="flex lg:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="name" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Nome do evento
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Nome completo do evento que ficará exposto na página do evento e na página inicial"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>
				</div>

				<div className="flex lg:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="description" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Descrição do evento
						</Field.Label>
						<Textarea.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Textarea.Control
								placeholder="Descrição que ficará exposta na página do evento"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Textarea.Root>
					</Field.Root>
				</div>

				<div className="flex lg:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="date" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Data do evento
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="00/00/0000"
								maskProvider={maskProvider}
								mask="DATE"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>

					<Field.Root control={control} name="phone" className="flex-1">
						<Field.Label className="text-xs text-zinc-300">
							Horário do evento
						</Field.Label>
						<Input.Root className="py-2 mt-1 bg-neutral-900 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="00:00"
								maskProvider={maskProvider}
								mask="HOUR"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>
				</div>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer className="flex items-center justify-between">
				<FormSection.Description className="text-sm text-zinc-400">
					Confira se todas as informações estão corretas.
				</FormSection.Description>

				<button
					type="submit"
					className="text-zinc-900 bg-zinc-50 rounded px-4 py-2 text-sm font-semibold hover:bg-zinc-50/80 transition-all"
				>
					Salvar
				</button>
			</SettingsFormSection.Footer>
		</SettingsFormSection.Root>
	)
}
