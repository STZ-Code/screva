'use client'

import { PlusIcon } from '@phosphor-icons/react'
import { Avatar, Combobox, Field, Input, Sheet, Textarea } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { FormSection } from '@/components/form-section'
import { maskProvider } from '@/utils/mask'

type Organizer = {
	id: string
	name: string
	email: string
}

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

export function CreateTransferSheet() {
	const { control } = useForm()

	return (
		<Sheet.Root>
			<Sheet.Trigger asChild>
				<Button
					type="submit"
					className="py-2 outline-none h-fit px-6 w-fit normal-case font-semibold flex gap-2"
				>
					<PlusIcon size={20} weight="bold" />
					Novo repasse
				</Button>
			</Sheet.Trigger>
			<Sheet.Content className="w-2/5 bg-neutral-900 border-cyan-600 gap-0">
				<Sheet.Header className="border-b border-b-neutral-700">
					<Sheet.Title>Registrar novo repasse</Sheet.Title>
				</Sheet.Header>

				<div className="flex flex-col overflow-auto">
					<FormSection.Root>
						<FormSection.Header>
							<FormSection.Title>Repasses aos organizadores</FormSection.Title>

							<div className="flex flex-col gap-3">
								<FormSection.Description>
									Registre seus repasses de valores ao organizador responsável
									pelo evento.
								</FormSection.Description>

								<div className="flex flex-col gap-4">
									<div className="flex flex-col gap-1">
										<span className="text-sm text-zinc-400">
											Total de vendas
										</span>
										<span className="text-sm text-zinc-200">R$ 6.400,98</span>
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-sm text-zinc-400">Já repassado</span>
										<span className="text-sm text-zinc-200">R$ 1.400,98</span>
									</div>
									<div className="flex flex-col gap-1">
										<span className="text-sm text-zinc-400">
											Saldo restante
										</span>
										<span className="text-sm text-zinc-200">R$ 5.000,00</span>
									</div>
								</div>
							</div>
						</FormSection.Header>

						<FormSection.Content>
							<Field.Root control={control} name="cronos">
								<Field.Label className="text-xs text-zinc-300">
									Organizador
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

							<Field.Root control={control} name="name">
								<Field.Label className="text-xs text-zinc-300" required>
									Valor do repasse
								</Field.Label>
								<Input.Root className="py-2 mt-1 border-neutral-700 focus-within:ring-2 focus-within:ring-cyan-500">
									<Input.Control
										placeholder="Valor em R$ a ser repassado"
										maskProvider={maskProvider}
										mask="CURRENCY"
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
										placeholder="Observação extra"
										className="placeholder:text-zinc-600 text-zinc-400 h-48"
									/>
								</Textarea.Root>
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
