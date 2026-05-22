import { headers } from 'next/headers'
import { authClient } from './auth-client'

export type Role = 'ADMIN' | 'CUSTOMER'

export type User = {
	name: string
	email: string
	emailVerified: boolean
	id: string
	avatarUrl: string | null
	role: Role
}

export async function getCurrentUser() {
	const state = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	})

	return state.data?.user as User | undefined
}
