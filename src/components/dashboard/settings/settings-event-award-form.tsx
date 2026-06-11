'use client'

import { PlusIcon } from '@phosphor-icons/react'
import { Field, FileUpload, Textarea } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsEventAwardForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content>
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Premiação do evento
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Atualize a imagem e descrição da premiação do evento.
					</FormSection.Description>
				</FormSection.Header>

				<div className="flex xl:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="description" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Descrição da premiação
						</Field.Label>
						<Textarea.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Textarea.Control
								placeholder="Descrição da premiação"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Textarea.Root>
					</Field.Root>
				</div>

				<div className="flex xl:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="award_image" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Foto da premiação
						</Field.Label>
						<Field.Root name="archive" control={control}>
							<FileUpload.Root
								accept={{
									'image/*': ['.png', '.jpg'],
								}}
								draggable
							>
								<FileUpload.Control className="bg-neutral-900 border-dashed w-full h-72 rounded cursor-pointer hover:opacity-80 transition-opacity">
									<div className="flex flex-col items-center gap-2">
										<div className="p-3 bg-zinc-800 rounded-full">
											<PlusIcon className="text-zinc-400 size-10" />
										</div>

										<span className="text-zinc-400">Adicionar foto</span>

										<span className="text-zinc-600 text-sm">
											PNG ou JPG. Máx. 5MB
										</span>
									</div>
								</FileUpload.Control>
							</FileUpload.Root>
							<Field.Error />
						</Field.Root>
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
