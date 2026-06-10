'use client'

import { PlusIcon } from '@phosphor-icons/react'
import {
	Avatar,
	Combobox,
	Field,
	Input,
	MapPicker,
	Radio,
	Sheet,
	Textarea,
} from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { FormSection } from '@/components/form-section'

type Organizer = {
	id: string
	name: string
	email: string
}

export function CreateEventSheet() {
	const { control } = useForm()

	const organizers: Organizer[] = [
		{
			id: 'gab-gar',
			name: 'Gabriel Garcez',
			email: 'ggarcez613@gmail.com',
		},
		{
			id: 'vini-lem',
			name: 'Vinicius Lemos',
			email: 'viniciuslemos@gmail.com',
		},
		{
			id: 'alexandre-nasc',
			name: 'Alexandre Nascimento',
			email: 'alexandremn7728@gmail.com',
		},
		{
			id: 'joel-oliv',
			name: 'Joel Oliveira',
			email: 'joeloliveira@gmail.com',
		},
		{
			id: 'lucas-alb',
			name: 'Lucas Alberto',
			email: 'lucasalberto@gmail.com',
		},
	]

	return (
		<Sheet.Root>
			<Sheet.Trigger asChild>
				<Button
					type="submit"
					className="py-2 outline-none h-fit lg:w-56 w-full px-6 normal-case font-semibold flex gap-2"
				>
					<PlusIcon size={20} weight="bold" />
					Criar evento
				</Button>
			</Sheet.Trigger>
			<Sheet.Content className="lg:w-2/5 w-full bg-neutral-900 lg:border-l border-l-none border-cyan-600 gap-0">
				<Sheet.Header className="border-b border-b-neutral-700">
					<Sheet.Title>Criar novo evento</Sheet.Title>
				</Sheet.Header>

				<div className="flex flex-col overflow-auto">
					<FormSection.Root className="lg:flex-row flex-col">
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
								<Input.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
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
								<Textarea.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
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
								<Input.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
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
								<Input.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
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
								<Input.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="999"
										className="placeholder:text-zinc-600 text-zinc-400"
									/>
								</Input.Root>
							</Field.Root>
						</FormSection.Content>
					</FormSection.Root>

					<FormSection.Root className="lg:flex-row flex-col">
						<FormSection.Header>
							<FormSection.Title>Organização do evento</FormSection.Title>
							<FormSection.Description>
								Selecione a equipe já cadastrada ou registre uma nova equipe
								para administrar esse evento.
							</FormSection.Description>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="organizer">
								<Field.Label className="text-xs text-zinc-300">
									Organizador do evento
								</Field.Label>

								<Combobox.Root
									options={organizers}
									getValue={(item) => item.id}
									getLabel={(item) => item.name}
								>
									<Combobox.Control
										placeholder="Busque por nome ou e-mail"
										className="focus-within:ring-cyan-500 border-neutral-700 pt-0 h-fit focus-within:ring-2"
										inputClassName="placeholder:text-zinc-500 mt-1 mb-1 py-0"
									/>

									<Combobox.Portal
										className="bg-neutral-900 border border-neutral-700 rounded-md"
										sideOffset={8}
									>
										<Combobox.Fallback>
											Nenhum usuário encontrado
										</Combobox.Fallback>

										<Combobox.List>
											{(item: Organizer) => (
												<Combobox.Item
													key={item.id}
													value={item}
													className="flex gap-3 pr-2 border-b border-b-neutral-700 py-2 hover:bg-neutral-800 transtion-colors"
												>
													<Avatar.Root className="bg-zinc-800 size-10 rounded-md">
														<Avatar.Image src="https://github.com/garcez17.png" />
														<Avatar.Fallback className="text-zinc-100">
															Teste Fallback
														</Avatar.Fallback>
													</Avatar.Root>

													<div className="flex flex-col">
														<span className="text-zinc-100 text-lg line-clamp-1">
															{item.name}
														</span>
														<span className="text-xs font-semibold text-zinc-400">
															{item.email}
														</span>
													</div>
												</Combobox.Item>
											)}
										</Combobox.List>

										<Combobox.Action className="hover:bg-neutral-800 transtion-colors cursor-pointer">
											<PlusIcon
												size={20}
												weight="bold"
												className="text-cyan-500"
											/>
											<span className="font-semibold text-sm">
												Adicionar nova equipe
											</span>
										</Combobox.Action>
									</Combobox.Portal>
								</Combobox.Root>
							</Field.Root>
							<Field.Root control={control} name="cronos">
								<Field.Label className="text-xs text-zinc-300">
									Cronometragem do evento
								</Field.Label>

								<Combobox.Root
									options={organizers}
									getValue={(item) => item.id}
									getLabel={(item) => item.name}
								>
									<Combobox.Control
										placeholder="Busque por nome ou e-mail"
										className="focus-within:ring-cyan-500 border-neutral-700 pt-0 h-fit focus-within:ring-2"
										inputClassName="placeholder:text-zinc-500 mt-1 mb-1 py-0"
									/>

									<Combobox.Portal
										className="bg-neutral-900 border border-neutral-700 rounded-md"
										sideOffset={8}
									>
										<Combobox.Fallback>
											Nenhum usuário encontrado
										</Combobox.Fallback>

										<Combobox.List>
											{(item: Organizer) => (
												<Combobox.Item
													key={item.id}
													value={item}
													className="flex gap-3 pr-2 border-b border-b-neutral-700 py-2 hover:bg-neutral-800 transtion-colors"
												>
													<Avatar.Root className="bg-zinc-800 size-10 rounded-md">
														<Avatar.Image src="https://github.com/garcez17.png" />
														<Avatar.Fallback className="text-zinc-100">
															Teste Fallback
														</Avatar.Fallback>
													</Avatar.Root>

													<div className="flex flex-col">
														<span className="text-zinc-100 text-lg line-clamp-1">
															{item.name}
														</span>
														<span className="text-xs font-semibold text-zinc-400">
															{item.email}
														</span>
													</div>
												</Combobox.Item>
											)}
										</Combobox.List>

										<Combobox.Action className="hover:bg-neutral-800 transtion-colors cursor-pointer">
											<PlusIcon
												size={20}
												weight="bold"
												className="text-cyan-500"
											/>
											<span className="font-semibold text-sm">
												Adicionar nova equipe
											</span>
										</Combobox.Action>
									</Combobox.Portal>
								</Combobox.Root>
							</Field.Root>
						</FormSection.Content>
					</FormSection.Root>

					<FormSection.Root className="lg:flex-row flex-col">
						<FormSection.Header>
							<FormSection.Title>Configuração Financeira</FormSection.Title>
							<FormSection.Description>
								Configure a taxa aplicada às inscrições e defina o modelo de
								cobrança.
							</FormSection.Description>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="taxes">
								<Field.Label className="text-xs text-zinc-300">
									Taxa por inscrição
								</Field.Label>
								<Radio.Root>
									<Radio.Control className="flex w-full mt-1">
										<Radio.Item
											value="percentage"
											className="has-[input:checked]:border-cyan-600 has-[input:checked]:text-cyan-200 has-[input:checked]:bg-cyan-800 flex-1 py-2 rounded-r-none bg-zinc-800 border-neutral-700 text-zinc-400 text-sm items-center justify-center"
										>
											Percentual (%)
										</Radio.Item>
										<Radio.Item
											value="fixed"
											className="has-[input:checked]:border-cyan-600 has-[input:checked]:text-cyan-200 has-[input:checked]:bg-cyan-800 flex-1 py-2 rounded-l-none bg-zinc-800 border-neutral-700 text-zinc-400 text-sm items-center justify-center"
										>
											Valor fixo (R$)
										</Radio.Item>
									</Radio.Control>
								</Radio.Root>
							</Field.Root>
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

					<FormSection.Root className="lg:flex-row flex-col">
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

							<Field.Root control={control} name="event-location">
								<Field.Label className="text-xs text-zinc-300">
									Mapa
								</Field.Label>

								<MapPicker.Root className="h-72 rounded-md border-neutral-700 border-2">
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
