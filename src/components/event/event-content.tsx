'use client'

import { useBreakpoint } from '@/hooks/use-breakpoint'
import { AwardInfo } from './award-info'
import { EventCategories } from './categories'
import { Countdown } from './countdown'
import { EventDescription } from './description'
import { DocumentsInfo } from './documents-info'
import { HelpInfo } from './help-info'
import { LocationInfo } from './location-info'
import { OrganizerInfo } from './organizer-info'
import { TicketsAction } from './tickets-action'
import { TimingTeam } from './timing-team'

export function EventContent() {
	const isDesktop = useBreakpoint('lg')

	return (
		<div className="xl:px-28 xl:py-10 flex flex-col xl:gap-10">
			<Countdown />

			<div className="flex xl:gap-10 flex-col xl:flex-row">
				<div className="xl:w-2/3 w-full flex flex-col xl:gap-10">
					{!isDesktop && <TicketsAction />}
					<EventDescription />
					<EventCategories />
					<AwardInfo />
				</div>
				<div className="flex-1 flex flex-col xl:gap-10">
					{isDesktop && <TicketsAction />}
					<OrganizerInfo />
					<TimingTeam />
					<DocumentsInfo />
					<LocationInfo />
					<HelpInfo />
				</div>
			</div>
		</div>
	)
}
