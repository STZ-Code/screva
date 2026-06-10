import { type CustomMasks, createMaskProvider } from '@stz-code/utils'

const customMasks = {
	HOUR: () => ({
		format: '00:00',
	}),
	UF: () => ({
		format: 'aa',
	}),
} satisfies CustomMasks

const maskProvider = createMaskProvider(customMasks)

export { maskProvider }
