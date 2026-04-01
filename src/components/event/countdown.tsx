'use client'

import { CalendarIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { Box } from '../box'
import { CountdownTimeUnit } from './countdown-time-unit'

export function Countdown() {
	return (
		<Box className="items-center justify-center gap-4 cursor-default">
			<strong className="text-zinc-400 font-bebas uppercase tracking-wide">
				Esse evento começa em
			</strong>

			<div className="flex gap-5">
				<CountdownTimeUnit label="Dias" value="24" />
				<CountdownTimeUnit label="Horas" value="36" />
				<CountdownTimeUnit label="Minutos" value="45" />
				<CountdownTimeUnit label="Segundos" value="00" />
			</div>

			<motion.button
				type="button"
				whileHover={{ y: -3 }}
				whileTap={{ scale: 0.98 }}
				className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors duration-200 group"
			>
				<CalendarIcon
					size={24}
					className="text-zinc-500 group-hover:text-cyan-500 transition-colors"
				/>

				<span className="text-sm font-medium uppercase tracking-wider">
					Adicionar ao calendário
				</span>
			</motion.button>
		</Box>
	)
}
