'use client'
import { ReactLenis } from '@studio-freight/react-lenis'
import type { ReactNode } from 'react'

export function SmoothScroll({ children }: { children: ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 1,
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 2,
				infinite: false,
				syncTouch: true,
			}}
		>
			{children as any}
		</ReactLenis>
	)
}
