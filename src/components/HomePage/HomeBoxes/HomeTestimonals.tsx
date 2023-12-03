import { personsData } from '../../../data/data';
const HomeTestimonals = () => {
	return (
		<div className='bg-lightGray rounded-md max-h-[530px] overflow-y-auto'>
			<h2 className=' ml-2 font-semibold mt-2 text-xl text-white'>
				Testimonals
			</h2>
			<ul role='list' className='divide-y divide-gray-100 px-4'>
				{personsData.map((person) => (
					<li key={person.id} className='flex gap-x-4 py-5'>
						<img
							className='h-12 w-12 flex-none rounded-full bg-gray-50'
							src={person.avatar}
							alt={person.avatarAlt}
						/>
						<div className='flex-auto'>
							<div className='flex items-baseline justify-between gap-x-4'>
								<p className='text-sm font-semibold leading-6 text-white'>
									{person.name}
								</p>
								<p className='flex-none text-xs text-gray-300'>
									{person.lastSeenDateTime && (
										<time dateTime={person.lastSeenDateTime}>
											{person.lastSeen}
										</time>
									)}
								</p>
							</div>
							<p className='mt-1 line-clamp-2 text-xs leading-6 text-gray-400 text-left'>
								{person.content}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HomeTestimonals;
