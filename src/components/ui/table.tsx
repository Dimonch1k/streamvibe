import { cn } from '@/lib/utils'

export interface TableProps {
	columns: string[]
	data: string[][]
	className?: string
}

export function Table({ className, columns, data }: TableProps) {
	return (
		<div className={cn('overflow-x-auto', className)}>
			<table className='min-w-full border-collapse text-left text-sm'>
				<thead className='bg-black-06 font-semibold text-lg 2xl:text-xl text-white'>
					<tr>
						{columns.map(column => (
							<th
								key={column}
								className='border border-black-15 p-6 2xl:p-7.5'
							>
								{column}
							</th>
						))}
					</tr>
				</thead>

				<tbody className='font-medium text-base 2xl:text-lg text-grey-60'>
					{data.map((row, index) => (
						<tr key={index}>
							{row.map((cell, cellIndex) => (
								<td
									key={cellIndex}
									className='border border-black-15 p-6 2xl:p-7.5'
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
