import { Main } from '@/components/dashboard/main'
import { SettingsSecurityForm } from '@/components/dashboard/settings/settings-security-form'

export default function SettingsSafetyPage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full">
			<SettingsSecurityForm />
		</Main>
	)
}
