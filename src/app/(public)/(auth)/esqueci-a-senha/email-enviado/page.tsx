import Link from 'next/link'
import { Logo } from '@/assets/images/logo'
import { EmailSendedContent } from '@/components/auth/email-sended-content'

export default function EmailSendedPage() {
	return (
		<div className="px-6 xl:px-32 py-20 flex flex-col items-center h-screen w-full">
			<Link href={'/'}>
				<Logo className="w-36 h-fit xl:w-44 text-zinc-100 ml-4" />
			</Link>

			<EmailSendedContent />
		</div>
	)
}
