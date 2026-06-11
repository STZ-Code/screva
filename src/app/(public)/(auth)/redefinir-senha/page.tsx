import Link from 'next/link'
import { Logo } from '@/assets/images/logo'
import { ResetPasswordForm } from '@/components/auth/reset-password-form'

export default function ForgotPasswordPage() {
	return (
		<div className="px-6 2xl:px-32 py-20 flex flex-col items-center h-screen w-full">
			<Link href={'/'}>
				<Logo className="w-36 h-fit 2xl:w-44 text-zinc-100 ml-4" />
			</Link>

			<div className="flex-1 items-center justify-center flex">
				<ResetPasswordForm />
			</div>
		</div>
	)
}
