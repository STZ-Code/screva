'use client'
import { Field, Input } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsSafetyForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content>
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Alterar Senha
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Recomendamos atualizar sua senha periodicamente para manter sua
						conta segura.
					</FormSection.Description>
				</FormSection.Header>

				<Field.Root
					control={control}
					name="current_password"
					className="flex-1"
				>
					<Field.Label className="text-xs text-zinc-300" required>
						Senha atual
					</Field.Label>
					<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
						<Input.Control
							placeholder="Sua senha atual"
							type="password"
							className="placeholder:text-zinc-600 text-zinc-400"
						/>
					</Input.Root>
				</Field.Root>
				<div className="flex gap-3 w-full">
					<Field.Root control={control} name="password" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Nova senha
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Nova senha"
								type="password"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>

					<Field.Root
						control={control}
						name="password_confirmation"
						className="flex-1"
					>
						<Field.Label className="text-xs text-zinc-300">
							Confirmar de senha
						</Field.Label>
						<Input.Root className="py-2 mt-1 bg-neutral-900 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Confirme sua nova senha"
								type="password"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>
				</div>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer className="flex items-center justify-between">
				<FormSection.Description className="text-sm text-zinc-400">
					A nova senha deve conter no mínimo 8 caracteres, incluindo letras e
					números.
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
