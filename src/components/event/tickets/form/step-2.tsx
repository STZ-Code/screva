'use client'
import { Field, Input, Select, Toggle } from '@stz-code/ui'
import { useForm } from 'react-hook-form'

export function TicketsStep2() {
	const methods = useForm()

	return (
		<div className="flex flex-col gap-6 h-fit">
			<div className="flex flex-col gap-3">
				<h2 className="text-zinc-100 font-semibold text-2xl lg:text-xl">
					Seus Dados para a Corrida
				</h2>

				<span className="text-base lg:text-sm text-zinc-400">
					Preencha as informações de cada atleta para garantir que a sua
					inscrição esteja completa.
				</span>
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-3 border-b border-zinc-800 pb-6">
					<div className="flex items-center justify-between">
						<span className="text-zinc-100 font-semibold text-lg">
							Atleta 1
						</span>

						<div className="flex items-center gap-2">
							<p className="text-xs text-zinc-300 font-semibold">
								Usar meus dados
							</p>

							<Field.Root name="enabled" control={methods.control}>
								<Toggle.Root>
									<Toggle.Control className="h-7 w-14 bg-zinc-700 data-[state=checked]:bg-cyan-600">
										<Toggle.Thumb className="size-6 bg-zinc-100" />
									</Toggle.Control>
								</Toggle.Root>
								<Field.Error />
							</Field.Root>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<Field.Root name="description" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								Nome
							</Field.Label>
							<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
								<Input.Control
									placeholder="Nome do atleta"
									className="placeholder:text-zinc-500 text-zinc-200"
								/>
							</Input.Root>
							<Field.Error />
						</Field.Root>

						<Field.Root name="email" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								E-mail
							</Field.Label>
							<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
								<Input.Control
									placeholder="E-mail do atleta"
									className="placeholder:text-zinc-500 text-zinc-200"
								/>
							</Input.Root>
							<Field.Error />
						</Field.Root>

						<div className="flex gap-4">
							<Field.Root
								name="description"
								control={methods.control}
								className="flex-1"
							>
								<Field.Label required className="text-zinc-400 font-normal">
									CPF
								</Field.Label>
								<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
									<Input.Control
										placeholder="000.000.000-00"
										className="placeholder:text-zinc-500 text-zinc-200"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<Field.Root
								name="description"
								control={methods.control}
								className="flex-1"
							>
								<Field.Label required className="text-zinc-400 font-normal">
									Data de Nascimento
								</Field.Label>
								<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
									<Input.Control
										placeholder="00/00/0000"
										className="placeholder:text-zinc-500 text-zinc-200"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>
						</div>

						<Field.Root name="document" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								Kit do atleta
							</Field.Label>
							<Select.Root>
								<Select.Control>
									<Select.Trigger className="bg-neutral-900 border-zinc-600 focus-within:ring-cyan-600">
										<Select.Placeholder className="text-zinc-500">
											Teste
										</Select.Placeholder>

										<Select.TriggerIcon />

										<Select.Portal>
											<Select.Viewport className="p-2">
												<Select.Item value="select-1">
													<Select.ItemText>Kit 1</Select.ItemText>
												</Select.Item>
												<Select.Item value="select-2">
													<Select.ItemText>Kit 2</Select.ItemText>
												</Select.Item>
												<Select.Item value="select-3">
													<Select.ItemText>Kit 3</Select.ItemText>
												</Select.Item>
											</Select.Viewport>
										</Select.Portal>
									</Select.Trigger>
								</Select.Control>
							</Select.Root>
							<Field.Error />
						</Field.Root>
					</div>
				</div>
				<div className="flex flex-col gap-3 border-b border-zinc-800 pb-6">
					<div className="flex items-center justify-between">
						<span className="text-zinc-100 font-semibold text-lg">
							Atleta 2
						</span>
					</div>

					<div className="flex flex-col gap-2">
						<Field.Root name="description" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								Nome
							</Field.Label>
							<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
								<Input.Control
									placeholder="Nome do atleta"
									className="placeholder:text-zinc-500 text-zinc-200"
								/>
							</Input.Root>
							<Field.Error />
						</Field.Root>

						<Field.Root name="email" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								E-mail
							</Field.Label>
							<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
								<Input.Control
									placeholder="E-mail do atleta"
									className="placeholder:text-zinc-500 text-zinc-200"
								/>
							</Input.Root>
							<Field.Error />
						</Field.Root>

						<div className="flex gap-4">
							<Field.Root
								name="description"
								control={methods.control}
								className="flex-1"
							>
								<Field.Label required className="text-zinc-400 font-normal">
									CPF
								</Field.Label>
								<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
									<Input.Control
										placeholder="000.000.000-00"
										className="placeholder:text-zinc-500 text-zinc-200"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<Field.Root
								name="description"
								control={methods.control}
								className="flex-1"
							>
								<Field.Label required className="text-zinc-400 font-normal">
									Data de Nascimento
								</Field.Label>
								<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
									<Input.Control
										placeholder="00/00/0000"
										className="placeholder:text-zinc-500 text-zinc-200"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>
						</div>

						<Field.Root name="document" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								Kit do atleta
							</Field.Label>
							<Select.Root>
								<Select.Control>
									<Select.Trigger className="bg-neutral-900 border-zinc-600 focus-within:ring-cyan-600">
										<Select.Placeholder className="text-zinc-500">
											Teste
										</Select.Placeholder>

										<Select.TriggerIcon />

										<Select.Portal>
											<Select.Viewport className="p-2">
												<Select.Item value="select-1">
													<Select.ItemText>Kit 1</Select.ItemText>
												</Select.Item>
												<Select.Item value="select-2">
													<Select.ItemText>Kit 2</Select.ItemText>
												</Select.Item>
												<Select.Item value="select-3">
													<Select.ItemText>Kit 3</Select.ItemText>
												</Select.Item>
											</Select.Viewport>
										</Select.Portal>
									</Select.Trigger>
								</Select.Control>
							</Select.Root>
							<Field.Error />
						</Field.Root>
					</div>
				</div>
				<div className="flex flex-col gap-3 border-b last:border-b-0 border-zinc-800 pb-6">
					<div className="flex items-center justify-between">
						<span className="text-zinc-100 font-semibold text-lg">
							Atleta 3
						</span>
					</div>

					<div className="flex flex-col gap-2">
						<Field.Root name="description" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								Nome
							</Field.Label>
							<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
								<Input.Control
									placeholder="Nome do atleta"
									className="placeholder:text-zinc-500 text-zinc-200"
								/>
							</Input.Root>
							<Field.Error />
						</Field.Root>

						<Field.Root name="email" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								E-mail
							</Field.Label>
							<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
								<Input.Control
									placeholder="E-mail do atleta"
									className="placeholder:text-zinc-500 text-zinc-200"
								/>
							</Input.Root>
							<Field.Error />
						</Field.Root>

						<div className="flex gap-4">
							<Field.Root
								name="description"
								control={methods.control}
								className="flex-1"
							>
								<Field.Label required className="text-zinc-400 font-normal">
									CPF
								</Field.Label>
								<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
									<Input.Control
										placeholder="000.000.000-00"
										className="placeholder:text-zinc-500 text-zinc-200"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<Field.Root
								name="description"
								control={methods.control}
								className="flex-1"
							>
								<Field.Label required className="text-zinc-400 font-normal">
									Data de Nascimento
								</Field.Label>
								<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
									<Input.Control
										placeholder="00/00/0000"
										className="placeholder:text-zinc-500 text-zinc-200"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>
						</div>

						<Field.Root name="document" control={methods.control}>
							<Field.Label required className="text-zinc-400 font-normal">
								Kit do atleta
							</Field.Label>
							<Select.Root>
								<Select.Control>
									<Select.Trigger className="bg-neutral-900 border-zinc-600 focus-within:ring-cyan-600">
										<Select.Placeholder className="text-zinc-500">
											Teste
										</Select.Placeholder>

										<Select.TriggerIcon />

										<Select.Portal>
											<Select.Viewport className="p-2">
												<Select.Item value="select-1">
													<Select.ItemText>Kit 1</Select.ItemText>
												</Select.Item>
												<Select.Item value="select-2">
													<Select.ItemText>Kit 2</Select.ItemText>
												</Select.Item>
												<Select.Item value="select-3">
													<Select.ItemText>Kit 3</Select.ItemText>
												</Select.Item>
											</Select.Viewport>
										</Select.Portal>
									</Select.Trigger>
								</Select.Control>
							</Select.Root>
							<Field.Error />
						</Field.Root>
					</div>
				</div>
			</div>
		</div>
	)
}
