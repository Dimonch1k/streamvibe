'use client'

import Image from 'next/image'

import { SendMessageForm } from './send-message-form'

export function SendMessageSection() {
	return (
		<div className='w-full grid grid-cols-1 lg:grid-cols-[5.33fr_9.76fr] gap-12.5 2xl:gap-20'>
			<div className='flex flex-col gap-7.5 lg:gap-10 2xl:gap-12.5'>
				<div className='flex flex-col gap-2.5 2xl:gap-3.5'>
					{/* Title */}
					<h2 className='text-white font-bold leading-[150%] text-[28px] lg:text-[38px] 2xl:text-5xl'>
						Welcome to our support page
					</h2>

					{/* Description */}
					<p className='text-grey-60 font-normal leading-[150%] text-sm lg:text-base 2xl:text-lg'>
						We're here to help you with any problems you may be having with our
						product.
					</p>
				</div>

				{/* Image */}
				<div className='bg-black-08 border-6 border-black-15 rounded-md'>
					<Image
						src='/support/support.png'
						alt='Support'
						width={235}
						height={252}
						className='w-full h-full'
						draggable={false}
					/>
				</div>
			</div>

			{/* Form */}
			<SendMessageForm />
		</div>
	)
}
