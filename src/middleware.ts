import {
	type MiddlewareConfig,
	type NextRequest,
	NextResponse,
} from 'next/server'

const publicRoutes = [
	{ path: '/', whenAuthenticated: 'next' },
	{ path: '/sign-in', whenAuthenticated: 'redirect' },
	{ path: '/sign-up', whenAuthenticated: 'redirect' },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in'
const REDIRECT_WHEN_AUTHENTICATED_ROUTE = '/dashboard'

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl
	const publicRoute = publicRoutes.find((route) => route.path === pathname)

	const sessionToken = req.cookies.get('better-auth.session_token')

	if (!sessionToken && publicRoute) {
		return NextResponse.next()
	}

	if (!sessionToken && !publicRoute) {
		const redirectUrl = req.nextUrl.clone()

		redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

		return NextResponse.redirect(redirectUrl)
	}

	if (sessionToken && publicRoute?.whenAuthenticated === 'redirect') {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/auth/session`,
				{
					method: 'GET',
					headers: {
						cookie: req.headers.get('cookie') ?? '',
					},
				},
			)

			if (!res.ok) {
				throw new Error('Invalid session')
			}

			const redirectUrl = req.nextUrl.clone()

			redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED_ROUTE

			return NextResponse.redirect(redirectUrl)
		} catch {
			return NextResponse.redirect(new URL('/sign-in', req.url))
		}
	}
}

export const config: MiddlewareConfig = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
}
