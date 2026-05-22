import { AdminOverview } from '@/components/dashboard/admin/admin-overview'
import { CustomerOverview } from '@/components/dashboard/customer/customer-overview'
import { getCurrentUser } from '@/lib/get-current-user'

export default async function DashboardPage() {
	const user = await getCurrentUser()

	if (!user) return <p>Loading...</p>

	const { role } = user

	switch (role) {
		case 'CUSTOMER':
			return <CustomerOverview />
		case 'ADMIN':
			return <AdminOverview />

		default:
			return <p>Role not found</p>
	}
}
