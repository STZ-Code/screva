import { Main } from '@/components/dashboard/main'
import { SettingsPreferencesForm } from '@/components/dashboard/settings/settings-preferences-form'

export default function SettingsPreferencesPage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full">
			<SettingsPreferencesForm />
		</Main>
	)
}
