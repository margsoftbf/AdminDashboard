import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	isSameDay,
	isSameMonth,
	isToday,
	parse,
	parseISO,
	startOfMonth,
	startOfToday,
	startOfWeek,
	endOfWeek,
} from 'date-fns';
import Modal from '../components/Calendar/Modal';
import MeetingComponent from '../components/Calendar/Meeting';

interface Meeting {
	id: string;
	name: string;
	title: string;
	time: string;
	date: string;
}

function classNames(...classes: (string | false)[]): string {
	return classes.filter((c): c is string => typeof c === 'string').join(' ');
}

export default function Calendar() {
	const [modalOpen, setOpenModal] = useState(false);
	const openModal = () => setOpenModal(true);
	const closeModal = () => setOpenModal(false);
	const [meetings, setMeetings] = useState<Meeting[]>([]);

	let today = startOfToday();
	let [selectedDay, setSelectedDay] = useState(today);
	let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
	let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

	let days = eachDayOfInterval({
		start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
		end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
	});

	function previousMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
		setSelectedDay(firstDayNextMonth);
	}

	function nextMonth() {
		let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
		setSelectedDay(firstDayNextMonth);
	}

	let selectedDayMeetings = meetings.filter((meeting) =>
		isSameDay(parseISO(meeting.date), selectedDay)
	);

	const handleDelete = (meetingId: string) => {
		const updatedMeetings = meetings.filter(meeting => meeting.id !== meetingId);
		setMeetings(updatedMeetings);
	  }

	useEffect(() => {
		let newFirstDayCurrentMonth = parse(
			format(selectedDay, 'MMM-yyyy'),
			'MMM-yyyy',
			new Date()
		);
		setCurrentMonth(format(newFirstDayCurrentMonth, 'MMM-yyyy'));
	}, [selectedDay]);

	return (
		<div className='lg:flex lg:h-full lg:flex-col'>
			<Modal
				isOpen={modalOpen}
				onClose={closeModal}
				closeModal={closeModal}
				setMeetings={setMeetings}
			/>
			<header className='flex items-center justify-between border-b border-lightViolet md:px-6 py-4 lg:flex-none'>
				<h1 className='text-xs md:text-base font-semibold leading-6 text-white'>
					{format(firstDayCurrentMonth, 'MMMM yyyy')}
				</h1>
				<div className='flex items-center'>
					<div className='relative flex items-center rounded-md bg-white shadow-sm md:items-stretch'>
						<button
							onClick={previousMonth}
							type='button'
							className='flex h-9 w-9 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50'
						>
							<span className='sr-only'>Previous month</span>
							<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
						</button>
						<button
							onClick={() => setSelectedDay(today)}
							type='button'
							className='hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block'
						>
							Today
						</button>
						<span className='relative -mx-px h-5 w-px bg-gray-300 md:hidden' />
						<button
							onClick={nextMonth}
							type='button'
							className='flex h-9 w-9 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50'
						>
							<span className='sr-only'>Next month</span>
							<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
						</button>
					</div>
					<div className='ml-4 flex items-center'>
						<div className='h-6 w-px bg-gray-300' />
						<button
							onClick={openModal}
							type='button'
							className='ml-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Add event
						</button>
					</div>
				</div>
			</header>
			<div className='bg-white text-black md:grid md:grid-cols-1 md:divide-x md:divide-gray-200'>
				<div>
					<div className='grid grid-cols-7 gap-px bg-lightViolet text-center text-xs font-semibold leading-6 text-white lg:flex-none'>
						<div className=' py-2'>
							S<span className='sr-only sm:not-sr-only'>un</span>
						</div>
						<div className=' py-2'>
							M<span className='sr-only sm:not-sr-only'>on</span>
						</div>
						<div className=' py-2'>
							T<span className='sr-only sm:not-sr-only'>ue</span>
						</div>
						<div className=' py-2'>
							W<span className='sr-only sm:not-sr-only'>ed</span>
						</div>
						<div className=' py-2'>
							T<span className='sr-only sm:not-sr-only'>hu</span>
						</div>
						<div className=' py-2'>
							F<span className='sr-only sm:not-sr-only'>ri</span>
						</div>
						<div className=' py-2'>
							S<span className='sr-only sm:not-sr-only'>at</span>
						</div>
					</div>
					<div className=''>
						<div className='grid grid-cols-7 text-sm'>
							{days.map((day, dayIdx) => (
								<div
									key={day.toString()}
									className={classNames(
										dayIdx === 0 && colStartClasses[getDay(day)],
										'py-4 md:py-6 lg:py-8 border border-gray-100 relative',
										!isEqual(day, selectedDay) &&
											!isToday(day) &&
											!isSameMonth(day, firstDayCurrentMonth) &&
											'bg-stone-100'
									)}
								>
									<button
										type='button'
										onClick={() => setSelectedDay(day)}
										className={classNames(
											isEqual(day, selectedDay) && 'text-white',
											!isEqual(day, selectedDay) &&
												isToday(day) &&
												'text-lightViolet',
											!isEqual(day, selectedDay) &&
												!isToday(day) &&
												isSameMonth(day, firstDayCurrentMonth) &&
												'text-gray-900',
											!isEqual(day, selectedDay) &&
												!isToday(day) &&
												!isSameMonth(day, firstDayCurrentMonth) &&
												'text-gray-400',
											isEqual(day, selectedDay) &&
												isToday(day) &&
												'bg-lightViolet',
											isEqual(day, selectedDay) &&
												!isToday(day) &&
												'bg-stone-700',
											!isEqual(day, selectedDay) &&
												'hover:bg-stone-400 hover:text-white',
											(isEqual(day, selectedDay) || isToday(day)) &&
												'font-semibold',
											'mx-auto flex h-8 w-8 items-center justify-center rounded-md'
										)}
									>
										<time dateTime={format(day, 'yyyy-MM-dd')}>
											{format(day, 'd')}
										</time>
									</button>
									<div className='w-3 h-1 mx-auto mt-1'>
										{meetings.some((meeting) =>
											isSameDay(parseISO(meeting.date), day)
										) && (
											<div className='w-3 h-3 rounded-full bg-lightViolet'></div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<section className='mt-4'>
					<h2 className='text-base font-sans font-semibold leading-6 text-gray-900'>
						Schedule for{' '}
						<time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
							{format(selectedDay, 'MMM dd, yyy')}
						</time>
					</h2>
					<ol className='my-4 pb-1 space-y-1 text-sm leading-6 text-gray-500'>
						{selectedDayMeetings.length > 0 ? (
							meetings.map((meeting) => (
								<MeetingComponent meeting={meeting} key={meeting.id} onDelete={handleDelete} />
							))
						) : (
							<p className='mb-4'>No meetings for today.</p>
						)}
					</ol>
				</section>
			</div>
		</div>
	);
}

let colStartClasses = [
	'col-start-1',
	'col-start-2',
	'col-start-3',
	'col-start-4',
	'col-start-5',
	'col-start-6',
	'col-start-7',
];
