import { Presenter } from '@/components/presenter'
import { SignUpContainer } from '@/components/sign-up-container'

export default function SignInPage() {
	return (
		<div className="items-center flex h-full w-full gap-6">
			<SignUpContainer />

			<Presenter />
		</div>
	)
}
