import { Presenter } from '@/components/auth/presenter'
import { SignInContainer } from '@/components/auth/sign-in-container'

export default function SignInPage() {
	return (
		<div className="items-center flex h-full w-full gap-6">
			<Presenter />

			<SignInContainer />
		</div>
	)
}
