import Image from 'next/image'

import stzLogoBlack from '@/assets/stz_black.svg'

export function Presenter() {
	return (
		<div className="flex-1 bg-zinc-800 rounded-xl w-full h-full py-20 relative">
			<div className="w-full px-16 gap-4 flex flex-col justify-between items-end text-zinc-200 h-full">
				<div className="gap-4 flex flex-col">
					<h2 className="text-3xl font-bold">STZCode Template</h2>
					<span className="text-zinc-350 text-justify">
						Este template centraliza toda a infraestrutura UI/UX da STZ. Explore
						a biblioteca de componentes, hooks customizados e utilitários para
						acelerar o setup inicial. Clone, adapte e remova o que não for
						necessário para inciar qualquer tipo de projeto web.
					</span>
				</div>

				<span>v1.0.0</span>
			</div>

			<Image
				src={stzLogoBlack}
				alt=""
				className="size-11/12 absolute -bottom-48 -right-1/4 mt-8"
			/>
		</div>
	)
}
