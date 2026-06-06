import { Main } from '@/components/dashboard/main'
import { SettingsHelpForm } from '@/components/dashboard/settings/settings-help-form'

export default function SettingsHelpPage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full">
			<SettingsHelpForm />
		</Main>
	)
}
