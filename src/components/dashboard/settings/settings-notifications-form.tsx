'use client'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsNotificationsForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content>
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Comunicação por Email
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Escolha como e quando deseja receber comunicações sobre suas
						atividades e compras.
					</FormSection.Description>
				</FormSection.Header>

				<div className="flex gap-3 w-full">
					<span>==EM BREVE==</span>
				</div>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer className="flex items-center justify-between">
				<FormSection.Description className="text-sm text-zinc-400">
					Algumas comunicações essenciais, como confirmações de compra, não
					podem ser desativadas.
				</FormSection.Description>
			</SettingsFormSection.Footer>
		</SettingsFormSection.Root>
	)
}
