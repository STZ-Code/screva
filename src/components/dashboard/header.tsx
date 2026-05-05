'use client'
import {
	CaretUpDownIcon,
	LineVerticalIcon,
	PlusCircleIcon,
} from '@phosphor-icons/react'
import { Avatar, Dropdown, Sheet } from '@stz-code/ui'
import { TabNavigator } from '@stz-code/ui/layout'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MiniLogo } from '@/assets/images/mini-logo'
import { Tag } from '../tag'
import { ProfileButton } from './profile-button'
import { CreateTeamSheet } from './teams/create-team-sheet'

export function Header() {
	const pathname = usePathname()

	return (
		<header className="px-12 pt-8 bg-dashboard-header flex justify-between items-start">
			<div className="flex flex-col gap-8">
				<div className="flex">
					<MiniLogo className="size-8 mr-4" />

					<div className="flex gap-2">
						<LineVerticalIcon className="size-8 rotate-[24deg] text-zinc-600" />

						<Dropdown.Root>
							<Dropdown.Trigger className="cursor-pointer">
								<div className="flex w-60 items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-cyan-600">
									<Avatar.Root className="size-7 rounded">
										<Avatar.Image src="https://github.com/garcez17.png" />
										<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
									</Avatar.Root>
									<span className="text-zinc-200 truncate">Gabriel Garcez</span>

									<Tag className="bg-zinc-700">
										<span className="text-zinc-300 text-xs font-semibold">
											Admin
										</span>
									</Tag>
									<CaretUpDownIcon
										className="ml-auto size-4 text-zinc-200"
										weight="bold"
									/>
								</div>
							</Dropdown.Trigger>

							<Dropdown.Content
								align="end"
								alignOffset={-8}
								sideOffset={12}
								className="bg-zinc-900 w-64 border-zinc-700"
							>
								<Dropdown.Group>
									<Dropdown.Label>Contas</Dropdown.Label>

									<Dropdown.Item className="hover:bg-zinc-600 transition-colors outline-none rounded">
										<Avatar.Root className="size-6 rounded">
											<Avatar.Image src="https://github.com/garcez17.png" />
											<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
										</Avatar.Root>
										<span className="line-clamp-1">Gabriel Garcez</span>
									</Dropdown.Item>
								</Dropdown.Group>

								<Dropdown.Group>
									<Dropdown.Label>Equipes</Dropdown.Label>

									<Dropdown.Item className="hover:bg-zinc-600 transition-colors outline-none rounded">
										<Avatar.Root className="size-6 rounded">
											<Avatar.Image src="https://github.com/diego3g.png" />
											<Avatar.Fallback>Pro Race</Avatar.Fallback>
										</Avatar.Root>
										<span className="line-clamp-1">Pro Race Organizações</span>
									</Dropdown.Item>
								</Dropdown.Group>

								<Dropdown.Separator className="text-zinc-300 bg-zinc-700" />

								<Dropdown.Item
									className="hover:bg-zinc-600 transition-colors cursor-pointer outline-none rounded"
									asChild
								>
									<CreateTeamSheet>
										<Sheet.Trigger className="outline-none px-2 py-2 w-full text-sm hover:bg-zinc-600 transition-colors normal-case font-semibold flex gap-2 line-clamp-1">
											<PlusCircleIcon className="size-5 mr-2" />
											Criar nova equipe
										</Sheet.Trigger>
									</CreateTeamSheet>
								</Dropdown.Item>
							</Dropdown.Content>
						</Dropdown.Root>
						<Dropdown.Root>
							<Dropdown.Trigger className="cursor-pointer">
								<div className="flex min-w-24 w-fit max-w-60 items-center gap-2 rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-cyan-600">
									<span className="text-zinc-200 truncate">Equipe</span>

									<CaretUpDownIcon
										className="ml-auto size-4 text-zinc-200"
										weight="bold"
									/>
								</div>
							</Dropdown.Trigger>

							<Dropdown.Content
								align="end"
								alignOffset={-8}
								sideOffset={12}
								className="bg-zinc-900 w-64 border-zinc-700"
							>
								<Dropdown.Group>
									<Dropdown.Label>Contas</Dropdown.Label>

									<Dropdown.Item className="hover:bg-zinc-600 transition-colors outline-none rounded">
										<Avatar.Root className="size-6 rounded">
											<Avatar.Image src="https://github.com/garcez17.png" />
											<Avatar.Fallback>Gabriel Garcez</Avatar.Fallback>
										</Avatar.Root>
										<span className="line-clamp-1">Gabriel Garcez</span>
									</Dropdown.Item>
								</Dropdown.Group>

								<Dropdown.Group>
									<Dropdown.Label>Equipes</Dropdown.Label>

									<Dropdown.Item className="hover:bg-zinc-600 transition-colors outline-none rounded">
										<Avatar.Root className="size-6 rounded">
											<Avatar.Image src="https://github.com/diego3g.png" />
											<Avatar.Fallback>Pro Race</Avatar.Fallback>
										</Avatar.Root>
										<span className="line-clamp-1">Pro Race Organizações</span>
									</Dropdown.Item>
								</Dropdown.Group>

								<Dropdown.Separator className="text-zinc-300 bg-zinc-700" />

								<Dropdown.Item
									className="hover:bg-zinc-600 transition-colors cursor-pointer outline-none rounded"
									asChild
								>
									<CreateTeamSheet>
										<Sheet.Trigger className="outline-none px-2 py-2 w-full text-sm hover:bg-zinc-600 transition-colors normal-case font-semibold flex gap-2 line-clamp-1">
											<PlusCircleIcon className="size-5 mr-2" />
											Criar nova equipe
										</Sheet.Trigger>
									</CreateTeamSheet>
								</Dropdown.Item>
							</Dropdown.Content>
						</Dropdown.Root>
					</div>
				</div>

				<div className="flex relative flex-1">
					<TabNavigator.Root active={pathname} className="h-9">
						<TabNavigator.Control className="gap-4">
							<TabNavigator.Item
								href="/dashboard"
								as={Link}
								className="font-semibold text-zinc-50 text-sm"
							>
								Visão Geral
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/dashboard/eventos"
								as={Link}
								className="font-semibold text-zinc-400 text-sm"
							>
								Eventos
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/dashboard/equipes"
								as={Link}
								className="font-semibold text-zinc-400 text-sm"
							>
								Equipes
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/dashboard/financeiro"
								as={Link}
								className="font-semibold text-zinc-400 text-sm"
							>
								Financeiro
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/dashboard/solicitacoes"
								as={Link}
								className="font-semibold text-zinc-400 text-sm"
							>
								Solicitações
							</TabNavigator.Item>

							<TabNavigator.Item
								href="/dashboard/configuracoes/perfil"
								as={Link}
								className="font-semibold text-zinc-400 text-sm"
							>
								Configurações
							</TabNavigator.Item>
						</TabNavigator.Control>
						<TabNavigator.Bar className="bg-cyan-500 h-[3px]" />
					</TabNavigator.Root>
				</div>
			</div>

			<ProfileButton />
		</header>
	)
}
