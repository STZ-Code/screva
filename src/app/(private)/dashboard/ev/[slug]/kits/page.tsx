import { KitDeliveryMapLocation } from '@/components/dashboard/events/kits/kit-delivery-map-location'
import { KitDeliveryMetrics } from '@/components/dashboard/events/kits/kit-delivery-metrics'
import { KitNavigator } from '@/components/dashboard/events/kits/kit-navigator'
import { KitPickupDetails } from '@/components/dashboard/events/kits/kit-pickup-details'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default function KitPage({
	params,
}: {
	params: {
		slug: string
	}
}) {
	const slug = params.slug

	return (
		<Main className="gap-8">
			<Heading.Root className="flex-row justify-between">
				<Heading.Title>Gerenciamento de kits</Heading.Title>
			</Heading.Root>

			<KitNavigator slug={slug} />

			<KitDeliveryMetrics />

			<div className="flex w-full gap-4">
				<KitPickupDetails />

				<KitDeliveryMapLocation />
			</div>
		</Main>
	)
}
