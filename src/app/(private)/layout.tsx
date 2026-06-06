import { Footer } from '@/components/dashboard/footer'
import { Header } from '@/components/dashboard/header'
import { getCurrentUser } from '@/lib/get-current-user'

export default async function PrivateLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const user = await getCurrentUser()

	if (!user) return <p>Loading...</p>

	return (
		<div className="flex flex-col w-full min-h-screen bg-dashboard overflow-auto">
			<Header user={user} />
			{children}
			<Footer />
		</div>
	)
}
