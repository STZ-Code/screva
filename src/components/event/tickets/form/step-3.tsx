'use client'
import {
	BarcodeIcon,
	CreditCardIcon,
	PixLogoIcon,
	// WalletIcon,
} from '@phosphor-icons/react'
import { Field, Input, Select } from '@stz-code/ui'
import { useState } from 'react'
import Cards from 'react-credit-cards-2'
import { useForm, useWatch } from 'react-hook-form'
import { Button } from '@/components/button'
import type { PaymentMethod } from '@/context/multistep-types'
import { maskProvider } from '@/utils/mask'
import { cn } from '@/utils/utils'
import type { CheckoutFormValues } from './checkout-form.schema'

function PixForm() {
	return (
		<div className="flex flex-col gap-3 mt-6">
			<span className="text-zinc-300 font-semibold text-lg">
				Pagamento instantâneo via PIX
			</span>

			<Button className="capitalize">Gerar PIX</Button>
		</div>
	)
}

function BankSlipForm() {
	const { control } = useForm({
		defaultValues: {
			expirity: '17/06/2026',
		},
	})

	return (
		<form className="flex flex-col gap-3 mt-6">
			<Field.Root name={`expirity`} control={control} className="h-22.5">
				<Field.Label required className="text-zinc-400 font-normal">
					Vencimento
				</Field.Label>
				<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
					<Input.Control
						placeholder="00/00/0000"
						maskProvider={maskProvider}
						mask="DATE"
						className="placeholder:text-zinc-500 text-zinc-200"
					/>
				</Input.Root>
				<Field.Error />
			</Field.Root>

			<Button className="capitalize" type="submit">
				Gerar Boleto
			</Button>
		</form>
	)
}

function CardForm() {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			card_installments: '',
			installments: '',
			card_type: '',
			name: '',
			number: '',
			cvc: '',
			cpf: '',
			expiry: '',
		},
	})

	const [focused, setFocused] = useState<'name' | 'number' | 'expiry' | 'cvc'>()

	const [name, number, cvc, due_date] = useWatch({
		control,
		name: ['name', 'number', 'cvc', 'expiry'],
	})

	function handlePurchase(data: any) {
		console.log('data ==>', data)
	}

	return (
		<form onSubmit={handleSubmit(handlePurchase)}>
			<div className="flex gap-4 xl:flex-row flex-col-reverse">
				<div className="flex flex-col flex-1">
					<Field.Root name="card_type" control={control} className="h-22.5">
						<Field.Label required className="text-zinc-400 font-normal">
							Tipo
						</Field.Label>
						<Select.Root>
							<Select.Control>
								<Select.Trigger className="bg-neutral-900 border-zinc-600 focus-within:ring-cyan-600 ring-cyan-600">
									<Select.Placeholder className="text-zinc-500">
										Tipo de cartão
									</Select.Placeholder>

									<Select.TriggerIcon />

									<Select.Portal className="bg-neutral-800 border border-zinc-600 ring-0">
										<Select.Viewport className="p-2">
											<Select.Item
												value="select-1"
												className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
											>
												<Select.ItemText>Débito</Select.ItemText>
											</Select.Item>
											<Select.Item
												value="select-2"
												className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
											>
												<Select.ItemText>Crédito</Select.ItemText>
											</Select.Item>
										</Select.Viewport>
									</Select.Portal>
								</Select.Trigger>
							</Select.Control>
						</Select.Root>
						<Field.Error />
					</Field.Root>

					<Field.Root name={`number`} control={control} className="h-22.5">
						<Field.Label required className="text-zinc-400 font-normal">
							Número do cartão
						</Field.Label>
						<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
							<Input.Control
								placeholder="0000 0000 0000 0000"
								maskProvider={maskProvider}
								mask="CARD"
								onFocus={() => setFocused('number')}
								className="placeholder:text-zinc-500 text-zinc-200"
							/>
						</Input.Root>
						<Field.Error />
					</Field.Root>

					<div className="flex gap-4 h-22.5">
						<Field.Root name={`cvc`} control={control} className="h-22.5">
							<Field.Label required className="text-zinc-400 font-normal">
								CVV
							</Field.Label>
							<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
								<Input.Control
									placeholder="000"
									maskProvider={maskProvider}
									mask="CVV"
									onFocus={() => setFocused('cvc')}
									className="placeholder:text-zinc-500 text-zinc-200"
								/>
							</Input.Root>
							<Field.Error />
						</Field.Root>

						<Field.Root name={`expiry`} control={control} className="h-22.5">
							<Field.Label required className="text-zinc-400 font-normal">
								Data de vencimento
							</Field.Label>
							<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
								<Input.Control
									placeholder="00/00"
									maskProvider={maskProvider}
									mask="SHORT_DATE"
									onFocus={() => setFocused('expiry')}
									className="placeholder:text-zinc-500 text-zinc-200"
								/>
							</Input.Root>
							<Field.Error />
						</Field.Root>
					</div>
				</div>

				<div className="flex-1 credit-card-preview flex items-center">
					<Cards
						number={number}
						expiry={due_date}
						cvc={cvc}
						name={name}
						placeholders={{
							name: 'Seu nome aqui',
						}}
						focused={focused}
					/>
				</div>
			</div>

			<div className="flex flex-col">
				<Field.Root name={`name`} control={control} className="h-22.5">
					<Field.Label required className="text-zinc-400 font-normal">
						Nome do titular
					</Field.Label>
					<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
						<Input.Control
							placeholder="Nome do titular do cartão"
							onFocus={() => setFocused('name')}
							className="placeholder:text-zinc-500 text-zinc-200"
						/>
					</Input.Root>
					<Field.Error />
				</Field.Root>

				<Field.Root name={`cpf`} control={control} className="h-22.5">
					<Field.Label required className="text-zinc-400 font-normal">
						CPF do titular
					</Field.Label>
					<Input.Root className="border-zinc-600 bg-neutral-900 focus-within:ring-cyan-600">
						<Input.Control
							placeholder="Nome do titular do cartão"
							// onFocus={() => setFocused('cpf')}
							maskProvider={maskProvider}
							mask="TAX_ID"
							className="placeholder:text-zinc-500 text-zinc-200"
						/>
					</Input.Root>
					<Field.Error />
				</Field.Root>

				<Field.Root
					name="card_installments"
					control={control}
					className="h-22.5"
				>
					<Field.Label required className="text-zinc-400 font-normal">
						Parcelamento
					</Field.Label>
					<Select.Root>
						<Select.Control>
							<Select.Trigger className="bg-neutral-900 border-zinc-600 focus-within:ring-cyan-600 ring-cyan-600">
								<Select.Placeholder className="text-zinc-500">
									Escolha a quantidade de parcelas
								</Select.Placeholder>

								<Select.TriggerIcon />

								<Select.Portal className="bg-neutral-800 border border-zinc-600 ring-0">
									<Select.Viewport className="p-2">
										<Select.Item
											value="select-1"
											className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
										>
											<Select.ItemText>
												1x de R$ 342,00 com juros
											</Select.ItemText>
										</Select.Item>
										<Select.Item
											value="select-2"
											className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
										>
											<Select.ItemText>
												2x de 175,00 (R$ 350,00) com juros
											</Select.ItemText>
										</Select.Item>
										<Select.Item
											value="select-3"
											className="text-zinc-300 hover:bg-neutral-900 cursor-pointer pl-4 pr-2"
										>
											<Select.ItemText>
												3x de 123,30 (R$ 370,00) com juros
											</Select.ItemText>
										</Select.Item>
									</Select.Viewport>
								</Select.Portal>
							</Select.Trigger>
						</Select.Control>
					</Select.Root>
					<Field.Error />
				</Field.Root>
			</div>

			<Button type="submit">Finalizar</Button>
		</form>
	)
}

