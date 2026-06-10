import { KitDeliveryAthleteDetails } from './kit-delivery-athlete-details'
import { KitDeliveryTable } from './kit-delivery-table'

export function KitDeliveryContent() {
	return (
		<div className="flex gap-8 h-full lg:flex-row flex-col">
			<KitDeliveryTable />

			<KitDeliveryAthleteDetails />
		</div>
	)
}
