'use client'
import { LaptopIcon, MoonStarsIcon, SunIcon } from '@phosphor-icons/react'
import { Field, Radio } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'
import { SettingsFormSection } from './settings-form-section'

export function SettingsPreferencesForm() {
	const { control } = useForm()

	return (
		<SettingsFormSection.Root>
			<SettingsFormSection.Content className="flex-row justify-between">
				<FormSection.Header>
					<FormSection.Title className="text-sm font-semibold text-zinc-100">
						Tema
					</FormSection.Title>
					<FormSection.Description className="text-sm text-zinc-400">
						Personalize o tema do site.
					</FormSection.Description>
				</FormSection.Header>

				<div className="flex gap-3 w-fit h-fit border border-zinc-700 bg-neutral-900 rounded-md p-1">
					<Field.Root control={control} name="password" className="flex-1">
						<Radio.Root>
							<Radio.Control className="flex">
								<Radio.Item
									value="op-1"
									className="text-zinc-500 py-1 px-2 border-none rounded has-[input:checked]:bg-zinc-600 has-[input:checked]:text-zinc-50"
								>
									<Radio.ItemLabel>
										<LaptopIcon size={16} />
									</Radio.ItemLabel>
								</Radio.Item>
								<Radio.Item
									value="op-2"
									className="text-zinc-500 py-1 px-2 border-none rounded has-[input:checked]:bg-zinc-600 has-[input:checked]:text-zinc-50"
								>
									<Radio.ItemLabel>
										<SunIcon size={16} />
									</Radio.ItemLabel>
								</Radio.Item>
								<Radio.Item
									value="op-3"
									className="text-zinc-500 py-1 px-2 border-none rounded has-[input:checked]:bg-zinc-600 has-[input:checked]:text-zinc-50"
								>
									<Radio.ItemLabel>
										<MoonStarsIcon size={16} />
									</Radio.ItemLabel>
								</Radio.Item>
							</Radio.Control>
						</Radio.Root>
					</Field.Root>
				</div>
			</SettingsFormSection.Content>

			<SettingsFormSection.Footer className="flex items-center justify-between">
				<FormSection.Description className="text-sm text-zinc-400">
					A alteração é salva imediatamente.
				</FormSection.Description>
			</SettingsFormSection.Footer>
		</SettingsFormSection.Root>
	)
}
