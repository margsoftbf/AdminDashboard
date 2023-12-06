import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
const faqs = [
	{
		question: "What's the best thing about Switzerland?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: 'Why did the scarecrow win an award?',
		answer:
			'Because he was outstanding in his field. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		question: 'How do you organize a space party?',
		answer:
			'You planet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		question: "What's orange and sounds like a parrot?",
		answer:
			'A carrot. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		question: "Why don't scientists trust atoms?",
		answer:
			'Because they make up everything. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		question:
			"Did you hear about the mathematician who's afraid of negative numbers?",
		answer:
			"He'll stop at nothing to avoid them. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "Why don't skeletons fight each other?",
		answer:
			"They don't have the guts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: 'What do you call fake spaghetti?',
		answer:
			'An impasta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		question: 'How do you catch a squirrel?',
		answer:
			'Climb a tree and act like a nut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		question: 'Why did the coffee file a police report?',
		answer:
			'It got mugged. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
];

export default function Faq() {
	return (
		<motion.div
			className='bg-lightGray rounded-md'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-10'>
				<div className='mx-auto max-w-4xl divide-y divide-white/10'>
					<h2 className='text-2xl font-bold leading-10 tracking-tight text-white'>
						Frequently asked questions
					</h2>
					<div className='mt-20 space-y-6 divide-y divide-white/10'>
						{faqs.map((faq) => (
							<Disclosure as='div' key={faq.question} className='pt-6'>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className='flex w-full items-start justify-between text-left text-white'>
												<span className='text-base font-semibold leading-7'>
													{faq.question}
												</span>
												<span className='ml-6 flex h-7 items-center'>
													{open ? (
														<MinusSmallIcon
															className='h-6 w-6'
															aria-hidden='true'
														/>
													) : (
														<PlusSmallIcon
															className='h-6 w-6'
															aria-hidden='true'
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as='dd' className='mt-2 pr-12'>
											<p className='text-base leading-7 text-gray-300'>
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
