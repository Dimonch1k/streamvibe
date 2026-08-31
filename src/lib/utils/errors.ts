import type { FieldErrors } from 'react-hook-form'

export function getFirstRHFErrorMessage(errors: FieldErrors): string | null {
	const queue: unknown[] = Object.values(errors)
	while (queue.length) {
		const item = queue.shift() as any
		if (!item) continue
		if (typeof item.message === 'string' && item.message) return item.message
		if (typeof item === 'object') queue.push(...Object.values(item))
	}
	return null
}
