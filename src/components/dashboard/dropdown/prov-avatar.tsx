'use client'

import { Avatar } from '@stz-code/ui'

export function ProvAvatar({
	data,
	className,
}: {
	data: { name: string; url?: string }
	className?: string
}) {
	const { name, url = 'https://github.com/garcez17.png' } = data

	return (
		<Avatar.Root className={className}>
			<Avatar.Image src={url} />
			<Avatar.Fallback>{name}</Avatar.Fallback>
		</Avatar.Root>
	)
}
