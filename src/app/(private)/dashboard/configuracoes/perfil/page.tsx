import { Main } from '@/components/dashboard/main'
import { SettingsAvatarForm } from '@/components/dashboard/settings/settings-avatar-form'
import { SettingsProfileForm } from '@/components/dashboard/settings/settings-profile-form'

export default function SettingsProfilePage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full">
			<SettingsProfileForm />

			<SettingsAvatarForm />
		</Main>
	)
}
