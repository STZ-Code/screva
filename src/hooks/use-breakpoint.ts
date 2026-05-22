'use client'

import { useEffect, useState } from 'react'

const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536,
}

type Breakpoint = keyof typeof breakpoints

export function useBreakpoint(breakpoint: Breakpoint) {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(
			`(min-width: ${breakpoints[breakpoint]}px)`,
		)

		const handleChange = () => {
			setMatches(mediaQuery.matches)
		}

		handleChange()

		mediaQuery.addEventListener('change', handleChange)

		return () => {
			mediaQuery.removeEventListener('change', handleChange)
		}
	}, [breakpoint])

	return matches
}
