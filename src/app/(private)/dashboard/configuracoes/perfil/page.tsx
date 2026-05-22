import { SettingsAvatarForm } from '@/components/dashboard/settings/settings-avatar-form'
import { SettingsProfileForm } from '@/components/dashboard/settings/settings-profile-form'

export default function SettingsProfilePage() {
	return (
		<div className="flex flex-col gap-8 w-full">
			<SettingsProfileForm />

			<SettingsAvatarForm />
		</div>
	)
}
