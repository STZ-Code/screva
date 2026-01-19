'use client'
import { FormField } from '@stz-code/ui'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import contactImg from '@/assets/images/contact-img.png'
import { maskProvider } from '@/utils/mask'

export default function ContactPage() {
	const { control } = useForm()

	return (
		<div className="flex">
			<div className="flex-1">
				<Image src={contactImg} alt="Atleta de Mountain Bike" />
			</div>
			<div className="flex-1 p-10 flex flex-col gap-10">
				<div className="flex flex-col gap-4">
					<h1 className="font-bebas text-6xl">Entre em contato conosco</h1>

					<p className="font-light text-zinc-300 text-justify">
						Nossa equipe está aqui para ajudar você a superar qualquer
						obstáculo. Se tiver dúvidas sobre um evento, problemas com uma
						inscrição ou precisar de qualquer suporte, preencha o formulário
						abaixo ou utilize os nossos canais de contato.
					</p>
				</div>

				<form action="" className="flex flex-col gap-4">
					<div className="flex flex-col md:flex-row gap-4">
						<FormField
							control={control}
							config={{
								name: 'name',
								type: 'text',
								placeholder: 'Seu nome',
								containerStyles: 'flex-1',
								inputStyles: 'placeholder:text-zinc-500 text-zinc-300',
								wrapperStyles:
									'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-full',
							}}
						/>

						<FormField
							control={control}
							config={{
								name: 'email',
								type: 'email',
								placeholder: 'Seu e-mail',
								containerStyles: 'flex-1',
								inputStyles: 'placeholder:text-zinc-500 text-zinc-300',
								wrapperStyles:
									'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-full',
							}}
						/>
					</div>

					<div className="flex flex-col md:flex-row gap-4">
						<FormField
							control={control}
							config={{
								name: 'phone',
								type: 'text',
								placeholder: '(00) 0 0000-0000',
								mask: 'PHONE',
								maskProvider,
								containerStyles: 'flex-1',
								inputStyles: 'placeholder:text-zinc-500 text-zinc-300',
								wrapperStyles:
									'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-full',
							}}
						/>

						<FormField
							control={control}
							config={{
								name: 'subject',
								type: 'select',
								options: [{ id: 'op-1', name: 'Opção 1' }],
								containerStyles: 'flex-1',
								wrapperStyles:
									'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-full',
							}}
						/>
					</div>

					<div className="flex gap-4">
						<FormField
							control={control}
							config={{
								name: 'description',
								type: 'textarea',
								placeholder: 'Informe uma breve descrição sobre o seu projeto',
								containerStyles: 'flex-1',
								wrapperStyles:
									'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600',
							}}
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
