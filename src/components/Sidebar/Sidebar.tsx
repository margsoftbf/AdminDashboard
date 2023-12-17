import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
	ShoppingCartIcon,
	ChatBubbleLeftIcon,
	ArrowLeftOnRectangleIcon,
	UserCircleIcon,
	EnvelopeIcon,
	DocumentCheckIcon,
	LifebuoyIcon,
	BanknotesIcon,
	Cog8ToothIcon,
} from '@heroicons/react/24/outline';
import {
	ChevronDownIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { MdDashboard } from 'react-icons/md';
import { useLocation, Link } from 'react-router-dom';
import { useAppContext } from '../../context/ContextProvider';
import Notification from '../TopBar/Notification';
import Message from '../TopBar/Message';
import Cart from '../TopBar/Cart';
import { navigation } from '../../data/data';
import { SidebarProps } from '../../types/types';
const userNavigation = [
	{ name: 'Profile', href: '/', icon: <UserCircleIcon /> },
	{ name: 'Message', href: '/', icon: <EnvelopeIcon /> },
	{ name: 'Taskboard', href: '/', icon: <DocumentCheckIcon /> },
	{ name: 'Help', href: '/', icon: <LifebuoyIcon /> },
	{ name: 'Balance', href: '/', icon: <BanknotesIcon /> },
	{ name: 'Settings', href: '/', icon: <Cog8ToothIcon /> },
	{ name: 'Sign out', href: '/', icon: <ArrowLeftOnRectangleIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({ renderRoutes }) => {
	const location = useLocation();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const [checkedCount, setCheckedCount] = useState(0);
	const [unread, setUnread] = useState(false);
	const { toggleNotification, toggleMessage, toggleCart, handleCloseAll } =
		useAppContext();

	const { isNotificationClicked, isMessageClicked, isCartClicked } =
		useAppContext();

	return (
		<div>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-50 lg:hidden  '
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter='transition-opacity ease-linear duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity ease-linear duration-300'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-lightGray/90' />
					</Transition.Child>

					<div className='fixed inset-0 flex '>
						<Transition.Child
							as={Fragment}
							enter='transition ease-in-out duration-300 transform'
							enterFrom='-translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-300 transform'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-full'
						>
							<Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1 '>
								<Transition.Child
									as={Fragment}
									enter='ease-in-out duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in-out duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='absolute left-full top-0 flex w-16 justify-center pt-5 '>
										<button
											type='button'
											className='-m-2.5 p-2.5'
											onClick={() => setSidebarOpen(false)}
										>
											<span className='sr-only'>Close sidebar</span>
											<XMarkIcon
												className='h-6 w-6 text-white'
												aria-hidden='true'
											/>
										</button>
									</div>
								</Transition.Child>
								<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-lightGray px-6 pb-4 ring-1 ring-white/10 '>
									<div className='flex h-16 shrink-0 items-center'>
										<MdDashboard className='text-lightViolet text-3xl' />
										<span className='text-white ml-2 font-semibold'>
											Admin Panel
										</span>
									</div>
									<nav className='flex flex-1 flex-col'>
										<ul role='list' className='flex flex-1 flex-col gap-y-7'>
											<li>
												<ul role='list' className='-mx-2 space-y-1'>
													{navigation.map((item) => (
														<li key={item.name}>
															<Link
																to={item.href}
																className={`
																	${
																		location.pathname === item.href
																			? 'bg-lightViolet text-white'
																			: 'text-gray-400 hover:text-white hover:bg-darkViolet'
																	}
															group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
																`}
																onClick={() => setSidebarOpen(false)}
															>
																<item.icon
																	className='h-6 w-6 shrink-0'
																	aria-hidden='true'
																/>
																{item.name}
															</Link>
														</li>
													))}
												</ul>
											</li>
										</ul>
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
				<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-lightGray border-[1px] border-darkGray  px-6 pb-4'>
					<div className='flex h-16 shrink-0 items-center'>
						<MdDashboard className='text-lightViolet text-3xl' />
						<span className='text-white ml-2 font-semibold'>Admin Panel</span>
					</div>
					<nav className='flex flex-1 flex-col'>
						<ul role='list' className='flex flex-1 flex-col gap-y-7'>
							<li>
								<ul role='list' className='-mx-2 space-y-1'>
									{navigation.map((item) => (
										<li key={item.name}>
											<Link
												to={item.href}
												className={`
												${
													location.pathname === item.href
														? 'bg-lightViolet text-white'
														: 'text-gray-400 hover:text-white hover:bg-darkViolet'
												}
												group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
											  `}
												onClick={handleCloseAll}
											>
												<item.icon
													className='h-6 w-6 shrink-0'
													aria-hidden='true'
												/>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className='lg:pl-72'>
				<div className='sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-lightGray bg-lightGray px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
					<button
						type='button'
						className='-m-2.5 p-2.5 text-white lg:hidden'
						onClick={() => setSidebarOpen(true)}
					>
						<span className='sr-only'>Open sidebar</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>

					<div className='flex w-full items-center justify-end gap-x-4 self-stretch lg:gap-x-6'>
						<form
							className='hidden relative md:flex items-center h-full flex-1'
							action='#'
							method='GET'
						>
							<label htmlFor='search-field' className='sr-only'>
								Search
							</label>
							<MagnifyingGlassIcon
								className='pointer-events-none absolute inset-y-0 left-0 my-auto h-5 w-5 ml-3 text-gray-400'
								aria-hidden='true'
							/>
							<input
								id='search-field'
								className=' w-44 h-10 pl-10 pr-3 py-2 border-2 border-borderGray rounded-md bg-[#0F0F12] text-white placeholder:text-gray-400 sm:text-sm outline-none  focus:border-none focus:ring-1 focus:ring-lightViolet'
								placeholder='Search...'
								type='search'
								name='search'
							/>
						</form>
						<div className='flex items-center justify-center gap-x-4'>
							<div className='flex items-center relative'>
								<button
									type='button'
									className='-m-2.5 p-2.5 lg:p-2.5 text-gray-400 hover:text-gray-500'
									onClick={toggleCart}
								>
									<span className='sr-only'>Cart</span>
									<ShoppingCartIcon className='h-6 w-6' aria-hidden='true' />
								</button>
								{isCartClicked ? <Cart /> : null}
							</div>
							<div className='flex items-center relative'>
								<button
									type='button'
									className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
									onClick={toggleMessage}
								>
									<span className='sr-only'>Message</span>
									<ChatBubbleLeftIcon className='h-6 w-6' aria-hidden='true' />
								</button>
								{isMessageClicked ? <Message /> : null}
							</div>
							<div className='flex items-center relative'>
								{unread ? null : (
									<span className='absolute inline-block w-2 h-2 rounded-full bg-myPink -right-[1px] top-0'></span>
								)}
								<button
									type='button'
									className='-m-2.5 p-2.5 lg:p-2.5 text-gray-400 hover:text-gray-500'
									onClick={toggleNotification}
								>
									<span className='sr-only'>View notifications</span>
									<BellIcon className='h-6 w-6' aria-hidden='true' />
								</button>

								{isNotificationClicked ? (
									<Notification
										checkedCount={checkedCount}
										setCheckedCount={setCheckedCount}
										setUnread={setUnread}
									/>
								) : null}
							</div>
							<div
								className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/50'
								aria-hidden='true'
							/>

							<Menu as='div' className='relative'>
								<Menu.Button
									className='-m-1.5 flex items-center p-1.5'
									onClick={handleCloseAll}
								>
									<span className='sr-only'>Open user menu</span>
									<img
										className='h-8 w-8 rounded-full bg-gray-50'
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt=''
									/>
									<span className='hidden lg:flex lg:items-center'>
										<span
											className='ml-4 text-sm font-semibold leading-6 text-white'
											aria-hidden='true'
										>
											Admin User
										</span>
										<ChevronDownIcon
											className='ml-2 h-5 w-5 text-gray-400'
											aria-hidden='true'
										/>
									</span>
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
									<Menu.Items
										className={`absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none`}
									>
										{userNavigation.map((item) => (
											<Menu.Item key={item.name}>
												{({ active }) => (
													<div className='relative'>
														<p
															className={`flex items-center before:content-[''] before:absolute before:h-[1px] before:w-[90%] before:bg-stone-400 before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 mb-1`}
														>
															<span className='text-stone-400 w-6 h-6 mx-1'>
																{item.icon}
															</span>
															<a
																href={item.href}
																className={`
																	${active ? 'bg-gray-100 rounded-md' : ''},
																	'block px-1 py-1 text-sm leading-6 text-gray-900'
																`}
															>
																{item.name}
															</a>
														</p>
													</div>
												)}
											</Menu.Item>
										))}
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
				</div>

				<main className='py-2'>
					<div className='px-4 sm:px-6 lg:px-8'>{renderRoutes()}</div>
				</main>
			</div>
		</div>
	);
};

export default Sidebar;
