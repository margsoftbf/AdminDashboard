import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { products } from '../../data/data';

const Cart = () => {
	const [open, setOpen] = useState(true);
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='fixed inset-0 z-100 bg-black/50 overflow-hidden'
				onClose={setOpen}
			>
				<div className='pointer-events-none fixed top-16 right-0 flex max-w-full'>
					<Transition.Child
						as={Fragment}
						enter='transform transition ease-in-out duration-500 sm:duration-700'
						enterFrom='translate-x-full'
						enterTo='translate-x-0'
						leave='transform transition ease-in-out duration-500 sm:duration-700'
						leaveFrom='translate-x-0'
						leaveTo='translate-x-full'
					>
						<Dialog.Panel className='right-4 fixed w-80'>
							<div className='flex w-full flex-col bg-white rounded-md'>
								<div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
									<div className='flex items-start justify-between'>
										<Dialog.Title className='text-lg font-medium text-gray-900'>
											Shopping cart
										</Dialog.Title>
										<div className='ml-3 flex h-7 items-center  cursor-pointer'>
											<button
												type='button'
												className='relative -m-2 p-2 text-gray-400 hover:text-gray-500  cursor-pointer'
												onClick={() => setOpen(false)}
											>

												<XMarkIcon className='h-6 w-6' aria-hidden='true' />
											</button>
										</div>
									</div>

									<div className='mt-8 h-full'>
										<div className='flow-root'>
											<ul
												role='list'
												className='-my-6 divide-y divide-gray-200'
											>
												{products.map((product) => (
													<li key={product.id} className='flex py-6'>
														<div className='h-16 w-16 flex-none rounded-md border border-gray-200'>
															<img
																src={product.imageSrc}
																alt={product.imageAlt}
																className='h-full w-full object-cover object-center'
															/>
														</div>

														<div className='ml-4 flex flex-1 flex-col'>
															<div>
																<div className='flex justify-between text-base font-medium text-gray-900'>
																	<h3>
																		<a href={product.href}>{product.name}</a>
																	</h3>
																	<p className='ml-4'>{product.price}</p>
																</div>
																<p className='mt-1 text-sm text-gray-500'>
																	{product.color}
																</p>
															</div>
															<div className='flex flex-1 items-end justify-between text-sm'>
																<p className='text-gray-500'>
																	Qty {product.quantity}
																</p>

																<div className='flex'>
																	<button
																		type='button'
																		className='font-medium text-lightViolet hover:text-darkViolet'
																	>
																		Remove
																	</button>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								<div className='border-t border-gray-200 px-4 pt-6 sm:px-6'>
									<div className='flex justify-between text-base font-medium text-gray-900'>
										<p>Subtotal</p>
										<p>$262.00</p>
									</div>
									<p className='mt-0.5 text-sm text-gray-500'>
										Shipping and taxes calculated at checkout.
									</p>
									<div className='mt-6'>
										<a
											href='#'
											className='w-full flex items-center justify-center rounded-md border border-transparent bg-lightViolet px-6 py-3 text-base font-medium text-white shadow-sm  hover:bg-darkViolet'
										>
											Checkout
										</a>
									</div>
									<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
										<p>
											or
											<button
												type='button'
												className='font-medium text-darkViolet hover:text-lightViolet ml-1'
												onClick={() => setOpen(false)}
											>
												Continue Shopping
												<span aria-hidden='true'> &rarr;</span>
											</button>
										</p>
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Cart;
