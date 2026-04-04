'use client'

import { PlusIcon } from '@phosphor-icons/react'
import { Field, Input, Sheet, Textarea } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { FormSection } from '@/components/form-section'

export function CreateEventSheet() {
	const { control } = useForm()

	return (
		<Sheet.Root>
			<Sheet.Trigger asChild>
				<Button
					type="submit"
					className="py-2 outline-none h-fit px-6 w-fit normal-case font-semibold flex gap-2"
				>
					<PlusIcon size={20} weight="bold" />
					Criar evento
				</Button>
			</Sheet.Trigger>
			<Sheet.Content className="w-2/5 bg-neutral-900 border-cyan-600 gap-0">
				<Sheet.Header className="border-b border-b-neutral-700">
					<Sheet.Title>Criar novo evento</Sheet.Title>
				</Sheet.Header>

				<div className="flex flex-col overflow-auto">
					<FormSection.Root>
						<FormSection.Header>
							<FormSection.Title>Dados Principais do Evento</FormSection.Title>
							<FormSection.Description>
								Defina as informações essenciais que identificam e estruturam o
								seu evento.
							</FormSection.Description>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="email">
								<Field.Label className="text-xs text-zinc-300" required>
									Nome
								</Field.Label>
								<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="Nome do evento"
										type="text"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>

							<Field.Root control={control} name="email">
								<Field.Label className="text-xs text-zinc-300">
									Descrição
								</Field.Label>
								<Textarea.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Textarea.Control
										placeholder="Descrição geral do evento"
										className="placeholder:text-zinc-600 text-zinc-400 h-48"
									/>
								</Textarea.Root>
							</Field.Root>

							<Field.Root control={control} name="email">
								<Field.Label className="text-xs text-zinc-300">
									Data do evento
								</Field.Label>
								<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="01/01/2026"
										type="date"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>

							<Field.Root control={control} name="email">
								<Field.Label className="text-xs text-zinc-300">
									Data de encerramento das inscrições
								</Field.Label>
								<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="01/01/2026"
										type="date"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>

							<Field.Root control={control} name="email">
								<Field.Label className="text-xs text-zinc-300">
									Quantidade máxima de inscrições
								</Field.Label>
								<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="999"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>
						</FormSection.Content>
					</FormSection.Root>

					<FormSection.Root>
						<FormSection.Header>
							<FormSection.Title>Responsável pelo Evento</FormSection.Title>
							<FormSection.Description>
								Selecione um usuário já cadastrado ou registre um novo
								responsável para administrar este evento.
							</FormSection.Description>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="email">
								<Field.Label className="text-xs text-zinc-300">
									Organizador do evento
								</Field.Label>
								<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="Busque por nome ou e-mail"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>
						</FormSection.Content>
					</FormSection.Root>

					<FormSection.Root>
						<FormSection.Header>
							<FormSection.Title>Configuração Financeira</FormSection.Title>
							<FormSection.Description>
								Configure a taxa aplicada às inscrições e defina o modelo de
								cobrança.
							</FormSection.Description>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="email">
								<Field.Label className="text-xs text-zinc-300">
									Taxa por inscrição
								</Field.Label>
								<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="Busque por nome ou e-mail"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>
						</FormSection.Content>
					</FormSection.Root>

					<FormSection.Root>
						<FormSection.Header>
							<FormSection.Title>Endereço do evento</FormSection.Title>
							<FormSection.Description>
								Informe o local da realização do evento.
							</FormSection.Description>
						</FormSection.Header>

						<FormSection.Content>
							<div className="flex gap-2">
								<Field.Root control={control} name="email">
									<Field.Label className="text-xs text-zinc-300">
										Rua
									</Field.Label>
									<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
										<Input.Control
											placeholder="Rua do evento"
											className="placeholder:text-zinc-600 text-zinc-400"
										/>
									</Input.Root>
								</Field.Root>
								<Field.Root control={control} name="email" className="w-1/3">
									<Field.Label className="text-xs text-zinc-300">
										Nª
									</Field.Label>
									<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
										<Input.Control
											placeholder="1234"
											className="placeholder:text-zinc-600 text-zinc-400"
										/>
									</Input.Root>
								</Field.Root>
							</div>

							<div className="flex gap-2">
								<Field.Root control={control} name="email">
									<Field.Label className="text-xs text-zinc-300">
										Cidade
									</Field.Label>
									<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
										<Input.Control
											placeholder="Cidade do evento"
											className="placeholder:text-zinc-600 text-zinc-400"
										/>
									</Input.Root>
								</Field.Root>
								<Field.Root control={control} name="email" className="w-1/5">
									<Field.Label className="text-xs text-zinc-300">
										UF
									</Field.Label>
									<Input.Root className="py-2 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
										<Input.Control
											placeholder="PE"
											className="placeholder:text-zinc-600 text-zinc-400"
										/>
									</Input.Root>
								</Field.Root>
							</div>

							<Field.Root control={control} name="email">
								<Field.Label className="text-xs text-zinc-300">
									Mapa
								</Field.Label>
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
