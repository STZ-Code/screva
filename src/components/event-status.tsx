import clsx from 'clsx'

type StatusType =
	| 'open' // Aberto normalmente
	| 'ending_soon' // Inscrições com data limite próxima
	| 'sold_out' // Ingressos esgotados (novo)
	| 'finished' // Já aconteceu, tem resultados
	| 'last_call' // Últimos ingressos (urgência)
	| 'upcoming' // Ainda vai abrir
	| 'canceled' // Cancelado

const STATUS_CONFIG = {
	open: {
		label: 'Inscrições Abertas',
		className: 'bg-emerald-600',
	},
	ending_soon: {
		label: 'Inscrições até',
		className: 'bg-orange-600',
	},
	finished: {
		label: 'Resultados Disponíveis',
		className: 'bg-cyan-700',
	},
	last_call: {
		label: 'Últimos Ingressos',
		className: 'bg-red-600',
	},
	upcoming: {
		label: 'Em Breve',
		className: 'bg-blue-500',
	},
	canceled: {
		label: 'Cancelado',
		className: 'bg-zinc-800',
	},
	sold_out: {
		label: 'Esgotado',
		className: 'bg-zinc-950',
	},
} as const

interface EventStatusProps {
	status?: StatusType
}

export function EventStatus({ status = 'upcoming' }: EventStatusProps) {
	const config = STATUS_CONFIG[status]

	return (
		<div
			className={clsx(
				'absolute z-50 bottom-0 px-6 py-2 rounded-br-lg rounded-bl-none rounded-t-lg transition-colors duration-300',
				config.className,
			)}
		>
			<span className="text-sm font-bold tracking-wide">{config.label}</span>
		</div>
	)
}
