import { Main } from '@/components/dashboard/main'
import { SettingsEventEqOrgForm } from '@/components/dashboard/settings/settings-event-eq-org-form'

export default function ChronoOrgSettingsPage() {
	return (
		<Main className="flex flex-col gap-8 py-0 px-0 w-full h-full">
			<SettingsEventEqOrgForm />
		</Main>
	)
}
