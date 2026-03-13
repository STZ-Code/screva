import Link from 'next/link'
import { Logo } from '@/assets/images/logo'
import { RequestForgotPasswordForm } from '@/components/request-forgot-password-form'

export default function ForgotPasswordPage() {
	return (
		<div className="px-32 py-20 flex flex-col h-screen w-full">
			<Link href="/">
				<Logo className="w-48" />
			</Link>

			<div className="flex-1 items-center justify-center flex">
				<RequestForgotPasswordForm />
			</div>
		</div>
	)
}
