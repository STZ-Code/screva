import { KitDeliveryMapLocation } from '@/components/dashboard/events/kits/kit-delivery-map-location'
import { KitDeliveryMetrics } from '@/components/dashboard/events/kits/kit-delivery-metrics'
import { KitPickupDetails } from '@/components/dashboard/events/kits/kit-pickup-details'

export default async function KitPage() {
	return (
		<>
			<KitDeliveryMetrics />

			<div className="flex w-full gap-4 xl:flex-row flex-col">
				<KitPickupDetails />

				<KitDeliveryMapLocation />
			</div>
		</>
	)
}
