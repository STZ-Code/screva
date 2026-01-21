import { Box } from '../box'
import { EventPricingTable } from './event-pricing'

export function EventCategories() {
	return (
		<Box className="gap-5">
			<h3 className="text-2xl font-bebas uppercase tracking-wide text-zinc-100">
				Categorias
			</h3>

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
