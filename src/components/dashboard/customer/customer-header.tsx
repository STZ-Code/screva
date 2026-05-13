'use client'
import {
	MapPinIcon,
	PencilSimpleIcon,
	PersonSimpleBikeIcon,
	ShareNetworkIcon,
} from '@phosphor-icons/react'
import { Avatar } from '@stz-code/ui'
import { Tag } from '@/components/tag'

export function CustomerHeader() {
	return (
		<aside className="flex flex-col bg-neutral-800 w-96 h-fit rounded-md border border-zinc-500 items-center">
			<div className="bg-neutral-900 w-full p-3 rounded-t-xl relative h-32 flex justify-end">
				<Avatar.Root className="size-40 rounded-4xl absolute top-16 left-1/2 -translate-x-1/2">
					<Avatar.Image src="https://github.com/garcez17.png" />
					<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
				</Avatar.Root>

				<div className="flex gap-2">
					<button
						type="button"
						className="text-zinc-100 bg-zinc-600 rounded p-2 h-fit"
					>
						<PencilSimpleIcon size={16} />
					</button>
					<button
						type="button"
						className="text-zinc-100 bg-cyan-600 rounded p-2 h-fit"
					>
						<ShareNetworkIcon size={16} />
					</button>
				</div>
			</div>

			<div className="mt-32 h-fit w-full">
				<div className="flexp-10 h-full rounded w-full justify-between">
					<div className="flex flex-col gap-4 items-center pb-12">
						<h2 className="text-cyan-400 text-xl font-bold">Gabriel Garcez</h2>

						<div className="flex flex-col gap-2 items-center">
							<span className="text-sm text-zinc-300 flex gap-2 items-center">
								<MapPinIcon size={20} weight="fill" />
								Juazeiro - BA
							</span>
							<span className="text-sm text-zinc-300">26 anos</span>
						</div>

						<div className="flex flex-wrap justify-center gap-3 max-w-48">
							<Tag className="bg-zinc-600 flex items-center gap-2">
								<PersonSimpleBikeIcon size={16} />
								MTB
							</Tag>

							<Tag className="bg-zinc-600 flex items-center gap-2">
								<PersonSimpleBikeIcon size={16} />
								Runner
							</Tag>

							<Tag className="bg-zinc-600 flex items-center gap-2">
								<PersonSimpleBikeIcon size={16} />
								Triatleta
							</Tag>
						</div>
					</div>

					<div className="border-t border-t-zinc-500 py-4 w-full flex items-center justify-center">
						<span className="text-sm font-light text-zinc-400">
							Membro desde 07/02/2026
						</span>
					</div>
				</div>
			</div>
		</aside>
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
