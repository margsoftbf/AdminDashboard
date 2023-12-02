import { projects } from '../../../data/data';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

const statuses: { [key: string]: string } = {
	Complete: 'text-green-700 bg-green-300 ring-green-600/20',
	'In progress': 'text-gray-600 bg-gray-300 ring-gray-500/10',
	Archived: 'text-yellow-800 bg-yellow-200 ring-yellow-600/20',
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const HomeProjects = () => {
	return (
		<div className='bg-lightGray rounded-md max-h-[530px] overflow-y-auto overflow-hidden'>
			<h2 className='font-semibold mt-2 text-xl text-white'>Projects</h2>
			<ul role='list' className='divide-y divide-gray-100 px-2'>
				{projects.map((project) => (
					<li
						key={project.id}
						className='flex items-center justify-between gap-x-6 py-4 cursor-pointer hover:bg-lighterGray'
					>
						<div className='min-w-0'>
							<div className='flex items-start gap-x-3'>
								<p className='text-sm font-semibold leading-6 text-white'>
									{project.name}
								</p>
								<p
									className={classNames(
										statuses[project.status],
										'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
									)}
								>
									{project.status}
								</p>
							</div>
							<div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
								<p className='whitespace-nowrap'>
									Due on{' '}
									<time dateTime={project.dueDateTime}>{project.dueDate}</time>
								</p>
								<svg viewBox='0 0 2 2' className='h-0.5 w-0.5 fill-current'>
									<circle cx={1} cy={1} r={1} />
								</svg>
								<p className='truncate'>Created by {project.createdBy}</p>
							</div>
						</div>
						<div className='flex flex-none items-center gap-x-4'>
							<Menu as='div' className='relative flex-none'>
								<Menu.Button className='-m-2.5 block p-2.5 text-gray-500 hover:text-white'>
									<span className='sr-only'>Open options</span>
									<EllipsisVerticalIcon
										className='h-5 w-5'
										aria-hidden='true'
									/>
								</Menu.Button>
								<Transition
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'
								>
									<Menu.Items className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active ? 'bg-gray-50' : '',
														'block px-3 py-1 text-sm leading-6 text-gray-900'
													)}
												>
													Edit<span className='sr-only'>, {project.name}</span>
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active ? 'bg-gray-50' : '',
														'block px-3 py-1 text-sm leading-6 text-gray-900'
													)}
												>
													Move<span className='sr-only'>, {project.name}</span>
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active ? 'bg-gray-50' : '',
														'block px-3 py-1 text-sm leading-6 text-gray-900'
													)}
												>
													Delete
													<span className='sr-only'>, {project.name}</span>
												</a>
											)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HomeProjects;
