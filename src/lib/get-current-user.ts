import {
	// cookies,
	headers,
} from 'next/headers'
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

// const users = [
// 	{
// 		name: 'Felipe Admin',
// 		email: 'felipe-admin@teste.com',
// 		emailVerified: true,
// 		id: 'tester-1',
// 		avatarUrl: null,
// 		role: 'ADMIN',
// 	},
// 	{
// 		name: 'Felipe Cliente',
// 		email: 'felipe-cliente@teste.com',
// 		emailVerified: true,
// 		id: 'tester-2',
// 		avatarUrl: null,
// 		role: 'CUSTOMER',
// 	},
// 	{
// 		name: 'Teste de cliente',
// 		email: 'tester@teste.com',
// 		emailVerified: true,
// 		id: 'tester-3',
// 		avatarUrl: null,
// 		role: 'CUSTOMER',
// 	},
// 	{
// 		name: 'Administrador Tester',
// 		email: 'tester-2@teste.com',
// 		emailVerified: true,
// 		id: 'tester-3',
// 		avatarUrl: null,
// 		role: 'ADMIN',
// 	},
// ]

// async function getUser(email: string) {
// 	return {
// 		data: {
// 			user: users.find((user) => user.email === email),
// 		},
// 	}
// }

export async function getCurrentUser() {
	// const cookie = (await cookies()).get('email')

	// if (!cookie) return null
	const state = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
		},
	})

	// const state = await getUser(cookie.value)

	return state.data?.user as User | undefined
}
