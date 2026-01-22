import { EventList } from '@/components/event-list'
import { Hero } from '@/components/hero'
import { SeeMore } from '@/components/see-more'

export default function HomePage() {
	return (
		<>
			<Hero />

			<EventList title="Eventos em Destaque" footerActions={<SeeMore />} />
		</>
	)
}
