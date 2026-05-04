'use client'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsDeleteAccountForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root className="border-red-500">
			<SettingsFormSection.Content className="flex-row justify-between">
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Deletar conta
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Delete a sua conta da nossa base de dados.
					</FormSection.Description>
				</FormSection.Header>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer className="flex items-center border-red-500 justify-between bg-red-900/30">
				<FormSection.Description className="text-sm text-red-600">
					Ao solicitar a exclusão, todos os seus dados pessoais serão removidos
					de forma permanente.
				</FormSection.Description>

				<button
					type="submit"
					className="text-zinc-50 bg-red-500 rounded px-4 py-2 text-sm font-semibold hover:bg-red-500/80 transition-all"
				>
					Deletar
				</button>
			</SettingsFormSection.Footer>
		</SettingsFormSection.Root>
	)
}
