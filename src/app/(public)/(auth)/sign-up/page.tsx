import { Presenter } from '@/components/auth/presenter'
import { SignUpContainer } from '@/components/auth/sign-up-container'

export default function SignUpPage() {
	return (
		<div className="items-center flex h-screen w-full gap-6">
			<Presenter type="sign-up" />

			<SignUpContainer />
		</div>
	)
}
