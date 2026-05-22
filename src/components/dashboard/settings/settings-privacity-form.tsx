'use client'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsPrivacityForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content className="flex-row justify-between">
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Dados e Privacidade
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Faça download dos seus dados pessoais.
					</FormSection.Description>
				</FormSection.Header>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer className="flex items-center justify-end">
				<button
					type="submit"
					className="text-zinc-900 bg-zinc-50 rounded px-4 py-2 text-sm font-semibold hover:bg-zinc-50/80 transition-all"
				>
					Fazer download
				</button>
			</SettingsFormSection.Footer>
		</SettingsFormSection.Root>
	)
}
