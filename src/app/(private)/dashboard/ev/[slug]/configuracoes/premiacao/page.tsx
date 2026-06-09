import { Main } from '@/components/dashboard/main'
import { SettingsEventAwardForm } from '@/components/dashboard/settings/settings-event-award-form'

export default function EventAwardPage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full h-full">
			<SettingsEventAwardForm />
		</Main>
	)
}
