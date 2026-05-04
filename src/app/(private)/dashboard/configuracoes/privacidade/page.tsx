import { SettingsDeleteAccountForm } from '@/components/dashboard/settings/settings-delete-account-form'
import { SettingsPrivacityForm } from '@/components/dashboard/settings/settings-privacity-form'

export default function SettingsPrivacityPage() {
	return (
		<div className="flex flex-col gap-8 w-full">
			<SettingsPrivacityForm />

			<SettingsDeleteAccountForm />
		</div>
	)
}
