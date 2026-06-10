import { redirect } from 'next/navigation'
import { Footer } from '@/components/dashboard/footer'
import { getCurrentUser } from '@/lib/get-current-user'

export default async function PrivateLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const user = await getCurrentUser()

	if (!user) {
		redirect('/sign-in')
	}

	return (
		<div className="flex flex-col w-full min-h-screen bg-dashboard overflow-auto">
			{/* <Header /> */}
			{children}
			<Footer />
		</div>
	)
}
