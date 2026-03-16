import { EventList } from '@/components/event/event-list'
import { Hero } from '@/components/home/hero'
import { SeeMore } from '@/components/see-more'

export default function HomePage() {
	return (
		<>
			<Hero />

			<EventList title="Eventos em Destaque" footerActions={<SeeMore />} />
		</>
	)
}
