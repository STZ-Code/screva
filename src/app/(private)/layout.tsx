import { Header } from '@/components/dashboard/header'

export default function PrivateLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col w-full bg-dashboard">
			<Header />
			{children}
		</div>
	)
}
