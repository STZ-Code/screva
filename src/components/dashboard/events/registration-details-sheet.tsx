import { Sheet } from '@stz-code/ui'
import type { ComponentProps } from 'react'

export function RegistrationDetailsSheet(
	props: ComponentProps<typeof Sheet.Root>,
) {
	return (
		<Sheet.Root {...props}>
			<Sheet.Content className="xl:w-2/5 w-full bg-neutral-900 xl:border-l border-l-none border-cyan-600 gap-0">
				<Sheet.Header className="border-b border-b-neutral-700">
					<Sheet.Title>Detalhes da inscrição</Sheet.Title>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
	)
}
