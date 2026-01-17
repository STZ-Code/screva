import Image from 'next/image'

import HeroImg1 from '@/assets/images/screva-bg-1.png'
import HeroImg2 from '@/assets/images/screva-bg-2.png'
import { RunnerButton } from './runner-button'

export function Hero() {
	return (
		<section className="flex w-full relative">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6">
				<div className="flex items-center justify-center w-fit flex-col">
					<span className="text-center text-7xl font-bold font-geist text-zinc-200/90">
						Seu Tempo, Sua Meta
					</span>
					<span className="text-center text-7xl font-bold font-geist text-zinc-200/90">
						Nossa <strong className="italic text-cyan-400">Precisão</strong>
					</span>
				</div>

				<div className="flex gap-3 items-center justify-center">
					<RunnerButton>Eventos</RunnerButton>
					<RunnerButton variant="result">Resultados</RunnerButton>
				</div>
			</div>
			<div className="flex w-full">
				<div className="flex-1">
					<Image src={HeroImg1} alt="Bike running" className="w-full" />
				</div>
				<div className="flex-1">
					<Image src={HeroImg2} alt="runner" className="w-full" />
				</div>
			</div>
		</section>
	)
}
