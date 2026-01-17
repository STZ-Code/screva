import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type RunnerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'event' | 'result'
}

export function RunnerButton({
	children,
	variant = 'event',
	...props
}: RunnerButtonProps) {
	return (
		<button
			className={clsx(
				'bg-cyan-400 w-80 py-4 text-zinc-100 text-4xl font-bebas relative overflow-hidden',
				{
					'bg-cyan-400': variant === 'event',
					'bg-slate-600': variant === 'result',
				},
			)}
			type="button"
			{...props}
		>
			<div>
				<span
					className={clsx(
						'border-t-[48px] absolute top-0 left-0 border-r-[36px] border-l-0 border-r-transparent border-l-transparent',
						{
							'border-t-cyan-500/80': variant === 'event',
							'border-t-slate-700/80': variant === 'result',
						},
					)}
				/>
				<span
					className={clsx(
						'w-[94px] border-b-[10px] absolute -left-6 top-8 border-l-[6px] border-l-transparent border-r-[6px] -rotate-[54deg] border-r-transparent',
						{
							'border-b-cyan-500/80': variant === 'event',
							'border-b-slate-700/80': variant === 'result',
						},
					)}
				/>
				<span
					className={clsx(
						'w-[32px] border-b-[7px] absolute left-2 bottom-0 border-b-zinc-100 border-l-[6px] border-l-transparent border-r-[6px] -rotate-[54deg] border-r-transparent',
						{
							'border-b-zinc-100': variant === 'event',
							'border-b-slate-800': variant === 'result',
						},
					)}
				/>
			</div>
			{children}
			<div>
				<span
					className={clsx(
						'absolute bottom-0 right-0 border-b-[72px] border-b-cyan-500/80 border-l-[36px] border-l-transparent border-r-0 border-r-transparent w-20',
						{
							'border-b-cyan-500/80': variant === 'event',
							'border-b-slate-700/80': variant === 'result',
						},
					)}
				/>
				<span
					className={clsx(
						'w-[94px] border-b-[12px] absolute right-7 top-8 border-l-[6px] border-l-transparent border-r-[6px] -rotate-[64deg] border-r-transparent',
						{
							'border-b-cyan-500/80': variant === 'event',
							'border-b-slate-700/80': variant === 'result',
						},
					)}
				/>
				<span
					className={clsx(
						'w-[64px] border-b-[6px] absolute right-12 top-4 border-l-[6px] border-l-transparent border-r-[6px] -rotate-[64deg] border-r-transparent',
						{
							'border-b-cyan-500/80': variant === 'event',
							'border-b-slate-700/80': variant === 'result',
						},
					)}
				/>
				<span
					className={clsx(
						'w-[32px] border-b-[7px] absolute right-1 top-0 border-l-[6px] border-l-transparent border-r-[6px] rotate-[128deg] border-r-transparent',
						{
							'border-b-zinc-100': variant === 'event',
							'border-b-slate-800': variant === 'result',
						},
					)}
				/>
			</div>
		</button>
	)
}
