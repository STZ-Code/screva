import Link from 'next/link'
import { Logo } from '@/assets/images/logo'
import { RequestForgotPasswordForm } from '@/components/auth/request-forgot-password-form'

export default function ForgotPasswordPage() {
	return (
		<div className="px-6 lg:px-32 py-20 flex flex-col items-center h-screen w-full">
			<Link href={'/'}>
				<Logo className="w-36 h-fit lg:w-44 text-zinc-100 ml-4" />
			</Link>

			<div className="flex-1 items-center justify-center flex">
				<RequestForgotPasswordForm />
			</div>
		</div>
	)
}
