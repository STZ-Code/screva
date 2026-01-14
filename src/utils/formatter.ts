import { type CustomHandlers, createFormatter } from '@stz-code/utils'

const customHandlers = {} satisfies CustomHandlers

const { formatter } = createFormatter(customHandlers)

export { formatter }
