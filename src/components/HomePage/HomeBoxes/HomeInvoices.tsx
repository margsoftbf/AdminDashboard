import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { clients } from '../../../data/data';

const statuses: { [key: string]: string } = {
	Paid: 'text-green-700 bg-green-300 ring-green-600/20',
	Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
	Overdue: 'text-red-700 bg-red-300 ring-red-600/20',
};

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ');
}

const HomeInvoices = () => {
	return (
		<div className='bg-lightGray rounded-md max-h-[530px] overflow-auto'>
			<h2 className='font-semibold mt-2 ml-2 text-xl text-white'>Invoices</h2>
			<ul
				role='list'
				className='grid grid-cols-1 gap-x-6 gap-y-4 xl:gap-x-8 px-4 mt-4'
			>
				{clients.map((client) => (
					<li key={client.id} className=' my-2'>
						<div
							className={`flex items-center gap-x-4 border-b border-gray-900/5  py-1 relative  before:content-[''] before:absolute before:h-[1px] before:w-full before:bg-gray-500 before:bottom-2`}
						>
							<div className='text-sm font-bold leading-8 text-white relative'>
								{client.name}
							</div>
							<Menu as='div' className='relative ml-auto z-50'>
								<Menu.Button className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500 z-50'>
									<span className='sr-only z-50'>Open options</span>
									<EllipsisHorizontalIcon
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
									<Menu.Items className='absolute right-0 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none z-50'>
										<Menu.Item>
											{({ active }) => (
												<a
													href='#'
													className={classNames(
														active ? 'bg-gray-50' : '',
														'block px-3 py-1 text-sm leading-6 text-gray-900'
													)}
												>
													View<span className='sr-only'>, {client.name}</span>
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
													Edit<span className='sr-only'>, {client.name}</span>
												</a>
											)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
						<div className='-my-3 px-1 py-1 text-sm leading-6 '>
							<div className='flex justify-between gap-x-4 py-1'>
								<div className='text-gray-400 text-xs'>Last invoice</div>
								<div className='text-gray-400 text-xs'>
									<time dateTime={client.lastInvoice.dateTime}>
										{client.lastInvoice.date}
									</time>
								</div>
							</div>
							<div className='flex justify-between gap-x-4 py-1'>
								<div className='text-gray-400 text-xs'>Amount</div>
								<div className='flex items-start gap-x-2'>
									<div className='font-medium text-white'>
										{client.lastInvoice.amount}
									</div>
									<div
										className={classNames(
											statuses[client.lastInvoice.status],
											'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
										)}
									>
										{client.lastInvoice.status}
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HomeInvoices;
