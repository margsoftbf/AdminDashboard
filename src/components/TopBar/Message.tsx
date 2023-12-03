import { personsData } from '../../data/data';

const Message = () => {
	return (
		<div className='absolute top-12 -right-16 md:right-0 w-[300px] md:w-[330px] bg-white text-black rounded-md  px-4'>
			{personsData.map((person) => (
				<div
					key={person.id}
					className='pointer-events-auto text-xs flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 my-2 py-2 relative cursor-pointer hover:bg-stone-100'
				>
					<div className='w-0 flex-1 p-0'>
						<div className='flex h-full items-center'>
							<div className='flex-shrink-0'>
								<img
									src={person.avatar}
									alt={person.avatarAlt}
									className='h-10 w-10 rounded-full ml-1'
								/>
							</div>
							<div className='ml-1 w-0 flex-1'>
								<p className='text-xs font-semibold text-gray-900'>
									{person.name}
								</p>
								<p className='mt-1 text-xs text-gray-500'>{person.message}</p>
							</div>
						</div>
					</div>
					<div className='flex border-l border-gray-200'>
						<button
							type='button'
							className='flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
						>
							Reply
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Message;
