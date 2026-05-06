import { headers } from 'next/headers'
import { Footer } from '@/components/dashboard/footer'
import { Header } from '@/components/dashboard/header'
import { ProfileButton } from '@/components/dashboard/profile-button'
import { authClient } from '@/lib/auth-client'

type UserData = {
	name: string
	email: string
	emailVerified: boolean
	id: string
	avatarUrl: string | null
	role: 'ADMIN' | 'CUSTOMER'
}

export default async function PrivateLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const state = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	})

	const isAuthenticated = !!state.data?.session && !!state.data?.user

	const user = state.data?.user as UserData | undefined

	return (
		<div className="flex flex-col w-full bg-dashboard overflow-auto">
			<Header>
				<ProfileButton user={user} isAuthenticated={isAuthenticated} />
			</Header>
			{children}
			<Footer />
		</div>
	)
}
