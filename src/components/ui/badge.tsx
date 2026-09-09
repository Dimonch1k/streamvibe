import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
	'flex items-center gap-0.5 pl-1 2xl:pl-1.5 pr-2 2xl:pr-2.5 py-1 2xl:py-1.5 text-xs 2xl:text-base rounded-full leading-[150%] [&>svg]:size-5 2xl:[&>svg]:size-6 [&>svg]:grid [&>svg]:place-content-center text-nowrap',
	{
		variants: {
			variant: {
				default: 'bg-black-08 ring ring-black-15 text-grey-60 font-medium'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

function Badge({
	className,
	variant = 'default',
	render,
	...props
}: React.ComponentProps<'span'> &
	VariantProps<typeof badgeVariants> & {
		render?: (props: React.HTMLAttributes<HTMLElement>) => React.ReactNode
	}) {
	if (render) {
		const renderProps = {
			'data-slot': 'badge',
			'data-variant': variant,
			className: cn(badgeVariants({ variant }), className),
			...props
		}
		return render(renderProps)
	}
	return (
		<span
			data-slot='badge'
			data-variant={variant}
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	)
}

export { Badge, badgeVariants }
