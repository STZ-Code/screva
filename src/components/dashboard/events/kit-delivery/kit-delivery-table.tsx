'use client'

import {
	CheckCircleIcon,
	FunnelIcon,
	MagnifyingGlassIcon,
	SpinnerIcon,
} from '@phosphor-icons/react'
import {
	Avatar,
	Field,
	type STZColumnDef,
	Table,
	TablePagination,
} from '@stz-code/ui'
import type { Dispatch, SetStateAction } from 'react'
import { StatusTag } from '@/components/status-tag'
import { useBreakpoint } from '@/hooks/use-breakpoint'
import { formatDate } from '@/utils/format-date'
import { cn } from '@/utils/utils'
import type { AthleteKit } from './kit-delivery-content'

export function KitDeliveryTable({
	setAthleteSelected,
}: {
	setAthleteSelected: Dispatch<SetStateAction<AthleteKit | null>>
}) {
	const desktop = useBreakpoint('lg')

	const columns: STZColumnDef<AthleteKit>[] = [
		{
			accessorKey: 'chest_number',
			header: () => <p className="w-full text-center">Nº</p>,
			size: 10,
			cell: (info) => (
				<p className="w-full text-center">
					{info.cell.row.original.chest_number}
				</p>
			),
		},
		{
			accessorKey: 'name',
			header: 'Nome',
			size: desktop ? 112 : 40,
			cell: (info) => {
				return (
					<div className="flex gap-4 items-center w-full pl-3 xl:py-0 py-2">
						<Avatar.Root className="size-9 rounded-full hidden xl:block">
							<Avatar.Image src="https://github.com/garcez17.png" />
							<Avatar.Fallback>Picos Pro Race</Avatar.Fallback>
						</Avatar.Root>
						<div className="min-w-0">
							<p className="text-zinc-200 font-medium truncate">
								{info.row.original.name}
							</p>
						</div>
					</div>
				)
			},
		},
		{
			accessorKey: 'cpf',
			header: 'CPF',
			size: 32,
		},
		{
			accessorKey: 'birthday',
			header: 'Data Nasc.',
			size: 32,
			cell: (info) => {
				const rawDate = info.row.original.birthday

				const formattedDate = formatDate(rawDate)

				return (
					<div>
						<p>{formattedDate}</p>
					</div>
				)
			},
		},
		{
			accessorKey: 'category',
			header: 'Categoria',
			size: 24,
		},
		{
			accessorKey: 'status',
			header: 'Status',
			size: 32,
			cell: (info) => (
				<StatusTag.Root>
					<StatusTag.Icon
						icon={
							info.row.original.status === 'pending'
								? SpinnerIcon
								: CheckCircleIcon
						}
						weight={
							info.row.original.status === 'delivered' ? 'fill' : 'regular'
						}
						className={cn('size-4', {
							'text-emerald-500': info.row.original.status === 'delivered',
							'text-orange-400': info.row.original.status === 'pending',
						})}
					/>
					<StatusTag.Label className="text-zinc-200 text-xs font-medium">
						{info.row.original.status === 'pending' ? 'Pendente' : 'Entregue'}
					</StatusTag.Label>
				</StatusTag.Root>
			),
		},
	]

	const data: AthleteKit[] = [
		{
			id: '728ed52f',
			sub_cod: 'AB154C',
			chest_number: '1',
			name: 'Vinicius Lemos de Carvalho',
			status: 'delivered',
			birthday: new Date(2000, 4, 19),
			cpf: '930.426.030-24',
			category: 'ELITE',
			modality: 'LIGHT',
			kit_type: 'Premium',
			gender: 'Masculino',
			team: 'Gil Bala',
		},
		{
			id: '728e322f',
			sub_cod: 'AB142452C',
			chest_number: '2',
			name: 'Lucas Alberto Silva dos Anjos',
			status: 'pending',
			birthday: new Date(2002, 4, 16),
			cpf: '622.999.970-67',
			category: 'MASTER A',
			modality: 'PRO',
			kit_type: 'Básico',
			gender: 'Feminino',
			team: 'Salvatore Team',
		},
		{
			id: '7285452f',
			sub_cod: 'A12B154f',
			chest_number: '3',
			name: 'Alexandre Macedo Nascimento',
			status: 'pending',
			birthday: new Date(1996, 8, 15),
			cpf: '071.168.670-07',
			category: 'ELITE',
			modality: 'PRO',
			kit_type: 'Premium',
			gender: 'Feminino',
			team: 'Canelas Run',
		},
		{
			id: '728egrew2f',
			sub_cod: 'Afb154x',
			chest_number: '4',
			name: 'Joel de Oliveira Sá',
			status: 'delivered',
			birthday: new Date(2006, 11, 31),
			cpf: '487.204.690-04',
			category: 'ELITE',
			modality: 'SPORT',
			kit_type: 'Premium',
			gender: 'Masculino',
			team: 'ADRENALINA BIKE',
		},
		{
			id: '728egrew24134f',
			sub_cod: 'GBS541f',
			chest_number: '5',
			name: 'Gabriel Santos Garcez',
			status: 'pending',
			birthday: new Date(1991, 11, 31),
			cpf: '722.055.710-87',
			category: 'MASTER A',
			modality: 'LIGHT',
			kit_type: 'Premium',
			gender: 'Feminino',
			team: 'EMTHOS',
		},
	]

	function handleSelectAthlete(data: AthleteKit) {
		setAthleteSelected(data)
	}

	return (
		<Table.Root
			columns={columns}
			data={data}
			hideFilters={['name']}
			config={{
				columnVisibility: {
					birthday: desktop,
					cpf: desktop,
					category: desktop,
				},
			}}
		>
			<div className="flex flex-col flex-1">
				<div className="flex items-center justify-between mb-2 gap-4">
					<Table.FilterInput
						id="name"
						className="bg-neutral-900"
						fieldClassName="w-full"
					>
						<Field.Icon
							icon={MagnifyingGlassIcon}
							className="text-zinc-600 group-focus-within:text-cyan-500"
						/>
					</Table.FilterInput>

					<Table.FilterDropdown>
						<Table.FilterDropdownTrigger className="bg-neutral-900 w-48 border border-zinc-800 flex items-center text-zinc-500 font-semibold">
							<FunnelIcon size={24} className="text-zinc-500" />
							{desktop && 'Mais filtros'}
						</Table.FilterDropdownTrigger>
						<Table.FilterDropdownContent>
							<Table.FilterDropdownItem id="subscribers">
								Inscritos
							</Table.FilterDropdownItem>
							<Table.FilterDropdownItem id="status">
								Status
							</Table.FilterDropdownItem>
						</Table.FilterDropdownContent>
					</Table.FilterDropdown>
				</div>

				<Table.Filters>
					<Table.ClearFilters>Limpar Filtros</Table.ClearFilters>
				</Table.Filters>

				<Table.Container className="border-zinc-800 bg-neutral-900 mt-3">
					<Table.Content>
						<Table.Header className="text-zinc-400 [&_tr]:border-zinc-800" />

						<Table.Body>
							<Table.Row
								onRowClick={handleSelectAthlete}
								className="border-zinc-800 hover:bg-zinc-700/50 transition-colors cursor-pointer"
							>
								<Table.Fallback>Sem resultados encontrados</Table.Fallback>
							</Table.Row>
						</Table.Body>
					</Table.Content>

					<TablePagination.Root className="border-zinc-800">
						<TablePagination.Prev className="border-zinc-500 text-zinc-300 disabled:border-zinc-600 hover:bg-zinc-100/10 disabled:text-zinc-600 cursor-pointer" />
						<TablePagination.Items
							itemClassName="bg-zinc-600 hover:bg-zinc-700 cursor-pointer"
							activeClassName="bg-cyan-600 text-zinc-200 hover:bg-cyan-700 cursor-pointer"
						/>
						<TablePagination.Next className="border-zinc-500 text-zinc-300 disabled:border-zinc-600 hover:bg-zinc-100/10 disabled:text-zinc-600 cursor-pointer" />
					</TablePagination.Root>
				</Table.Container>
			</div>
		</Table.Root>
	)
}
