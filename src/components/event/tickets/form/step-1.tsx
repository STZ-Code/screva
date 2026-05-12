'use client'
import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { Field, Input } from '@stz-code/ui'
import { Accordion } from '@stz-code/ui/layout'
import { useForm } from 'react-hook-form'

export function TicketsStep1() {
	const methods = useForm()

	const quantity = Number(methods.watch('quantity') ?? 0)

	return (
		<div className="flex flex-col gap-6 h-fit">
			<div className="flex flex-col gap-3">
				<h2 className="text-zinc-100 font-semibold text-xl">Suas categorias</h2>

				<span className="text-sm text-zinc-400">
					Adicione a quantidade de ingressos por categoria.
				</span>
			</div>

			<Accordion.Root
				type="multiple"
				className="flex flex-col gap-4 h-fit pb-1"
			>
				<Accordion.Item
					value="cat-1"
					className="border rounded border-zinc-600"
				>
					<Accordion.Trigger className="px-6 text-zinc-300 font-semibold text-xl cursor-pointer">
						02KM - CAMINHADA
					</Accordion.Trigger>
					<Accordion.Content className="px-6 flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 01</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 02</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 03</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item
					value="cat-2"
					className="border rounded border-zinc-600"
				>
					<Accordion.Trigger className="px-6 text-zinc-300 font-semibold text-xl cursor-pointer">
						04KM - CAMINHADA
					</Accordion.Trigger>
					<Accordion.Content className="px-6 flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 01</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 02</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 03</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item
					value="cat-3"
					className="last:border-b border rounded border-zinc-600"
				>
					<Accordion.Trigger className="px-6 text-zinc-300 font-semibold text-xl cursor-pointer">
						06KM - CAMINHADA
					</Accordion.Trigger>
					<Accordion.Content className="px-6 flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 01</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 02</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-lg text-zinc-300">KIT 03</span>

							<Field.Root name="quantity" control={methods.control}>
								<Input.Root className="justify-between border-zinc-600 focus-within:border-cyan-600 border-2 focus-within:ring-0">
									<Field.Icon
										icon={MinusIcon}
										onClick={() =>
											methods.setValue('quantity', Math.max(0, quantity - 1))
										}
										ariaLabel="Diminuir quantidade"
										className="text-zinc-500 hover:text-zinc-600 cursor-pointer group-focus-within:text-zinc-500"
									/>
									<Input.Control
										className="text-center w-7 text-cyan-600 font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
										type="number"
										min={0}
										max={999}
									/>
									<Field.Icon
										icon={PlusIcon}
										onClick={() => methods.setValue('quantity', quantity + 1)}
										ariaLabel="Aumentar quantidade"
										className="text-cyan-500 hover:text-cyan-600 cursor-pointer group-focus-within:text-cyan-500"
									/>
								</Input.Root>
								<Field.Error />
							</Field.Root>

							<div className="flex flex-col gap-0.5">
								<strong className="text-zinc-200 font-bold text-base">
									R$ 40,00
								</strong>
								<span className="text-xs text-zinc-400 font-bold">
									(+ R$ 3,60 em taxas)
								</span>
							</div>
						</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
	)
}
