import { ActionDivider } from '@/components/action-divider'
import { ContactDetails } from '@/components/contact-details'
import { ContactForm } from '@/components/contact-form'
import { ContactHeader } from '@/components/contact-header'
import { ContactHero } from '@/components/contact-hero'
import { SocialMediaLinks } from '@/components/social-media-links'

export default function ContactPage() {
	return (
		<div className="flex">
			<ContactHero />

			<div className="flex-1 p-10 flex flex-col gap-10">
				<ContactHeader />

				<ContactForm />

				<ActionDivider>
					<span className="text-zinc-400">Ou nos encontre em</span>
				</ActionDivider>

				<ContactDetails />

				<div className="w-full flex items-center justify-center">
					<SocialMediaLinks className="text-zinc-50" />
				</div>
			</div>
		</div>
	)
}
