'use client'
import {
	CalendarBlankIcon,
	MapPinIcon,
	// ShareNetworkIcon,
	UsersIcon,
} from '@phosphor-icons/react'
import { Avatar } from '@stz-code/ui'
import Image from 'next/image'
import exampleImg from '@/assets/examples/banner-example.jpg'

export function CustomerHeader() {
	return (
		<section className="flex flex-col w-full h-fit 2xl:border-l 2xl:border-r border-zinc-700 items-center">
			<div className="w-full h-48 relative">
				<Image
					src={exampleImg.src}
					alt="Customer header"
					width={1400}
					height={200}
					className="w-full h-full object-cover"
				/>

				{/* <button
					type="button"
					className="text-zinc-100 bg-cyan-600 rounded-md py-2 2xl:px-4 px-2 font-bold h-fit absolute top-2 right-2 flex items-center gap-2 cursor-pointer hover:bg-cyan-700 transition-colors"
				>
					{desktop && 'Compartilhar'}

					<ShareNetworkIcon size={16} />
				</button> */}
			</div>

			<div className="relative w-full border-b border-zinc-700 flex 2xl:px-16 px-6">
				<Avatar.Root className="2xl:size-40 size-32 rounded-full border-4 text-zinc-200 absolute 2xl:bottom-14 bottom-52">
					<Avatar.Image src="https://github.com/garcez17.png" />
					<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
				</Avatar.Root>

				<div className="2xl:ml-48 2xl:mt-0 mt-12 py-6 flex flex-col gap-4">
					<h1 className="text-3xl font-bold text-zinc-200">Lucas Martins</h1>

					<span className="text-zinc-400">
						Corredor de rua apaixonado por evolução e superação
					</span>

					<div className="flex 2xl:gap-6 gap-2 text-zinc-300 divide-x divide-zinc-700">
						<div className="flex items-center gap-2 2xl:pr-6 pr-2 2xl:flex-row 2xl:flex-none flex-1 flex-col">
							<MapPinIcon size={20} />
							<span className="text-zinc-400 text-sm text-center 2xl:text-left">
								São Paulo - SP
							</span>
						</div>
						<div className="flex items-center gap-2 2xl:pr-6 pr-2 2xl:flex-none flex-1 2xl:flex-row flex-col">
							<UsersIcon size={20} />
							<span className="text-zinc-400 text-sm text-center 2xl:text-left">
								28 anos
							</span>
						</div>
						<div className="flex items-center gap-2 2xl:pr-6 pr-2 2xl:flex-none flex-1 2xl:flex-row flex-col">
							<CalendarBlankIcon size={20} />
							<span className="text-zinc-400 text-sm text-center 2xl:text-left">
								Membro desde Jan/2026
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

{
	/* <Dropdown.Root>
						<Dropdown.Trigger>
						<DotsThreeVerticalIcon className="size-8 text-zinc-300 cursor-pointer" />
						</Dropdown.Trigger>
						<Dropdown.Content align="end">
						<Dropdown.Item>
						<p>Editar</p>
						</Dropdown.Item>
						</Dropdown.Content>
						</Dropdown.Root> */
}
