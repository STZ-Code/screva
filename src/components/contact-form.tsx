'use client'
import { FormField } from '@stz-code/ui'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { maskProvider } from '@/utils/mask'

const rowVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
}

export function ContactForm() {
	const { control } = useForm()

	return (
		<motion.form
			initial="hidden"
			animate="visible"
			transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
			className="flex flex-col gap-4"
			action=""
		>
			<motion.div
				variants={rowVariants}
				className="flex flex-col md:flex-row gap-4"
			>
				<FormField
					control={control}
					config={{
						name: 'name',
						type: 'text',
						placeholder: 'Seu nome',
						containerStyles: 'flex-1',
						inputStyles: 'placeholder:text-zinc-500 text-zinc-300',
						wrapperStyles:
							'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-lg',
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
							'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-lg',
					}}
				/>
			</motion.div>

			<motion.div
				variants={rowVariants}
				className="flex flex-col md:flex-row gap-4"
			>
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
							'focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-lg',
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
							'focus:text-cyan-500 text-zinc-500 ring-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 border-zinc-600 h-14 rounded-lg',
					}}
				/>
			</motion.div>

			<motion.div variants={rowVariants} className="flex gap-4">
				<FormField
					control={control}
					config={{
						name: 'description',
						type: 'textarea',
						placeholder: 'Informe uma breve descrição sobre o seu projeto',
						containerStyles: 'flex-1',
						inputStyles:
							'placeholder:text-zinc-500 text-zinc-300 focus:ring-cyan-500 rounded-lg border-zinc-600 h-40',
					}}
				/>
			</motion.div>

			<motion.button
				variants={{
					hidden: { opacity: 0, y: 10 },
					visible: { opacity: 1, y: 0 },
				}}
				whileHover={{
					scale: 1.01,
					backgroundColor: '#0891b2',
				}}
				whileTap={{ scale: 0.98 }}
				className="text-zinc-100 bg-cyan-600 rounded-lg py-4 w-full font-bold uppercase tracking-widest transition-colors shadow-lg shadow-cyan-900/20"
				type="submit"
			>
				Enviar
			</motion.button>
		</motion.form>
	)
}
