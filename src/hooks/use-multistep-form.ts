'use client'

import { useContext } from 'react'

import type { FieldValues } from 'react-hook-form'

import { MultiStepContext } from '@/context/multistep-context'
import type { MultiStepContextValue } from '@/context/multistep-types'

type AnyValues = Record<string, any>

export function useMultiStepForm<TValues extends FieldValues = AnyValues>() {
	const context = useContext(MultiStepContext)

	if (!context) {
		throw new Error('useMultiStepForm must be used within MultiStepProvider')
	}

	return context as MultiStepContextValue<TValues>
}
