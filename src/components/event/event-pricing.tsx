'use client'
import { motion } from 'motion/react'
import { type CategoryAvailability, CategoryBadge } from './category-badge'

interface Category {
	id: string
	name: string
	price: number
	fee: number
	badge: CategoryAvailability
}

interface EventPricingTableProps {
	categories: Category[]
}

export function EventPricingTable({ categories }: EventPricingTableProps) {
	return (
		<div className="w-full">
			<table className="w-full text-left border-collapse">
				<thead>
					<tr className="border-b-2 border-zinc-800">
						<th className="pb-2 px-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
							Nome
						</th>
						<th className="pb-2 px-2 text-right text-xs font-medium uppercase tracking-wider text-zinc-500">
							Valor
						</th>
					</tr>
				</thead>

				<motion.tbody
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					transition={{ staggerChildren: 0.1 }}
					className="divide-y divide-zinc-800"
				>
					{categories.map((category) => (
						<motion.tr
							variants={{
								hidden: { opacity: 0, x: -20 },
								visible: { opacity: 1, x: 0 },
							}}
							key={category.id}
							className="group border-b border-zinc-800 hover:bg-white/2 transition-colors"
						>
							<td className="py-2 px-2">
								<h3 className="flex gap-2 text-base xl:text-lg font-bold uppercase tracking-wide text-zinc-100 transition-colors group-hover:text-cyan-400">
									{category.name}
									<CategoryBadge type={category.badge} />
								</h3>
							</td>
							<td className="py-2 px-2 text-right">
								<div className="flex flex-col items-end">
									<span className="text-lg font-bold text-zinc-100">
										{new Intl.NumberFormat('pt-BR', {
											style: 'currency',
											currency: 'BRL',
										}).format(category.price)}
									</span>
									<span className="text-[10px] text-zinc-500">
										(+{' '}
										{new Intl.NumberFormat('pt-BR', {
											style: 'currency',
											currency: 'BRL',
										}).format(category.fee)}{' '}
										em taxas)
									</span>
								</div>
							</td>
						</motion.tr>
					))}
				</motion.tbody>
			</table>
		</div>
	)
}
