import {
	type MiddlewareConfig,
	type NextRequest,
	NextResponse,
} from 'next/server'

const publicRoutes = [
	{ path: '/', whenAuthenticated: 'next' },
	{ path: '/eventos', whenAuthenticated: 'next' },
	{ path: '/eventos/:id', whenAuthenticated: 'next' },
	{ path: '/resultados', whenAuthenticated: 'next' },
	{ path: '/anunciar', whenAuthenticated: 'next' },
	{ path: '/contato', whenAuthenticated: 'next' },
	{ path: '/sign-in', whenAuthenticated: 'redirect' },
	{ path: '/sign-up', whenAuthenticated: 'redirect' },
	{ path: '/esqueci-a-senha', whenAuthenticated: 'redirect' },
	{ path: '/esqueci-a-senha/email-enviado', whenAuthenticated: 'next' },
	{ path: '/redefinir-senha', whenAuthenticated: 'redirect' },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in'
const REDIRECT_WHEN_AUTHENTICATED_ROUTE = '/dashboard'

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl

	const publicRoute = publicRoutes.find((route) => {
		if (route.path.includes(':')) {
			const baseRoute = route.path.split('/:')[0]
			return pathname.startsWith(baseRoute) && pathname !== baseRoute
		}
		return route.path === pathname
	})

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
				`${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-session`,
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
		'/((?!api|_next/static|_next/image|favicon.ico|icon|.well-known).*)',
	],
}
