import { headers } from 'next/headers'
import { AuthDropdown } from '@/components/auth/auth-dropdown/index'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { authClient } from '@/lib/auth-client'
import { getCurrentUser } from '@/lib/get-current-user'

type UserData = {
	name: string
	email: string
	emailVerified: boolean
	id: string
	avatarUrl: string | null
	role: 'ADMIN' | 'CUSTOMER'
}

export default async function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const user = await getCurrentUser()

	const isAuthenticated = !!user

	return (
		<div className="flex flex-col w-full">
			<Header>
				<AuthDropdown.Root>
					<AuthDropdown.Trigger
						type="button"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: 'spring', stiffness: 400, damping: 20 }}
						className="bg-zinc-800/50 w-28 hover:opacity-60 transition-opacity flex items-center justify-center outline-none cursor-pointer"
					>
						<AuthDropdown.PublicTrigger />
					</AuthDropdown.Trigger>

					<AuthDropdown.Content isAuthenticated={isAuthenticated}>
						{isAuthenticated && user ? (
							<AuthDropdown.Authenticated user={user} />
						) : (
							<AuthDropdown.Unauthenticated />
						)}
					</AuthDropdown.Content>
				</AuthDropdown.Root>
			</Header>

			<div className="mt-28">
				{children}
				<Footer />
			</div>
		</div>
	)
}
