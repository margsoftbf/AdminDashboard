import {
	ArrowTrendingUpIcon,
	ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';

import { personsHome as persons } from '../../data/data';
const PersonsScore = () => {
	return (
		<div className='border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5 my-2'>
			<div className='mx-auto grid max-w-10xl gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 lg:px-2 xl:px-0'>
				{persons.map((person) => (
					<div
						key={person.id}
						className='flex flex-row items-center justify-between bg-lightGray rounded-lg gap-y-2 gap-x-1 border-t border-gray-900/5 px-1 py-1 md:px-2 md:py-2'
					>
						<div className='w-3/5 h-full flex flex-col items-start p-2'>
							<div className='flex items-center'>
								<div>
									<img src={person.avatar} className='w-8 h-8' />
								</div>
								<div className='flex flex-col text-sm text-left ml-2'>
									<p className='font-semibold text-white'>{person.name}</p>
									<p className='text-stone-400 text-xs'>{person.workProfile}</p>
								</div>
							</div>
							<div className='w-full text-left mt-2'>
								<p className='text-stone-400 text-sm my-1 font-sans'>
									{person.task} from 6 tasks completed
								</p>
								<div className='w-full rounded-full h-2.5 bg-lighterGray'>
									<div
										className={`bg-green-600 h-2.5 rounded-full w-${person.task}/6`}
									></div>
								</div>
							</div>
						</div>
						<div className='w-2/5 flex flex-col items-center'>
							{person.trend ? (
								<>
									<p>
										<ArrowTrendingUpIcon className='h-7 w-7 text-green-500' />
									</p>
									<p className='text-green-500 font-sans'>${person.money}</p>
								</>
							) : (
								<>
									<p>
										<ArrowTrendingDownIcon className='h-7 w-7 text-red-500' />
									</p>
									<p className='text-red-500 font-sans'>-${person.money}</p>
								</>
							)}
							<p className='text-base text-stone-400 font-sans'>Last 6 month</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PersonsScore;
