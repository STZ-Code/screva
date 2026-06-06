import { Main } from '@/components/dashboard/main'
import { SettingsDeleteAccountForm } from '@/components/dashboard/settings/settings-delete-account-form'
import { SettingsPrivacityForm } from '@/components/dashboard/settings/settings-privacity-form'

export default function SettingsPrivacityPage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full">
			<SettingsPrivacityForm />

			<SettingsDeleteAccountForm />
		</Main>
	)
}
