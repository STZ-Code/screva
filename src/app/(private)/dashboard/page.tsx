'use client'
import { SignOutIcon } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export default function DashboardPage() {
	const router = useRouter()

	async function signOut() {
		await authClient.signOut(
			{},
			{
				onSuccess() {
					router.push('/sign-in')
				},
			},
		)
	}

	return (
		<div className="items-center flex justify-center h-full w-full flex-col gap-8">
			<h1>Dashboard</h1>

			<button
				type="button"
				onClick={signOut}
				className="flex gap-2 items-center bg-zinc-800 rounded-full px-4 py-2 hover:bg-zinc-700 transition-colors"
			>
				<SignOutIcon size={24} className="text-zinc-300" />
				Logout
			</button>
		</div>
	)
}
