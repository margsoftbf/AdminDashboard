import { personsData } from '../../../data/data';
const HomeTeam = () => {
	return (
		<div className='bg-lightGray rounded-md max-h-[530px] overflow-auto'>
			<h2 className='font-semibold mt-2 text-xl text-yellow-200'>Team</h2>
			<ul role='list' className='divide-y bg-lightGray px-2'>
				{personsData.map((person) => (
					<li
						key={person.email}
						className='flex justify-between gap-x-6 py-4 cursor-pointer hover:bg-lighterGray'
					>
						<div className='flex min-w-0 gap-x-4'>
							<img
								className='h-12 w-12 flex-none rounded-full bg-gray-800'
								src={person.avatar}
								alt=''
							/>
							<div className='min-w-0 flex-auto'>
								<p className='text-sm font-semibold leading-6 text-white'>
									{person.name}
								</p>
								<p className='mt-1 truncate text-xs leading-5 text-gray-400'>
									{person.email}
								</p>
							</div>
						</div>
						<div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
							<p className='text-sm leading-6 text-white'>{person.role}</p>
							{person.lastSeen ? (
								<p className='mt-1 text-xs leading-5 text-gray-400'>
									Last seen{' '}
									<time dateTime={person.lastSeenDateTime ?? undefined}>
										{person.lastSeen}
									</time>
								</p>
							) : (
								<div className='mt-1 flex items-center gap-x-1.5'>
									<div className='flex-none rounded-full bg-emerald-500/20 p-1'>
										<div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
									</div>
									<p className='text-xs leading-5 text-gray-400'>Online</p>
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HomeTeam;
