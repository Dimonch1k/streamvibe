export interface ISupportMessage {
	first_name: string
	last_name: string
	email: string
	phone?: string
	message: string
	terms: boolean
}

export type SupportMessageFormValues = ISupportMessage
