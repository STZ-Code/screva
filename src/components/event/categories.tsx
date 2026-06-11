import { Box } from '../box'
import { BoxHeading } from '../box-heading'
import { EventPricingTable } from './event-pricing'

export function EventCategories() {
	return (
		<Box className="gap-5 rounded-none xl:rounded-2xl">
			<BoxHeading>Categorias</BoxHeading>

			<EventPricingTable
				categories={[
					{
						id: '1',
						name: '02KM - CAMINHADA',
						price: 40,
						fee: 3.6,
						badge: 'available',
					},
					{
						id: '2',
						name: '04KM - CAMINHADA',
						price: 40,
						fee: 3.6,
						badge: 'low_stock',
					},
					{
						id: '3',
						name: '06KM - RUN',
						price: 40,
						fee: 3.6,
						badge: 'sold_out',
					},
					{
						id: '4',
						name: '10KM - RUN',
						price: 40,
						fee: 3.6,
						badge: 'available',
					},
				]}
			/>
		</Box>
	)
}
