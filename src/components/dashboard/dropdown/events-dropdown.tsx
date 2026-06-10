import { Dropdown } from '@stz-code/ui/dropdown'
import { cookies } from 'next/headers'
import Link from 'next/link'
import sescImg from '@/assets/examples/jaboatao.png'
import cronosImg from '@/assets/examples/organizer.png'
import picosImg from '@/assets/examples/picos.jpg'
import { CaretUpDown } from '@/components/icons/caret-up-down'
import { cn } from '@/utils/utils'
import { CreateEventRequestSheet } from '../admin/events/create-event-request-sheet'
import { CreateEventRequest } from './create-event-request-button'
import { ProvAvatar } from './prov-avatar'

const events = [
	{
		id: 'event-1',
		name: 'Picos Pro Race',
		slug: 'picos-pro-race',
		url: picosImg.src,
	},
	{
		id: 'event-2',
		name: 'SESC Jaboatão',
		slug: 'sesc-jaboatao',
		url: sescImg.src,
	},
	{
		id: 'event-3',
		name: 'Corrida da Cronosvale',
		slug: 'corrida-da-cronosvale',
		url: cronosImg.src,
	},
]

export async function EventsDropdown() {
	const cookie = await cookies()

	const currentEventSlug = cookie.get('ev')?.value
	const currentTeamSlug = cookie.get('eq')?.value

	const currentEvent = events.find((event) => event.slug === currentEventSlug)

	return (
		<Dropdown.Root>
			<Dropdown.Trigger className="cursor-pointer">
				<div className="flex w-fit max-w-60 items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-cyan-600">
					{currentEvent ? (
						<>
							<ProvAvatar
								data={{ name: currentEvent.name, url: currentEvent.url }}
								className={cn('size-6 rounded')}
							/>
							<span className="text-zinc-200 truncate">
								{currentEvent.name}
							</span>

							<CaretUpDown
								className="ml-auto size-4 text-zinc-200"
								weight="bold"
							/>
						</>
					) : (
						<>
							<span className="text-zinc-200 truncate">Geral</span>

							<CaretUpDown
								className="ml-auto size-4 text-zinc-200"
								weight="bold"
							/>
						</>
					)}
				</div>
			</Dropdown.Trigger>

			<Dropdown.Content
				align="start"
				sideOffset={12}
				className="bg-zinc-900 w-64 border-zinc-700 -translate-x-1/3 lg:translate-0"
			>
				<Dropdown.Group>
					<Dropdown.Label>Eventos</Dropdown.Label>

					<Dropdown.Separator className="text-zinc-300 bg-zinc-700" />

					<Dropdown.Item asChild>
						<Link
							href={
								currentTeamSlug
									? `/dashboard/eq/${currentTeamSlug}`
									: '/dashboard'
							}
							className="cursor-pointer hover:bg-zinc-600 transition-colors outline-none rounded"
						>
							<span className="line-clamp-1">Geral</span>
						</Link>
					</Dropdown.Item>

					{events.map((event) => (
						<Dropdown.Item key={event.id} asChild>
							<Link
								href={`/dashboard/ev/${event.slug}`}
								className="cursor-pointer hover:bg-zinc-600 transition-colors outline-none rounded"
							>
								<ProvAvatar
									className="size-6 rounded"
									data={{ name: 'Gabriel Garcez', url: event.url }}
								/>
								{/* <Avatar.Root className="size-6 rounded">
									<Avatar.Image src={exampleImg.src} />
									<Avatar.Fallback>Pro Race</Avatar.Fallback>
								</Avatar.Root> */}
								<span className="line-clamp-1">{event.name}</span>
							</Link>
						</Dropdown.Item>
					))}
					{/* <Dropdown.Item className="hover:bg-zinc-600 transition-colors outline-none rounded">
						<ProvAvatar
							data={{ name: 'Pìcos PRO RACE' }}
							className={cn('size-6 rounded')}
						/>
						<span className="line-clamp-1">Picos Pro Race</span>
					</Dropdown.Item> */}
				</Dropdown.Group>

				<Dropdown.Separator className="text-zinc-300 bg-zinc-700" />

				<Dropdown.Item
					className="hover:bg-zinc-600 transition-colors cursor-pointer outline-none rounded"
					asChild
				>
					<CreateEventRequestSheet>
						<CreateEventRequest />
					</CreateEventRequestSheet>
				</Dropdown.Item>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}
