import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: Date) {
	const formatted = format(date, 'MMM, dd, yyyy', { locale: ptBR })
	return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}
