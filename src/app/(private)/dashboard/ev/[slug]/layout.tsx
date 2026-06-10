import { Header } from '@/components/dashboard/header'

export default async function EventLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
