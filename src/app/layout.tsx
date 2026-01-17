import clsx from 'clsx'
import './globals.css'

import type { Metadata } from 'next'
import { Bebas_Neue, Geist, } from 'next/font/google'
import { Toaster } from 'sonner'

const bebasNeue = Bebas_Neue({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-bebas',
	display: 'swap',
})

const geist = Geist({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-geist',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Screva | Ingressos de eventos',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={clsx(bebasNeue.variable, geist.variable)}>
			<body
				suppressHydrationWarning
				className="bg-zinc-900 h-screen text-zinc-100 flex overflow-hidden max-w-screen-2xl"
			>
				<Toaster richColors />
				{children}
			</body>
		</html>
	)
}
