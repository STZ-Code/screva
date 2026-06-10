import {
	type MiddlewareConfig,
	type NextRequest,
	NextResponse,
} from 'next/server'
import { authMiddleware } from './middlewares/auth-middleware'
import { contextMiddleware } from './middlewares/context-middleware'

export async function middleware(req: NextRequest) {
	const response = NextResponse.next()

	await contextMiddleware(req, response)

	const authResponse = await authMiddleware(req, response)

	if (authResponse) {
		return authResponse
	}

	return response
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
