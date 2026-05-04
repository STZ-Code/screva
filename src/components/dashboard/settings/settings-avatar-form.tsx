'use client'
import { Avatar, Field, FileUpload } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsAvatarForm() {
	const { control } = useForm()
	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content className="justify-between flex-row">
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Foto de Perfil
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Esta imagem será exibida em sua conta e em interações dentro da
						plataforma.
						<br />
						Clique no avatar ao lado para fazer o upload da sua foto.
					</FormSection.Description>
				</FormSection.Header>

				<Field.Root name="archive" control={control}>
					<FileUpload.Root
						accept={{
							'image/*': ['.png', '.jpg'],
						}}
						draggable
					>
						<FileUpload.Control className="text-zinc-100 w-24 h-24 rounded-full">
							GG
						</FileUpload.Control>
					</FileUpload.Root>
					<Field.Error />
				</Field.Root>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer>
				<FormSection.Description className="text-sm text-zinc-400">
					Foto de perfil é opcional mas é recomendado para melhor identificação.
				</FormSection.Description>
			</SettingsFormSection.Footer>
		</SettingsFormSection.Root>
	)
}
