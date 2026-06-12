import { type CustomMasks, createMaskProvider } from '@stz-code/utils'

const customMasks = {
	HOUR: () => ({
		format: '00:00',
	}),
	UF: () => ({
		format: 'aa',
	}),
	CVV: () => ({
		format: '000',
	}),
	CARD: () => ({
		format: '0000 0000 0000 0000',
	}),
	SHORT_DATE: () => ({
		format: '00/00',
	}),
} satisfies CustomMasks

const maskProvider = createMaskProvider(customMasks)

export { maskProvider }
