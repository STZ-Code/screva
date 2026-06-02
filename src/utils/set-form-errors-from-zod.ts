import type { FieldValues, Path, UseFormSetError } from 'react-hook-form'
import type { ZodError } from 'zod'

export function setFormErrorsFromZod<TValues extends FieldValues>(
	error: ZodError,
	setError: UseFormSetError<TValues>,
) {
	for (const issue of error.issues) {
		if (issue.path.length === 0) continue

		const path = issue.path.join('.') as Path<TValues>

		setError(path, {
			type: 'manual',
			message: issue.message,
		})
	}
}
