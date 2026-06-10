import { Footer } from '@/components/dashboard/footer'
import { Header } from '@/components/dashboard/header'

export default async function PrivateLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col w-full min-h-screen bg-dashboard overflow-auto">
			{/* <Header /> */}
			{children}
			<Footer />
		</div>
	)
}
