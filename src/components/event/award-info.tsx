import Image from 'next/image'
import awardExample from '@/assets/examples/award-example.png'
import { Box } from '../box'
import { BoxHeading } from '../box-heading'

export function AwardInfo() {
	return (
		<Box className="gap-5">
			<BoxHeading>Premiação</BoxHeading>

			<Image src={awardExample} alt="Detalhes da premiação do evento" />
		</Box>
	)
}
