import { Presenter } from '@/components/auth/presenter'
import { SignInContainer } from '@/components/auth/sign-in-container'

export default function SignInPage() {
	return (
		<div className="items-center flex h-screen w-full gap-6 xl:overflow-auto">
			<Presenter type="sign-in" />

			<SignInContainer />
		</div>
	)
}
