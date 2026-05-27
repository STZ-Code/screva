'use client'

import { MoneyWavyIcon, TicketIcon, UsersIcon } from '@phosphor-icons/react'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { useMultiStepForm } from '@/hooks/use-multistep-form'

const steps = [
	{
		label: 'Ingressos',
		icon: TicketIcon,
		id: 'tickets',
	},
	{
		id: 'athlete-profiles',
		label: 'Perfil',
		icon: UsersIcon,
	},
	{
		id: 'payment-methods',
		label: 'Pagamento',
		icon: MoneyWavyIcon,
	},
]

export function MultiStepIndicator() {
	const { currentStepIndex, goTo } = useMultiStepForm()
	const desktop = useBreakpoint('md')

	const progress = (currentStepIndex / (steps.length - 1)) * 100

	return (
		<div className="relative rounded-md border border-zinc-700 bg-neutral-900 px-4 py-6">
			<div className="absolute left-[calc(16.666%-4px)] right-[calc(16.666%-4px)] md:left-[calc(8.666%-4px)] md:right-[calc(8.666%-4px)] top-11 h-[2px] bg-zinc-700" />

			<div
				className="absolute left-[calc(16.666%-4px)] md:left-[calc(8.666%-4px)] top-11 h-[2px] bg-cyan-600 transition-all duration-300"
				style={{
					width: `calc(${progress}% - ${desktop ? '16' : '20'}.666%)`,
				}}
			/>

			<div className="relative z-10 flex items-start justify-between">
				{steps.map((step, index) => {
					const Icon = step.icon

					const completed = index <= currentStepIndex

					return (
						<button
							key={step.label}
							onClick={() => goTo(step.id)}
							type="button"
							className="flex w-20 flex-col items-center gap-2 cursor-pointer"
						>
							<div
								className={`
									flex h-10 w-10 items-center justify-center rounded-full border bg-neutral-900
									${
										completed
											? 'border-cyan-600 text-cyan-600'
											: 'border-zinc-700 text-zinc-500'
									}
								`}
							>
								<Icon size={18} weight="bold" />
							</div>

							<span
								className={`
									text-center text-[11px] leading-tight sm:text-xs
									${completed ? 'text-cyan-600' : 'text-zinc-500'}
								`}
							>
								{step.label}
							</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}
