import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { format, parseISO } from 'date-fns';

export interface Meeting {
	id: string;
	name: string;
	title: string;
	time: string;
	date: string;
}

interface MeetingProps {
	meeting: Meeting;
	onDelete: (id: string) => void;
}

function classNames(...classes: (string | false)[]): string {
	return classes.filter((c): c is string => typeof c === 'string').join(' ');
}

const Meeting: React.FC<MeetingProps> = ({ meeting, onDelete }) => {
	let date = parseISO(meeting.date);

	return (
		<li className='group md:m-auto md:max-w-[700px] flex items-center space-x-4 rounded-xl px-4 py-1 focus-within:bg-gray-100 hover:bg-gray-100 relative'>
			<div
				className={`flex flex-col  md:flex-row md:justify-between w-full font-sans text-left relative before:content-[''] before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:absolute md:text-base md:mt-2`}
			>
				<div className='flex'>
					<p>{format(date, 'EEE, MMM d, yyyy')}</p>
					<p className=''>
						<time dateTime={meeting.date}>
							{', '}
							{format(date, 'h:mm a')}
						</time>
					</p>
				</div>
				<p className='text-gray-900 font-bold md:mx-4 md:mr-auto'>
					{meeting.name}
				</p>
				<p className=''>{meeting.title}</p>
			</div>
			<Menu
				as='div'
				className='relative opacity-0 focus-within:opacity-100 group-hover:opacity-100'
			>
				<div>
					<Menu.Button className='-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600'>
						<span className='sr-only'>Open options</span>
						<EllipsisVerticalIcon className='h-6 w-6' aria-hidden='true' />
					</Menu.Button>
				</div>

				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
						<div className='py-1'>
							<Menu.Item>
								{({ active }) => (
									<a
										onClick={() => onDelete(meeting.id)}
										href='#'
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm'
										)}
									>
										Cancel
									</a>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</li>
	);
};

export default Meeting;
