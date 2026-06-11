'use client'
import { Maps } from '@stz-code/ui/layout'
import { Box } from '../box'
import { BoxHeading } from '../box-heading'

export function LocationInfo() {
	return (
		<Box className="gap-5 rounded-none xl:rounded-2xl">
			<BoxHeading>Localização</BoxHeading>

			<div className="w-full h-52 relative">
				<Maps.Root className="h-full rounded-md">
					<Maps.Marker lat={-9.3892} lng={-40.5087} />
				</Maps.Root>
			</div>
		</Box>
	)
}
