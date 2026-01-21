import { Countdown } from '@/components/countdown'
import { AwardInfo } from '@/components/event/award-info'
import { EventCategories } from '@/components/event/categories'
import { EventDescription } from '@/components/event/description'
import { DocumentsInfo } from '@/components/event/documents-info'
import { HelpInfo } from '@/components/event/help-info'
import { LocationInfo } from '@/components/event/location-info'
import { OrganizerInfo } from '@/components/event/organizer-info'
import { TicketsAction } from '@/components/event/tickets-action'
import { TimingTeam } from '@/components/event/timing-team'
import { EventHero } from '@/components/event-hero'

export default function Event() {
	return (
		<div>
			<EventHero />

			<div className="px-28 py-10 flex flex-col gap-10">
				<Countdown />

				<div className="flex gap-10">
					<div className="w-2/3 flex flex-col gap-10">
						<EventDescription />
						<EventCategories />
						<AwardInfo />
					</div>
					<div className="flex-1 flex flex-col gap-10">
						<TicketsAction />
						<OrganizerInfo />
						<TimingTeam />
						<DocumentsInfo />
						<LocationInfo />
						<HelpInfo />
					</div>
				</div>
			</div>
		</div>
	)
}
