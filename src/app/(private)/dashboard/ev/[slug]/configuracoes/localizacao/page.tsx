import { Main } from '@/components/dashboard/main'
import { SettingsEventLocationForm } from '@/components/dashboard/settings/settings-event-location-form'

export default function SettingsEventLocationPage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full h-full">
			<SettingsEventLocationForm />
		</Main>
	)
}
