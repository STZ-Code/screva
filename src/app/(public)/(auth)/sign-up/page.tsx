import { Presenter } from '@/components/auth/presenter'
import { SignUpContainer } from '@/components/auth/sign-up-container'

export default function SignInPage() {
	return (
		<div className="items-center flex w-full gap-6 h-screen">
			<Presenter type="sign-up" />

			<SignUpContainer />
		</div>
	)
}
