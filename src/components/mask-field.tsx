import { FormField } from '@stz-code/ui'
import type { MaskProps } from '@stz-code/utils'
import type { Control, FieldValues, Path } from 'react-hook-form'
import { maskProvider } from '../utils/mask'

type MaskProviderArg = Parameters<typeof maskProvider>[0]

type MaskFieldProps<T extends FieldValues> = {
	config: {
		name: Path<T>
		mask: MaskProviderArg
	}
	control: Control<T>
}

export function MaskField<T extends FieldValues>({
	config,
	control,
}: MaskFieldProps<T>) {
	return (
		<FormField
			control={control}
			config={{
				name: config.name,
				type: 'text',
				mask: config.mask as MaskProps,
				maskProvider,
				className: 'text-zinc-100',
			}}
		/>
	)
}
