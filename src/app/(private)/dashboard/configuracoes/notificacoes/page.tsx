import { Main } from '@/components/dashboard/main'
import { SettingsNotificationsForm } from '@/components/dashboard/settings/settings-notifications-form'

export default function SettingsNotificationsPage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full">
			<SettingsNotificationsForm />
		</Main>
	)
}
