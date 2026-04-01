import Link from 'next/link'
import { Logo } from '@/assets/images/logo'
import { EmailSendedContent } from '@/components/auth/email-sended-content'

export default function EmailSendedPage() {
	return (
		<div className="px-32 py-20 flex flex-col h-screen w-full">
			<Link href="/">
				<Logo className="w-48" />
			</Link>

			<EmailSendedContent />
		</div>
	)
}
