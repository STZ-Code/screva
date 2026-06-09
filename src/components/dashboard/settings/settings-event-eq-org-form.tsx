'use client'

import { PencilSimpleIcon } from '@phosphor-icons/react'
import { Avatar } from '@stz-code/ui'
import exampleImg from '@/assets/examples/picos.jpg'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsEventEqOrgForm() {
	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content>
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Cronometragem e Organização
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Atualize as equipes responsáveis pela cronometragem e organização do
						evento.
					</FormSection.Description>
				</FormSection.Header>

				<div className="flex flex-col gap-4">
					<span className="text-zinc-100 font-semibold">
						Organização do evento
					</span>

					<div className="bg-neutral-900 w-full rounded border border-zinc-700 p-4 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Avatar.Root className="size-16 rounded">
								<Avatar.Image src={exampleImg.src} />
								<Avatar.Fallback>Gil Bala</Avatar.Fallback>
							</Avatar.Root>

							<span className="font-medium text-lg">Gil Bala</span>
						</div>

						<PencilSimpleIcon className="size-6 text-zinc-200" />
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<span className="text-zinc-100 font-semibold">
						Equipe de Cronometragem
					</span>

					<div className="bg-neutral-900 w-full rounded border border-zinc-700 p-4 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Avatar.Root className="size-16 rounded">
								<Avatar.Image src={exampleImg.src} />
								<Avatar.Fallback>Cronosvale</Avatar.Fallback>
							</Avatar.Root>

							<span className="font-medium text-lg">Cronosvale</span>
						</div>

						<PencilSimpleIcon className="size-6 text-zinc-200" />
					</div>
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
