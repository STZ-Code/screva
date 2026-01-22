import Image from 'next/image'
import locationExample from '@/assets/examples/location-example.png'
import { Box } from '../box'
import { BoxHeading } from '../box-heading'

export function LocationInfo() {
	return (
		<Box className="gap-5">
			<BoxHeading>Localização</BoxHeading>

			<div className="w-full h-52 relative">
				<Image src={locationExample} alt="Localização Mapa" fill />
			</div>
		</Box>
	)
}
