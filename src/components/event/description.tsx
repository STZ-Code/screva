import { Box } from '../box'
import { BoxHeading } from '../box-heading'

export function EventDescription() {
	return (
		<Box className="gap-4 rounded-none xl:rounded-2xl">
			<BoxHeading>Descrição</BoxHeading>
			<p className="text-sm text-zinc-300">
				A edição 2025 do Circuito Sesc de Corridas chegou com tudo em
				Pernambuco! De outubro a novembro, correremos por Recife, Serra Talhada,
				Petrolina, Jaboatão dos Guararapes e Garanhuns serão palco de provas que
				reúnem desde corredores iniciantes até atletas mais experientes.
			</p>
		</Box>
	)
}
