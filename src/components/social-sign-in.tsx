'use client'

import { GoogleLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react'

export function SocialSignIn() {
	return (
		<div className="w-full gap-2 flex mt-6">
			<button
				type="button"
				className="flex-1 rounded-md border border-zinc-600 text-zinc-300 flex items-center justify-center py-2 gap-4"
			>
				<GoogleLogoIcon size={24} />
				Google
			</button>
			<button
				type="button"
				className="flex-1 rounded-md border text-zinc-300 border-zinc-600 flex items-center justify-center py-2 gap-4"
			>
				<InstagramLogoIcon size={24} />
				Instagram
			</button>
		</div>
	)
}
