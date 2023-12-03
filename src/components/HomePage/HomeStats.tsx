import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
const stats = [
	{
		id: 1,
		name: 'Total Subscribers',
		stat: '73,210',
		previousStat: '71,897',
		change: '1,313',
		changeType: 'increase',
	},
	{
		id: 2,
		name: 'Avg. Open Rate',
		stat: '57.89%',
		previousStat: '58.16%',
		change: '0.27%',
		changeType: 'decrease',
	},
	{
		id: 3,
		name: 'Avg. Click Rate',
		stat: '22.35%',
		previousStat: '24.57%',
		change: '2.22%',
		changeType: 'decrease',
	},
	{
		id: 4,
		name: 'Avg. New Subscriber',
		stat: '30.11%',
		previousStat: '28.62%',
		change: '1.49%',
		changeType: 'increase',
	},
	{
		id: 5,
		name: 'Avg. Customer',
		stat: '26.75%',
		previousStat: '24.57%',
		change: '2.18%',
		changeType: 'increase',
	},
	{
		id: 6,
		name: 'Avg. Invoices',
		stat: '23.25%',
		previousStat: '24.57%',
		change: '1.32%',
		changeType: 'decrease',
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const HomeStats = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='mt-5 grid gap-5 overflow-hidden rounded-lg shadow grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6'>
				{stats.map((item) => (
					<div
						key={item.id}
						className='px-4 py-5 sm:p-6 bg-lightGray rounded-md border border-lightViolet'
					>
						<div className='text-base font-normal text-gray-100'>
							{item.name}
						</div>
						<div className='mt-1 flex flex- items-baseline justify-between'>
							<div className='flex items-baseline text-2xl font-semibold text-indigo-600 font-sans'>
								{item.stat}
								<span className='ml-2 text-sm font-medium text-gray-500'>
									from {item.previousStat}
								</span>
							</div>

							<div
								className={classNames(
									item.changeType === 'increase'
										? 'bg-green-100 text-green-800'
										: 'bg-red-100 text-red-800',
									'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
								)}
							>
								{item.changeType === 'increase' ? (
									<ArrowUpIcon
										className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500'
										aria-hidden='true'
									/>
								) : (
									<ArrowDownIcon
										className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500'
										aria-hidden='true'
									/>
								)}

								<span className='sr-only'>
									{' '}
									{item.changeType === 'increase'
										? 'Increased'
										: 'Decreased'}{' '}
									by{' '}
								</span>
								{item.change}
							</div>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default HomeStats;
