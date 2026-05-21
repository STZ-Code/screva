'use client'

import { Maps } from '@stz-code/ui/layout'
import { Box } from '@/components/box'
import { BoxHeading } from '@/components/box-heading'

export function KitDeliveryMapLocation() {
	return (
		<Box className="gap-5 flex-1 shadow-none p-6">
			<BoxHeading>Localização</BoxHeading>

			<div className="w-full h-full relative">
				<Maps.Root className="h-full rounded-md">
					<Maps.Marker lat={-9.3892} lng={-40.5087} />
				</Maps.Root>
			</div>
		</Box>
	)
}
