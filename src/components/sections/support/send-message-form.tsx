'use client'

import { FieldError, Form } from 'react-aria-components'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import {
	ISupportMessage,
	SupportMessageFormValues
} from '@/types/sections/support.interface'

import { getFirstRHFErrorMessage } from '@/lib/utils/errors'
import { supportMessageSchema } from '@/lib/utils/support-validation'

export function SendMessageForm() {
	const {
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
		control
	} = useForm({
		resolver: zodResolver(supportMessageSchema),
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			message: '',
			terms: false
		}
	})

	const values = watch()

	const setFieldValue = <K extends keyof SupportMessageFormValues>(
		field: K,
		value: SupportMessageFormValues[K]
	) => {
		setValue(field as any, value as any, {
			shouldDirty: true,
			shouldValidate: true
		})
	}

	const onSubmit = (data: ISupportMessage) => {
		console.log(data)

		toast.success('Message sent successfully')
	}

	return (
		<Form
			onSubmit={handleSubmit(onSubmit, invalidErrors => {
				const message = getFirstRHFErrorMessage(invalidErrors)
				if (message) toast.error(message)
			})}
			className='bg-black-06 border border-black-15 rounded-[10px] p-6 flex flex-col gap-5 lg:gap-10 2xl:gap-12.5'
		>
			<div className='flex flex-col lg:flex-row gap-5 2xl:gap-12.5'>
				{/* First Name */}
				<Field>
					<Label htmlFor='first_name'>First Name</Label>
					<Input
						id='first_name'
						name='first_name'
						placeholder='Enter First Name'
						value={values.first_name}
						onChange={e => setFieldValue('first_name', e.target.value)}
					/>
				</Field>

				{/* Last Name */}
				<Field>
					<Label htmlFor='last_name'>Last Name</Label>
					<Input
						id='last_name'
						name='last_name'
						placeholder='Enter Last Name'
						value={values.last_name}
						onChange={e => setFieldValue('last_name', e.target.value)}
					/>
				</Field>
			</div>

			<div className='flex flex-col lg:flex-row gap-5 2xl:gap-12.5'>
				{/* Email */}
				<Field>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						name='email'
						type='email'
						placeholder='Enter your Email'
						value={values.email}
						onChange={e => setFieldValue('email', e.target.value)}
					/>
				</Field>

				{/* Phone */}
				<Field>
					<Label htmlFor='phone'>Phone</Label>
					<Input
						id='phone'
						name='phone'
						type='tel'
						placeholder='Enter Phone number'
						value={values.phone}
						onChange={e => setFieldValue('phone', e.target.value)}
					/>
				</Field>
			</div>

			{/* Message */}
			<Field className='h-full'>
				<Label htmlFor='message'>Message</Label>
				<Textarea
					id='message'
					name='message'
					placeholder='Enter your Message'
					className='flex-1 max-h-50'
					value={values.message}
					onChange={e => setFieldValue('message', e.target.value)}
				/>
			</Field>

			<div className='mt-auto w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 lg:gap-17.5'>
				{/* Checkbox */}
				<div className='flex flex-col gap-1'>
					<Field orientation='horizontal'>
						<Controller
							name='terms'
							control={control}
							render={({ field: { value, onChange } }) => (
								<Checkbox
									id='terms'
									name='terms'
									isSelected={value} // React Aria property API
									onChange={onChange} // React Aria property API
								/>
							)}
						/>
						<Label
							htmlFor='terms'
							className='text-grey-60 font-normal text-base 2xl:text-lg'
						>
							I agree with Terms of Use and Privacy Policy
						</Label>
					</Field>

					<FieldError className='text-red-45 text-sm font-medium pl-8 2xl:pl-9' />
				</div>

				{/* Send Button */}
				<Button
					variant='primary'
					type='submit'
				>
					Send Message
				</Button>
			</div>

			<FieldError className='text-red-45 text-sm font-medium mt-1' />
		</Form>
	)
}
