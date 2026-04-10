'use client'
import { Chart } from '@stz-code/ui/layout'

const chartConfig = {
	mobile: {
		label: 'Mobile',
		color: '#0dc516',
	},
	desktop: {
		label: 'Desktop',
		color: '#06b6d4',
	},
}

const areaData = [
	{ month: 'January', desktop: 1245, mobile: 400 },
	{ month: 'February', desktop: 700, mobile: 120 },
	{ month: 'March', desktop: 320, mobile: 150 },
	{ month: 'April', desktop: 320, mobile: 25 },
	{ month: 'May', desktop: 400, mobile: 89 },
	{ month: 'June', desktop: 75, mobile: 7 },
]

export function AdminChart() {
	return (
		<Chart.Root
			config={chartConfig}
			className="[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-red-500 [&_.recharts-radial-bar-background-sector]:fill-red-500"
		>
			<Chart.Area data={areaData}>
				<Chart.Cartesian stroke="#262626" />
				<Chart.Axis
					dataKey="month"
					tickFormatter={(value) => value.slice(0, 3)}
					className="text-zinc-600 bg-zinc-600"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
				/>

				<Chart.AreaGradientContainer>
					{Object.entries(chartConfig).map(([key]) => (
						<Chart.AreaGradient key={key} dataKey={key}>
							<Chart.AreaGradientStop
								dataKey={key}
								offset={5}
								stopOpacity={0.8}
							/>
							<Chart.AreaGradientStop
								dataKey={key}
								offset={95}
								stopOpacity={0.1}
							/>
						</Chart.AreaGradient>
					))}
				</Chart.AreaGradientContainer>

				<Chart.Tooltip
					inverse
					formatter={(value, name) => {
						return (
							<div className="flex justify-between w-full">
								<span className="text-amber-500">{name}</span>
								<span className="text-emerald-500">{value}</span>
							</div>
						)
					}}
				/>

				{Object.entries(chartConfig).map(([key]) => (
					<Chart.AreaGraph dataKey={key} key={key} />
				))}
			</Chart.Area>
		</Chart.Root>
	)
}
