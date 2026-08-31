import { z } from 'zod'

export const supportMessageSchema = z.object({
	first_name: z.string().trim().min(1, 'First name is required'),
	last_name: z.string().trim().min(1, 'Last name is required'),
	email: z.email('Invalid email address').trim(),
	phone: z.string().optional(),
	message: z.string().trim().min(1, 'Message is required'),
	terms: z
		.boolean()
		.refine(
			value => value === true,
			'You must agree to the terms and conditions'
		)
})
