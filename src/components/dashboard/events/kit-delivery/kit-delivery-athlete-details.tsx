'use client'

import {
	CheckCircleIcon,
	HashIcon,
	InfoIcon,
	PencilSimpleIcon,
	SpinnerIcon,
	TShirtIcon,
	UserIcon,
} from '@phosphor-icons/react'
import { Avatar, Field, Input, Sheet } from '@stz-code/ui'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { StatusTag } from '@/components/status-tag'
import { getAge } from '@/utils/get-age'
import { cn } from '@/utils/utils'
import type { AthleteKit } from './kit-delivery-content'
import { UpdateAthleteDetailsSheet } from './update-athlete-details-sheet'

function AthleteDetailsEmpty() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 h-full">
			<Avatar.Root className="size-24 rounded-full bg-zinc-800">
				<UserIcon size={96} className="size-24 text-zinc-600" />
			</Avatar.Root>

			<div className="flex flex-col gap-2 items-center">
				<strong className="text-zinc-200 font-semibold">
					Nenhum atleta selecionado
				</strong>

				<p className="text-center text-sm text-zinc-400 font-bold">
					Selecione um atleta na lista para ver os detalhes.
				</p>
			</div>
		</div>
	)
}

function AthleteDetails({ currentAthlete }: { currentAthlete: AthleteKit }) {
	const { control } = useForm()

	const age = getAge(currentAthlete.birthday)

	return (
		<div className="flex-1 flex flex-col p-6 gap-6">
			<h3 className="text-zinc-50 font-semibold">Detalhes do atleta</h3>

			<div className="flex gap-4 items-start justify-between">
				<div className="flex gap-4">
					<Avatar.Root className="size-24 rounded-full">
						<Avatar.Image src="https://github.com/garcez17.png" />
						<Avatar.Fallback>{currentAthlete.name}</Avatar.Fallback>
					</Avatar.Root>

					<div className="flex flex-col gap-4">
						<div className="flex gap-2 items-center">
							<strong className="font-semibold text-zinc-200">
								{currentAthlete.name}
							</strong>

							<StatusTag.Root className="flex xl:hidden">
								<StatusTag.Icon
									icon={
										currentAthlete.status === 'pending'
											? SpinnerIcon
											: CheckCircleIcon
									}
									weight={
										currentAthlete.status === 'delivered' ? 'fill' : 'regular'
									}
									className={cn('size-4', {
										'text-emerald-500': currentAthlete.status === 'delivered',
										'text-orange-400': currentAthlete.status === 'pending',
									})}
								/>
								<StatusTag.Label className="text-zinc-200 text-xs">
									{currentAthlete.status === 'pending'
										? 'Pendente'
										: 'Entregue'}
								</StatusTag.Label>
							</StatusTag.Root>
						</div>

						<div className="flex flex-col gap-2">
							<div className="flex gap-2">
								<span className="text-zinc-500 text-sm font-medium">
									Cód inscrição:
								</span>
								<p className="text-zinc-300 text-sm font-medium">
									{currentAthlete.sub_cod}
								</p>
							</div>
							<div className="flex gap-2">
								<span className="text-zinc-500 text-sm font-medium">CPF:</span>
								<p className="text-zinc-300 text-sm font-medium">
									{currentAthlete.cpf}
								</p>
							</div>
							<div className="flex gap-2">
								<span className="text-zinc-500 text-sm font-medium">Sexo:</span>
								<p className="text-zinc-300 text-sm font-medium">
									{currentAthlete.gender}
								</p>
							</div>
							<div className="flex gap-2">
								<span className="text-zinc-500 text-sm font-medium">
									Idade:
								</span>
								<p className="text-zinc-300 text-sm font-medium">{age} anos</p>
							</div>
						</div>
					</div>
				</div>

				<StatusTag.Root className="hidden xl:flex">
					<StatusTag.Icon
						icon={
							currentAthlete.status === 'pending'
								? SpinnerIcon
								: CheckCircleIcon
						}
						weight={currentAthlete.status === 'delivered' ? 'fill' : 'regular'}
						className={cn('size-4', {
							'text-emerald-500': currentAthlete.status === 'delivered',
							'text-orange-400': currentAthlete.status === 'pending',
						})}
					/>
					<StatusTag.Label className="text-zinc-200 text-xs">
						{currentAthlete.status === 'pending' ? 'Pendente' : 'Entregue'}
					</StatusTag.Label>
				</StatusTag.Root>
			</div>

			<div className="flex gap-4">
				<div className="border rounded border-zinc-800 flex-1 flex p-4 gap-2">
					<TShirtIcon className="size-10 text-slate-400" />

					<div className="flex flex-col gap-1">
						<span className="font-semibold text-xs text-zinc-400">
							Tipo de kit
						</span>
						<p className="text-zinc-300 font-bold text-sm">
							{currentAthlete.kit_type}
						</p>
					</div>
				</div>
				<div className="border rounded border-zinc-800 flex-1 flex p-4 gap-2">
					<HashIcon className="size-10 text-slate-400" />

					<div className="flex flex-col gap-1">
						<span className="font-semibold text-xs text-zinc-400">
							Número de peito
						</span>
						<p className="text-zinc-300 font-bold text-sm">
							{currentAthlete.chest_number}
						</p>
					</div>
				</div>
			</div>

			<div className="divide-y divide-zinc-800 flex flex-col gap-6">
				<div className="flex flex-col gap-4 pb-6">
					<span className="text-zinc-100 font-semibold">
						Informações da entrega
					</span>

					<div className="space-y-2">
						<div className="space-y-1">
							<span className="text-zinc-500 text-sm font-medium">
								Modalidade
							</span>
							<p className="text-zinc-300 text-sm font-medium">
								{currentAthlete.modality}
							</p>
						</div>
						<div className="space-y-1">
							<span className="text-zinc-500 text-sm font-medium">
								Categoria
							</span>
							<p className="text-zinc-300 text-sm font-medium">
								{currentAthlete.category}
							</p>
						</div>
						<div className="space-y-1">
							<span className="text-zinc-500 text-sm font-medium">
								Faixa etária
							</span>
							<p className="text-zinc-300 text-sm font-medium">30 à 39 anos</p>
						</div>
						<div className="space-y-1">
							<span className="text-zinc-500 text-sm font-medium">Equipe</span>
							<p className="text-zinc-300 text-sm font-medium">
								{currentAthlete.team}
							</p>
						</div>
					</div>
				</div>

				<div className="pb-6">
					<span className="text-zinc-100 font-semibold">
						Quem esta retirando o kit?
					</span>

					<Field.Root control={control} name="email">
						<Field.Label className="text-zinc-500 text-sm">
							Informe quem está retirando o kit do atleta.
						</Field.Label>
						<Input.Root className="py-1 mt-2 mb-1 border-zinc-600 focus-within:ring-2 focus-within:ring-cyan-500">
							<Input.Control
								placeholder="Nome completo de quem está retirando."
								className="placeholder:text-zinc-500 text-zinc-400 placeholder:text-sm"
							/>
						</Input.Root>

						<span className="text-zinc-500 text-sm">
							Se o atleta estiver retirando o próprio kit, deixe em branco.
						</span>
					</Field.Root>
				</div>

				<div className="pb-6 flex flex-col gap-3">
					<button
						type="submit"
						className="w-full cursor-pointer hover:bg-cyan-700 transition-colors text-zinc-100 font-medium bg-cyan-600 rounded flex py-2 items-center justify-center gap-2"
					>
						<CheckCircleIcon className="size-6" />
						Entregar kit
					</button>

					<UpdateAthleteDetailsSheet>
						<Sheet.Trigger asChild>
							<Button
								type="submit"
								className="w-full bg-transparent shadow-none cursor-pointer hover:bg-zinc-100/10 transition-colors text-zinc-400 font-semibold border border-zinc-700 rounded flex py-2 items-center justify-center gap-2 capitalize"
							>
								<PencilSimpleIcon className="size-6" />
								Editar informações
							</Button>
						</Sheet.Trigger>
					</UpdateAthleteDetailsSheet>
				</div>

				<div className="flex items-center gap-2.5 text-zinc-400">
					<InfoIcon className="xl:size-6 size-8" />
					<p className="text-sm">
						Cerifique-se de pedir ao atleta para confirmar os dados.
					</p>
				</div>
			</div>
		</div>
	)
}

export function KitDeliveryAthleteDetails({
	currentAthlete,
}: {
	currentAthlete: AthleteKit | null
}) {
	return (
		<div className="bg-neutral-900 min-h-200 xl:w-114 w-full rounded border border-zinc-800 h-full">
			{currentAthlete ? (
				<AthleteDetails currentAthlete={currentAthlete} />
			) : (
				<AthleteDetailsEmpty />
			)}
		</div>
	)
}