export function TicketsStep3() {
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)

	const PaymentForms = {
		pix: PixForm,
		card: CardForm,
		bank_slip: BankSlipForm,
	}

	const PaymentForm = paymentMethod ? PaymentForms[paymentMethod] : null

	return (
		<div className="flex flex-col gap-6 h-fit w-full">
			<h2 className="text-zinc-100 font-semibold text-xl">
				Escolha a forma de pagamento
			</h2>

			<div className="flex flex-col xl:flex-row gap-2 w-full flex-wrap">
				<button
					type="button"
					onClick={() => setPaymentMethod('card')}
					className={cn(
						'bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors border border-zinc-600 rounded flex items-center justify-center gap-2 flex-1 py-2',
						{
							'border-cyan-600 text-cyan-600': paymentMethod === 'card',
						},
					)}
				>
					<CreditCardIcon size={24} />

					<span className="font-semibold text-sm gap-2 flex divide-x xl:divide-none divide-zinc-600 flex-row xl:flex-col">
						<span className="pr-2 xl:pr-0 text-left">Cartão Crédito</span>
						<span className="text-left">Cartão Débito</span>
					</span>
				</button>

				<button
					type="button"
					onClick={() => setPaymentMethod('pix')}
					className={cn(
						'bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors border border-zinc-600 rounded flex items-center justify-center gap-2 flex-1 py-2',
						{
							'border-cyan-600 text-cyan-600': paymentMethod === 'pix',
						},
					)}
				>
					<PixLogoIcon size={24} />
					PIX
				</button>
				<button
					type="button"
					onClick={() => setPaymentMethod('bank_slip')}
					className={cn(
						'bg-neutral-900 cursor-pointer hover:bg-neutral-800 transition-colors border border-zinc-600 rounded flex items-center justify-center gap-2 flex-1 py-2',
						{
							'border-cyan-600 text-cyan-600': paymentMethod === 'bank_slip',
						},
					)}
				>
					<BarcodeIcon size={24} />
					Boleto Bancário
				</button>
			</div>

			{PaymentForm && <PaymentForm />}
		</div>
	)
}
