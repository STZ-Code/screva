import { AuthDropdownAuthenticated } from './auth-dropdown-authenticated'
import { AuthDropdownContent } from './auth-dropdown-content'
import { AuthDropdownRoot } from './auth-dropdown-root'
import { AuthDropdownTrigger } from './auth-dropdown-trigger'
import { AuthDropdownUnauthenticated } from './auth-dropdown-unauthenticated'
import { PublicAuthDropdownTrigger } from './public-auth-dropdown-trigger'

export const AuthDropdown = {
	Root: AuthDropdownRoot,
	Content: AuthDropdownContent,
	Trigger: AuthDropdownTrigger,
	PublicTrigger: PublicAuthDropdownTrigger,
	Authenticated: AuthDropdownAuthenticated,
	Unauthenticated: AuthDropdownUnauthenticated,
}
