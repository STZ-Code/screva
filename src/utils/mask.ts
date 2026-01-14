import { type CustomMasks, createMaskProvider } from '@stz-code/utils'

const customMasks = {} satisfies CustomMasks

const maskProvider = createMaskProvider(customMasks)

export { maskProvider }
