'use client'
import clsx from 'clsx'
import { type HTMLMotionProps, motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

type RunnerButtonProps = HTMLMotionProps<'button'> & {
	variant?: 'event' | 'result'
	children: ReactNode
}

export function RunnerButton({
	children,
	variant = 'event',
	...props
}: RunnerButtonProps) {
	const buttonVariants = {
		initial: { scale: 1 },
		hover: {
			scale: 1.05,
			transition: { duration: 0.2 },
		},
		tap: { scale: 0.95 },
	}

	const rightEnterTrapezoid: Variants = {
		initial: {
			top: -10,
			right: 6,
			opacity: 0,
		},
		hover: {
			top: 0,
			right: 14,
			opacity: 1,
			transition: { duration: 0.3, ease: 'easeOut', delay: 0.05 },
		},
	}

	const leftExitTrapezoid = {
		initial: {
			left: 2,
			bottom: 0,
			opacity: 1,
		},
		hover: {
			left: -4,
			bottom: -16,
		},
	}

	const leftEnterTrapezoid: Variants = {
		initial: {
			left: 64,
			bottom: 88,
			opacity: 1,
		},
		hover: {
			left: 2,
			bottom: 0,
			opacity: 1,
			transition: { duration: 0.3, ease: 'easeOut', delay: 0.05 },
		},
	}

	const rightExitTrapezoid = {
		initial: {
			top: 0,
			right: 14,
			opacity: 1,
		},
		hover: {
			top: 88,
			right: 56,
			opacity: 0,
		},
	}

	const leftTrapezoidStyles = clsx(
		'w-[32px] border-b-[7px] absolute left-2 bottom-0 border-l-[6px] border-l-transparent border-r-[6px] rotate-[-54deg] border-r-transparent',
		{
			'border-b-zinc-100': variant === 'event',
			'border-b-slate-800': variant === 'result',
		},
	)

	const rightTrapezoidStyles = clsx(
		'w-[32px] border-b-[7px] absolute right-4 top-0 border-l-[6px] border-l-transparent border-r-[6px] rotate-116 border-r-transparent',
		{
			'border-b-zinc-100': variant === 'event',
			'border-b-slate-800': variant === 'result',
		},
	)

	return (
		<motion.button
			variants={buttonVariants}
			whileHover="hover"
			initial="initial"
			whileTap="tap"
			className={clsx(
				'bg-cyan-400 w-80 py-4 text-zinc-100 rounded-sm text-4xl font-bebas relative overflow-hidden transition-colors cursor-pointer',
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
						'border-t-48 absolute top-0 left-0 border-r-36 border-l-0 border-r-transparent border-l-transparent',
						{
							'border-t-cyan-500/80': variant === 'event',
							'border-t-slate-700/80': variant === 'result',
						},
					)}
				/>
				<span
					className={clsx(
						'w-[98px] border-b-10 absolute -left-6 top-8 border-l-[6px] border-l-transparent border-r-[6px] rotate-[-54deg] border-r-transparent',
						{
							'border-b-cyan-500/80': variant === 'event',
							'border-b-slate-700/80': variant === 'result',
						},
					)}
				/>
				<div>
					<motion.span
						variants={leftEnterTrapezoid}
						transition={{ duration: 0.2, ease: 'easeIn' }}
						className={leftTrapezoidStyles}
					/>
					<motion.span
						variants={leftExitTrapezoid}
						transition={{ duration: 0.1, ease: 'easeOut' }}
						className={leftTrapezoidStyles}
					/>
				</div>
			</div>
			{children}
			<div>
				<span
					className={clsx(
						'absolute bottom-0 right-0 border-b-72 border-b-cyan-500/80 border-l-36 border-l-transparent border-r-0 border-r-transparent w-20',
						{
							'border-b-cyan-500/80': variant === 'event',
							'border-b-slate-700/80': variant === 'result',
						},
					)}
				/>
				<span
					className={clsx(
						'w-[94px] border-b-12 absolute right-7 top-8 border-l-[6px] border-l-transparent border-r-[6px] rotate-[-64deg] border-r-transparent',
						{
							'border-b-cyan-500/80': variant === 'event',
							'border-b-slate-700/80': variant === 'result',
						},
					)}
				/>
				<span
					className={clsx(
						'w-[64px] border-b-[6px] absolute right-12 top-4 border-l-[6px] border-l-transparent border-r-[6px] rotate-116 border-r-transparent',
						{
							'border-b-cyan-500/80': variant === 'event',
							'border-b-slate-700/80': variant === 'result',
						},
					)}
				/>

				<div>
					<motion.span
						variants={rightEnterTrapezoid}
						transition={{ duration: 0.1, ease: 'easeIn' }}
						className={rightTrapezoidStyles}
					/>
					<motion.span
						variants={rightExitTrapezoid}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className={rightTrapezoidStyles}
					/>
				</div>
			</div>
		</motion.button>
	)
}
