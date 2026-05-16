import { MonitorIcon, PhoneIcon } from '@phosphor-icons/react'
import { Chart } from '@stz-code/ui/layout'

const chartConfig = {
	mobile: {
		label: 'Mobile',
		color: '#0891b2',
		icon: PhoneIcon,
	},
}

const barData = [
	{ date: '2024-06-23', mobile: 530 },
	{ date: '2024-06-24', mobile: 180 },
	{ date: '2024-06-25', mobile: 190 },
	{ date: '2024-06-26', mobile: 380 },
	{ date: '2024-06-27', mobile: 490 },
	{ date: '2024-06-28', mobile: 200 },
	{ date: '2024-06-29', mobile: 160 },
	{ date: '2024-06-30', mobile: 400 },
]

export function EventOverviewChart() {
	return (
		<Chart.Root
			config={chartConfig}
			className="[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-zinc-800/30 [&_.recharts-radial-bar-background-sector]:fill-zinc-800/30"
		>
			<Chart.Bar accessibilityLayer data={barData}>
				<Chart.Cartesian className="stroke-zinc-800" />
				<Chart.Axis
					dataKey="date"
					tickFormatter={(value) => {
						const date = new Date(value)
						return date.toLocaleDateString('en-US', {
							month: 'short',
							day: 'numeric',
						})
					}}
				/>

				<Chart.Tooltip
					className="w-[150px]"
					nameKey="views"
					cursor
					labelFormatter={(value) => {
						return new Date(value).toLocaleDateString('en-US', {
							month: 'short',
							day: 'numeric',
							year: 'numeric',
						})
					}}
					formatter={(value) => (
						<div className="flex justify-between w-full">
							<span className="text-emerald-500">{value}</span>
						</div>
					)}
				/>

				<Chart.BarGraph
					dataKey="mobile"
					fill={`var(--color-mobile)`}
					radius={0}
				/>
			</Chart.Bar>
		</Chart.Root>
	)
}
