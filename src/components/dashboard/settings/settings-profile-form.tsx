'use client'
import { Field, Input } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsProfileForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content>
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Informações Pessoais
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Atualize seu nome e telefone utilizados para identificação e
						comunicação na plataforma.
					</FormSection.Description>
				</FormSection.Header>

				<div className="flex gap-3 w-full">
					<Field.Root control={control} name="name" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Nome completo
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Seu nome completo"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>

					<Field.Root control={control} name="phone" className="flex-1">
						<Field.Label className="text-xs text-zinc-300">
							Telefone
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
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer className="flex items-center justify-between">
				<FormSection.Description className="text-sm text-zinc-400">
					O nome deve corresponder ao documento utilizado na compra. O telefone
					deve incluir DDD.
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
