'use client'
import { FilePdfIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { Box } from '../box'
import { BoxHeading } from '../box-heading'

export function DocumentsInfo() {
	return (
		<Box className="gap-5 rounded-none lg:rounded-2xl">
			<BoxHeading>Documentos</BoxHeading>

			<div className="flex flex-col gap-3">
				<motion.button
					whileHover={{ x: 5 }}
					className="flex gap-3 items-center p-3 rounded-xl border border-zinc-800 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
				>
					<FilePdfIcon
						size={28}
						weight="fill"
						className="text-red-500 group-hover:text-red-400"
					/>
					<span className="text-zinc-300 font-bold text-xs text-left leading-tight uppercase tracking-tight">
						AUTORIZAÇÃO DE PARTICIPAÇÃO.pdf
					</span>
				</motion.button>
			</div>
		</Box>
	)
}
