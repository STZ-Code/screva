'use client'

import { Field, Input, MapPicker } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { maskProvider } from '@/utils/mask'
import { SettingsFormSection } from './settings-form-section'

export function SettingsEventLocationForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content>
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Localização do evento
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Atualize o endereço completo do local do evento.
					</FormSection.Description>
				</FormSection.Header>

				<div className="flex 2xl:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="name" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Logradouro
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Rua do evento"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>
				</div>
				<div className="flex 2xl:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="name" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Número
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Nº"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>

					<Field.Root control={control} name="complement" className="flex-1">
						<Field.Label className="text-xs text-zinc-300">
							Complemento
						</Field.Label>
						<Input.Root className="py-2 mt-1 bg-neutral-900 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Complemento do endereço"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>
				</div>
				<div className="flex 2xl:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="city" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Cidade
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Seu nome completo"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>

					<Field.Root control={control} name="uf" className="flex-1">
						<Field.Label className="text-xs text-zinc-300">Estado</Field.Label>
						<Input.Root className="py-2 mt-1 bg-neutral-900 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="PE"
								maskProvider={maskProvider}
								mask="UF"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>

					<Field.Root control={control} name="zipcode" className="flex-1">
						<Field.Label className="text-xs text-zinc-300">CEP</Field.Label>
						<Input.Root className="py-2 mt-1 bg-neutral-900 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="00000-000"
								type="text"
								maskProvider={maskProvider}
								mask="ZIPCODE"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
					</Field.Root>
				</div>

				<div className="flex 2xl:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="map_location" className="flex-1">
						<Field.Label className="text-xs text-zinc-300" required>
							Mapa
						</Field.Label>
						<MapPicker.Root className="rounded">
							<MapPicker.Control>
								<MapPicker.Marker />
							</MapPicker.Control>
							<MapPicker.Tools
								position="bottom-right"
								showZoom
								showCompass
								showLocate
								showFullscreen
							/>
						</MapPicker.Root>
					</Field.Root>
				</div>

				<div className="flex 2xl:flex-row flex-col gap-3 w-full">
					<Field.Root control={control} name="extra_info" className="flex-1">
						<Field.Label className="text-xs text-zinc-300">
							Informação extra
						</Field.Label>
						<Input.Root className="py-2 bg-neutral-900 mt-1 flex-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Informação complementar do endereço"
								type="text"
								className="placeholder:text-zinc-600 text-zinc-400"
							/>
						</Input.Root>
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
