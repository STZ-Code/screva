import { Main } from '@/components/dashboard/main'
import { SettingsEventAvatarForm } from '@/components/dashboard/settings/settings-event-avatar-form'
import { SettingsEventBasicInfoForm } from '@/components/dashboard/settings/settings-event-basic-info-form'

export default function SettingsBasePage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full h-full">
			<SettingsEventBasicInfoForm />

			<SettingsEventAvatarForm />
		</Main>
	)
}
