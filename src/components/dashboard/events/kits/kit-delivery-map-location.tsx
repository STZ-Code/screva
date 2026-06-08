'use client'

import { Maps } from '@stz-code/ui/layout'
import { Box } from '@/components/box'
import { BoxHeading } from '@/components/box-heading'

export function KitDeliveryMapLocation() {
	return (
		<Box className="gap-5 flex-1 shadow-none lg:p-6 p-4">
			<BoxHeading>Localização</BoxHeading>

			<div className="w-full lg:h-full relative h-44">
				<Maps.Root className="h-full rounded-md">
					<Maps.Marker lat={-9.3892} lng={-40.5087} />
				</Maps.Root>
			</div>
		</Box>
	)
}
