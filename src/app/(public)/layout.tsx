import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex flex-col w-full">
			<Header />
			<div className="overflow-auto">
				{children}
				<Footer />
			</div>
		</div>
	)
}
