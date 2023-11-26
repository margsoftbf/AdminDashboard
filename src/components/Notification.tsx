import { useEffect, useState } from 'react';
import { personsData } from '../data/data';
const Notification = () => {
	const [persons, setPersons] = useState(personsData);
	const [checkedCount, setCheckedCount] = useState(0);

	useEffect(() => {
		const countChecked = persons.reduce(
			(total, person) => total + (person.checked ? 0 : 1),
			0
		);

		setCheckedCount(countChecked);
	}, [persons]);

	const handleMarkAllRead = () => {
		const updatePersons = persons.map((person) => ({
			...person,
			checked: true,
		}));
		setPersons(updatePersons);
	};

	return (
		<div className='absolute top-12 right-0 w-[280px] md:w-[330px] bg-white text-black rounded-md  px-4'>
			<div className='flex justify-between text-[14px] font-semibold mt-2 mb-4'>
				<p className='flex items-center justify-center'>
					Notification
					<span className=' bg-[#0a327b] text-white rounded-xl m-1 px-2 py-1'>
						{checkedCount}
					</span>
				</p>
				<button onClick={handleMarkAllRead}>Mark all as read</button>
			</div>
			{persons.map((person) => (
				<div
					key={person.id}
					className={`pointer-events-auto text-xs flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 my-2 relative ${
						person.checked ? 'bg-white' : 'bg-red-100'
					}`}
				>
					{person.checked ? null : (
						<span className='absolute inline-block w-2 h-2 rounded-full bg-red-400 right-1 top-1'></span>
					)}
					<div className='w-0 flex-1 p-1'>
						<div className='flex items-start'>
							<div className='flex-shrink-0 pt-0.5'>
								<img
									src={person.avatar}
									alt='Avatar'
									className='h-10 w-10 rounded-full'
								/>
							</div>
							<div className='ml-3 w-0 flex-1'>
								<p className='text-sm text-gray-900 font-semibold'>
									{person.name}
								</p>
								<p className='mt-1 text-sm text-gray-500'>{person.react}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Notification;
