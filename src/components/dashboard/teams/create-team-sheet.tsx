'use client'

import { Field, Input, Radio, Sheet, Textarea } from '@stz-code/ui'
import type { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { FormSection } from '@/components/form-section'

type CreateTeamSheetProps = {
	children: ReactNode
}

export function CreateTeamSheet({ children }: CreateTeamSheetProps) {
	const { control } = useForm()

	return (
		<Sheet.Root>
			{children}

			<Sheet.Content className="lg:w-2/5 w-full bg-neutral-900 lg:border border-none border-cyan-600 gap-0">
				<Sheet.Header className="border-b border-b-neutral-700">
					<Sheet.Title>Criar nova equipe</Sheet.Title>
				</Sheet.Header>

				<div className="flex flex-col overflow-auto">
					<FormSection.Root className="lg:flex-row flex-col">
						<FormSection.Header>
							<FormSection.Title>Dados Principais da equipe</FormSection.Title>
							<FormSection.Description>
								Informações essenciais para cadastrar a equipe.
							</FormSection.Description>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="name">
								<Field.Label className="text-xs text-zinc-300" required>
									Nome da equipe
								</Field.Label>
								<Input.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="Nome do evento"
										type="text"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>

							<Field.Root control={control} name="description">
								<Field.Label className="text-xs text-zinc-300">
									Descrição
								</Field.Label>
								<Textarea.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Textarea.Control
										placeholder="Descrição geral do evento"
										className="placeholder:text-zinc-600 text-zinc-400 h-48"
									/>
								</Textarea.Root>
							</Field.Root>
						</FormSection.Content>
					</FormSection.Root>

					<FormSection.Root className="lg:flex-row flex-col">
						<FormSection.Header>
							<FormSection.Title>Tipo de equipe</FormSection.Title>
							<FormSection.Description>
								É possivel cadastrar equipes para organização do evento
								(Organizadores/Cronometragem) e equipes de participantes dos
								eventos.
							</FormSection.Description>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="team_type">
								<Field.Label className="text-xs text-zinc-300">
									Tipo de equipe
								</Field.Label>
								<Radio.Root>
									<Radio.Control className="flex w-full mt-1">
										<Radio.Item
											value="organizer"
											className="has-[input:checked]:border-cyan-600 has-[input:checked]:text-cyan-200 has-[input:checked]:bg-cyan-800 flex-1 py-2 rounded-r-none bg-zinc-800 border-neutral-700 text-zinc-400 text-sm items-center justify-center"
										>
											Organização
										</Radio.Item>
										<Radio.Item
											value="runner"
											className="has-[input:checked]:border-cyan-600 has-[input:checked]:text-cyan-200 has-[input:checked]:bg-cyan-800 flex-1 py-2 rounded-l-none rounded-r-none bg-zinc-800 border-neutral-700 text-zinc-400 text-sm items-center justify-center"
										>
											Corrida
										</Radio.Item>
										<Radio.Item
											value="crono"
											className="has-[input:checked]:border-cyan-600 has-[input:checked]:text-cyan-200 has-[input:checked]:bg-cyan-800 flex-1 py-2 rounded-l-none bg-zinc-800 border-neutral-700 text-zinc-400 text-sm items-center justify-center"
										>
											Cronometragem
										</Radio.Item>
									</Radio.Control>
								</Radio.Root>
							</Field.Root>
						</FormSection.Content>
					</FormSection.Root>
				</div>

				<Sheet.Footer className="border-t border-t-neutral-700 flex-row justify-end">
					<Sheet.Trigger asChild>
						<button
							type="button"
							className="text-xs text-zinc-200 border border-zinc-700 bg-zinc-800 rounded w-fit px-2 py-1 hover:bg-zinc-700 transition-colors"
						>
							Cancelar
						</button>
					</Sheet.Trigger>
					<button
						type="submit"
						className="text-xs text-zinc-200 border border-cyan-700 bg-cyan-900 rounded w-fit px-2 py-1 hover:bg-cyan-700 transition-colors"
					>
						Criar
					</button>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	)
}
