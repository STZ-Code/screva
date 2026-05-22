import { Avatar } from '@stz-code/ui'
import exampleImg from '@/assets/examples/picos.jpg'

export function CustomerEventCard() {
	return (
		<div className="bg-neutral-900 flex p-4 rounded-2xl flex-1 gap-3 border border-zinc-700">
			<Avatar.Root className="size-20 rounded-2xl">
				<Avatar.Image src={exampleImg.src} />
				<Avatar.Fallback>Picos Pro Race</Avatar.Fallback>
			</Avatar.Root>

			<div>
				<strong className="text-zinc-100 font-bold text-sm">
					Última prova
				</strong>
				<p className="text-zinc-300">SESC Jaboatão</p>

				<span className="text-zinc-300">10 km • 02 Fev 2026</span>
			</div>
		</div>
	)
}
