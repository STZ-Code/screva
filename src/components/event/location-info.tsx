import Image from 'next/image'
import locationExample from '@/assets/examples/location-example.png'
import { Box } from '../box'

export function LocationInfo() {
	return (
		<Box className="gap-5">
			<h3 className="text-2xl font-bold text-zinc-100">Localização</h3>

			<div className="w-full h-52 relative">
				<Image src={locationExample} alt="Localização Mapa" fill />
			</div>
		</Box>
	)
}
