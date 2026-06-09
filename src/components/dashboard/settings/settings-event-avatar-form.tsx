'use client'
import { Field, FileUpload } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsEventAvatarForm() {
	const { control } = useForm()
	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content className="justify-between flex-row">
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Foto de Perfil do evento
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Esta imagem será exibida na página evento e no card do evento na
						página inicial.
						<br />
						Clique no retângulo ao lado para fazer o upload da sua foto.
					</FormSection.Description>
				</FormSection.Header>

				<Field.Root name="archive" control={control}>
					<FileUpload.Root
						accept={{
							'image/*': ['.png', '.jpg'],
						}}
						draggable
					>
						<FileUpload.Control className="text-zinc-100 w-24 h-24 rounded cursor-pointer hover:opacity-80 transition-opacity">
							GG
						</FileUpload.Control>
					</FileUpload.Root>
					<Field.Error />
				</Field.Root>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer>
				<FormSection.Description className="text-sm text-zinc-400">
					Confira se todas as informações estão corretas.
				</FormSection.Description>
			</SettingsFormSection.Footer>
		</SettingsFormSection.Root>
	)
}
