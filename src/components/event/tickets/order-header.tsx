'use client'
import { CaretLeftIcon } from '@phosphor-icons/react'
import { Avatar } from '@stz-code/ui'
import Link from 'next/link'
import exampleImg from '@/assets/examples/picos.jpg'

export function OrderHeader() {
	return (
		<div className="w-full py-3 px-6 lg:pl-28 lg:pr-14 flex items-center justify-between">
			<div className="flex gap-3 items-center w-fit">
				<Link
					href={'/eventos/evento-1'}
					className="text-cyan-600 flex gap-2 lg:hidden hover:text-cyan-500 transition-colors"
				>
					<CaretLeftIcon size={20} />
				</Link>

				<Avatar.Root className="size-9 rounded">
					<Avatar.Image src={exampleImg.src} />
					<Avatar.Fallback>DESAFIO 5 ROTAS SALVATORE COMPANY</Avatar.Fallback>
				</Avatar.Root>
				<strong className="text-zinc-100 w-fit text-sm lg:text-base font-semibold line-clamp-1 leading-tight">
					DESAFIO 5 ROTAS SALVATORE COMPANY teste twfrew
				</strong>
			</div>

			<Link
				href={'/eventos/evento-1'}
				className="text-cyan-600 lg:flex gap-2 hidden hover:text-cyan-500 transition-colors"
			>
				<CaretLeftIcon size={20} />
				Voltar à página inicial
			</Link>
		</div>
	)
}
