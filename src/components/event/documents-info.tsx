'use client'
import { FilePdfIcon } from '@phosphor-icons/react'
import { Box } from '../box'

export function DocumentsInfo() {
	return (
		<Box className="gap-5">
			<h3 className="text-2xl font-bold text-zinc-100">Documentos</h3>

			<div className="flex flex-col gap-4">
				<button type="button" className="flex gap-2 items-center">
					<FilePdfIcon size={24} className="text-cyan-500" />
					<span className="underline text-zinc-50 font-bold text-sm">
						AUTORIZAÇÃO DE PARTICIPAÇÃO.pdf
					</span>
				</button>
			</div>
		</Box>
	)
}
