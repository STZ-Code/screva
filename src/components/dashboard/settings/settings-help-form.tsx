'use client'
import { Field, Input } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsHelpForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content>
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Informações de Ajuda
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Essas informações serão exibidas nas páginas de evento como contato
						para ajuda.
					</FormSection.Description>
				</FormSection.Header>

				<div className="flex gap-3 w-full lg:flex-row flex-col">
					<Field.Root control={control} name="instagram" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Instagram
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="@screva"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>

					<Field.Root control={control} name="whatsapp" className="flex-1">
						<Field.Label className="text-xs text-zinc-300">
							Número do Whatsapp
						</Field.Label>
						<Input.Root className="py-2 mt-1 bg-neutral-900 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="(99) 9 9999-9999"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>
				</div>

				<Field.Root control={control} name="email" className="flex-1">
					<Field.Label className="text-xs text-zinc-300" required>
						Email
					</Field.Label>
					<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
						<Input.Control
							placeholder="Email contato de ajuda"
							type="text"
							className="placeholder:text-zinc-600 text-zinc-400"
						/>
					</Input.Root>
				</Field.Root>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer className="flex items-center justify-end">
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
