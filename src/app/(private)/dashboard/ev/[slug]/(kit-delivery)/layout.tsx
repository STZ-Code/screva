import { KitNavigator } from '@/components/dashboard/events/kits/kit-navigator'
import { Heading } from '@/components/dashboard/heading'
import { Main } from '@/components/dashboard/main'

export default async function KitDeliveryLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{
		slug: string
	}>
}>) {
	const { slug } = await params

	return (
		<Main className="lg:gap-8 gap-4 h-full">
			<Heading.Root className="flex-row justify-between">
				<Heading.Title>Gerenciamento de kits</Heading.Title>
			</Heading.Root>

			<KitNavigator slug={slug} />

			{children}
		</Main>
	)
}
