import './globals.css'

import { Toaster } from 'sonner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'STZCODE Web Template',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className="bg-zinc-950 h-screen text-zinc-100 flex overflow-hidden"
			>
				<Toaster richColors />
				{children}
			</body>
		</html>
	)
}
