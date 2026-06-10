import type { NextRequest, NextResponse } from 'next/server'

export async function contextMiddleware(
	req: NextRequest,
	response: NextResponse,
) {
	const { pathname } = req.nextUrl

	console.log('pathname =>', pathname)

	if (pathname.startsWith('/dashboard/eq/')) {
		const [, , , slug] = pathname.split('/')

		response.cookies.set('eq', slug)
	} else {
		if (!pathname.startsWith('/dashboard/ev/')) {
			response.cookies.delete('eq')
		}
	}

	if (pathname.startsWith('/dashboard/ev/')) {
		const [, , , slug] = pathname.split('/')

		response.cookies.set('ev', slug)
	} else {
		response.cookies.delete('ev')
	}
}
