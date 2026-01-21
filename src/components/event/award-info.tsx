import Image from 'next/image'
import awardExample from '@/assets/examples/award-example.png'
import { Box } from '../box'

export function AwardInfo() {
	return (
		<Box className="gap-5">
			<h3 className="text-2xl font-bebas uppercase tracking-wide text-zinc-100">
				Premiação
			</h3>

			<Image src={awardExample} alt="Detalhes da premiação do evento" />
		</Box>
	)
}
