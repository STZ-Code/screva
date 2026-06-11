import { motion } from 'motion/react'

export function CountdownTimeUnit({
	value,
	label,
}: {
	value: string
	label: string
}) {
	return (
		<div className="flex flex-col gap-1">
			<motion.span
				key={value}
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className="font-orbitron text-3xl 2xl:text-5xl text-zinc-100 font-bold"
			>
				{value}
			</motion.span>
			<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
				{label}
			</span>
		</div>
	)
}
