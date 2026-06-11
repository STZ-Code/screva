'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Avatar, Field, Input, Select, Toggle } from '@stz-code/ui'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import exampleImg from '@/assets/examples/picos.jpg'
import { useMultiStepForm } from '@/hooks/use-multistep-form'
import type { CheckoutFormValues } from './checkout-form.schema'

const athleteSchema = z.object({
	useOwnData: z.boolean().default(false).optional(),
	name: z.string().min(1, 'Nome é obrigatório'),
	email: z.email('E-mail inválido'),
	cpf: z.string().min(1, 'CPF é obrigatório'),
	birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
	kitId: z.string().min(1, 'Selecione o kit do atleta'),
})

export const athletesStepSchema = z.object({
	athletes: z.array(athleteSchema),
})

type AthletesStepSchema = z.infer<typeof athletesStepSchema>

export function TicketsStep2() {
	const { next, accumulatedValues, registerStepSubmitFn } =
		useMultiStepForm<CheckoutFormValues>()

	const totalAthletes =
		accumulatedValues?.categories?.reduce(
			(total, category) =>
				total +
				category.items.reduce(
					(subtotal, item) => subtotal + Math.max(item.quantity, 0),
					0,
				),
			0,
		) ?? 0

	const { watch, setValue, control, getValues, trigger, handleSubmit } =
		useForm<AthletesStepSchema>({
			defaultValues: {
				athletes: Array.from({ length: totalAthletes }, (_, index) => ({
					useOwnData: index === 0 ? false : undefined,
					name: '',
					email: '',
					cpf: '',
					birthDate: '',
					kitId: '',
				})),
			},
			mode: 'onChange',
			resolver: zodResolver(athletesStepSchema),
		})

	const athletes = watch('athletes', [])

	const kits =
		accumulatedValues?.categories?.flatMap((category) =>
			category.items
				.filter((item) => item.quantity > 0)
				.map((item) => ({
					...item,
					categoryTitle: category.title,
				})),
		) ?? []

	const selectedKitIds =
		athletes?.map((athlete) => athlete.kitId).filter(Boolean) ?? []

	const kitCounts = useMemo(() => {
		return selectedKitIds.reduce<Record<string, number>>((acc, kitId) => {
			acc[kitId] = (acc[kitId] ?? 0) + 1
			return acc
		}, {})
	}, [selectedKitIds])

	const getAvailableKits = useCallback(
		(currentKitId: string) => {
			return kits.map((kit) => {
				const selectedCount = kitCounts[kit.id] ?? 0

				const remainingQuantity =
					kit.quantity -
					(selectedCount > 0 && kit.id !== currentKitId
						? selectedCount
						: currentKitId === kit.id
							? selectedCount - 1
							: 0)

				return {
					...kit,
					availableQuantity: remainingQuantity,
					isDisabled: remainingQuantity <= 0,
				}
			})
		},
		[kits, kitCounts],
	)

	const getSelectedKit = useMemo(
		() => (kitId: string) => {
			return kits.find((kit) => kit.id === kitId)
		},
		[kits],
	)

	useEffect(() => {
		registerStepSubmitFn('athlete-profiles', async () => {
			const isValid = await trigger()

			if (!isValid) return

			const payload = {
				athletes: getValues('athletes'),
				categories: accumulatedValues.categories,
			}

			next(payload)
		})
	}, [
		getValues,
		next,
		registerStepSubmitFn,
		trigger,
		accumulatedValues.categories,
	])

	function handleAdvance() {
		const payload = {
			athletes: getValues('athletes'),
			categories: accumulatedValues.categories,
		}

		next(payload)
	}

	return (
		<form
			onSubmit={handleSubmit(handleAdvance)}
			className="flex flex-col gap-6 h-fit"
		>
			<div className="flex flex-col gap-3">
				<h2 className="text-zinc-100 font-semibold text-2xl 2xl:text-xl">
					Seus Dados para a Corrida
				</h2>

				<span className="text-base 2xl:text-sm text-zinc-400">
					Preencha as informações de cada atleta para garantir que a sua
					inscrição esteja completa.
				</span>
			</div>

			<div className="flex flex-col gap-4">
				{Array.from({ length: totalAthletes }, (_, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: no other data here
						key={index}
						className="flex flex-col gap-3 border-b border-zinc-800 pb-6 last:border-b-0"
					>
						<div className="flex items-center justify-between">
							<span className="text-zinc-100 font-semibold text-lg">
								Atleta {index + 1}
							</span>

							{index === 0 && (
								<div className="flex items-center gap-2">
									<p className="text-xs text-zinc-300 font-semibold">
										Usar meus dados
									</p>

									<Field.Root
										name={`athletes.${index}.useOwnData`}
										control={control}
									>
										<Toggle.Root>
											<Toggle.Control className="h-7 w-14 bg-zinc-700 data-[state=checked]:bg-cyan-600">
												<Toggle.Thumb className="size-6 bg-zinc-100" />
											</Toggle.Control>
										</Toggle.Root>
										<Field.Error />
									</Field.Root>
								</div>
							)}
						</div>

						<div className="flex flex-col">
							<Field.Root
								name={`athletes.${index}.name`}
								control={control}
								className="h-22.5"
							>
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

							<Field.Root
								name={`athletes.${index}.email`}
								control={control}
								className="h-22.5"
							>
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
									name={`athletes.${index}.cpf`}
									control={control}
									className="flex-1 h-22.5"
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
									name={`athletes.${index}.birthDate`}
									control={control}
									className="flex-1 h-22.5"
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

							<Field.Root
								name={`athletes.${index}.kitId`}
								control={control}
								className="h-fit"
							>
								<Field.Label required className="text-zinc-400 font-normal">
									Kit do atleta
								</Field.Label>

								{athletes?.[index]?.kitId ? (
									<div className="flex gap-3 items-center">
										<div className="flex-1 border border-zinc-600 rounded-md bg-neutral-900 p-3 flex gap-3 items-center">
											<Avatar.Root className="size-9 rounded">
												<Avatar.Image src={exampleImg.src} />
												<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
											</Avatar.Root>

											<div className="flex flex-col gap-1 flex-1">
												<p className="text-zinc-100 font-semibold text-sm">
													{getSelectedKit(athletes[index].kitId)?.title}
												</p>
												<span className="text-xs text-zinc-400">
													{getSelectedKit(athletes[index].kitId)?.categoryTitle}
												</span>
											</div>
											<button
												type="button"
												onClick={() => setValue(`athletes.${index}.kitId`, '')}
												className="px-4 py-2 rounded-md text-cyan-500 font-semibold text-sm transition-colors cursor-pointer hover:bg-zinc-400/30"
											>
												Alterar
											</button>
										</div>
									</div>
								) : (
									<Select.Root>
										<Select.Control>
											<Select.Trigger className="bg-neutral-900 border-zinc-600 focus-within:ring-cyan-600">
												<Select.Placeholder className="text-zinc-500">
													Selecione o kit
												</Select.Placeholder>

												<Select.TriggerIcon />

												<Select.Portal className="bg-zinc-800 border ring-zinc-600 border-zinc-600">
													<Select.Viewport className="p-2">
														{getAvailableKits('').map((kit) => (
															<Select.Item
																key={`${kit.id}-${kit.categoryTitle}`}
																value={kit.id}
																disabled={kit.isDisabled}
																className="data-highlighted:bg-zinc-700 data-highlighted:text-zinc-100 data-disabled:opacity-50 data-disabled:cursor-not-allowed flex w-full gap-4 text-zinc-100 cursor-pointer"
															>
																<Avatar.Root className="size-9 rounded">
																	<Avatar.Image src={exampleImg.src} />
																	<Avatar.Fallback>
																		Gabriel Garcez
																	</Avatar.Fallback>
																</Avatar.Root>

																<div className="flex items-center justify-between flex-1">
																	<div className="flex flex-col gap-2">
																		<Select.ItemText>
																			{kit.title}
																		</Select.ItemText>

																		<span>{kit.categoryTitle}</span>
																	</div>

																	<strong>Qtd: {kit.availableQuantity}</strong>
																</div>
															</Select.Item>
														))}
													</Select.Viewport>
												</Select.Portal>
											</Select.Trigger>
										</Select.Control>
									</Select.Root>
								)}
								<Field.Error />
							</Field.Root>
						</div>
					</div>
				))}
			</div>

			<button
				type="submit"
				className="2xl:hidden block bg-cyan-600 rounded-md font-bold h-12 px-3 cursor-pointer text-sm hover:bg-cyan-700 transition-colors"
			>
				Continuar
			</button>
		</form>
	)
}
