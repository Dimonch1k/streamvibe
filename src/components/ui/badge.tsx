import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
	'flex gap-0.5 px-2 py-1.5 lg:px-2.5 text-sm 2xl:text-lg rounded-full [&>svg]:size-5 2xl:[&>svg]:size-6 text-nowrap',
	{
		variants: {
			variant: {
				default: 'bg-black-08 border border-black-15 text-grey-60 font-medium'
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
