import {
	CalendarIcon,
	ChartPieIcon,
	DocumentDuplicateIcon,
	HomeIcon,
	UsersIcon,
	ShoppingCartIcon,
	ClipboardDocumentCheckIcon,
	CurrencyDollarIcon,
	DocumentCheckIcon,
	QuestionMarkCircleIcon,
	ChartBarIcon,
	ChartBarSquareIcon,
} from '@heroicons/react/24/outline';
import { RiProfileLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';

export const navigation = [
	{ name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
	{ name: 'Profile', href: '/profile', icon: RiProfileLine, current: false },
	{ name: 'Team', href: '/team', icon: UsersIcon, current: false },
	{ name: 'Customers', href: '/customers', icon: BsPerson, current: false },
	{
		name: 'Products',
		href: '/products',
		icon: ShoppingCartIcon,
		current: false,
	},
	{
		name: 'Orders',
		href: '/orders',
		icon: ClipboardDocumentCheckIcon,
		current: false,
	},
	{
		name: 'Invoices',
		href: '/invoices',
		icon: DocumentDuplicateIcon,
		current: false,
	},
	{ name: 'Crypto', href: '/crypto', icon: CurrencyDollarIcon, current: false },
	{ name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
	{ name: 'Kanban', href: '/kanban', icon: DocumentCheckIcon, current: false },
	{ name: 'Bar Chart', href: '/bar-chart', icon: ChartBarIcon, current: false },
	{ name: 'Pie Chart', href: '/pie-chart', icon: ChartPieIcon, current: false },
	{
		name: 'Line Chart',
		href: '/line-chart',
		icon: ChartBarSquareIcon,
		current: false,
	},
	{
		name: 'FAQ Page',
		href: '/faq',
		icon: QuestionMarkCircleIcon,
		current: false,
	},
];

interface PersonHome {
	id: number;
	avatar: string;
	name: string;
	workProfile: string;
	task: number;
	trend: boolean;
	money: number;
}

export const personsHome: PersonHome[] = [
	{
		id: 1,
		avatar: '../src/assets/img/people/avatar-mark-webber.webp',
		name: 'Mark Webber',
		workProfile: 'Sale manager Asia',
		task: 3,
		trend: true,
		money: 2600,
	},
	{
		id: 2,
		avatar: '../src/assets/img/people/avatar-angela-gray.webp',
		name: 'Angela Gray',
		workProfile: 'Sale manager USA',
		task: 5,
		trend: true,
		money: 600,
	},
	{
		id: 3,
		avatar: '../src/assets/img/people/avatar-jacob-thompson.webp',
		name: 'Jacob Thompson',
		workProfile: 'Sale manager Europe',
		task: 3,
		trend: false,
		money: 260,
	},
	{
		id: 4,
		avatar: './src/assets/img/people/avatar-kimberly-smith.webp',
		name: 'Kimberly Smith',
		workProfile: 'Sale manager Australia',
		task: 4,
		trend: true,
		money: 900,
	},
	{
		id: 5,
		avatar: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		name: 'Rizky Hasanuddin',
		workProfile: 'Sale manager Asia',
		task: 6,
		trend: false,
		money: 800,
	},
	{
		id: 6,
		avatar: './src/assets/img/people/avatar-nathan-peterson.webp',
		name: 'Nathan Peterson',
		workProfile: 'Sale manager USA',
		task: 2,
		trend: true,
		money: 250,
	},
];

interface Person {
	id: number;
	avatar: string;
	name: string;
	workProfile: string;
	email: string;
	role: string;
	react: string;
	message: string;
	checked: boolean;
	lastSeen: string | null | undefined;
	lastSeenDateTime: string | null | undefined;
	content: string;
}

export const personsData: Person[] = [
	{
		id: 1,
		avatar: '../src/assets/img/people/avatar-mark-webber.webp',
		name: 'Mark Webber',
		workProfile: 'Sale manager Asia',
		email: 'leslie.alexander@example.com',
		role: 'Co-Founder / CEO',
		react: 'reacted to your recent post',
		message: 'Sure, can be over there',
		checked: false,
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		content:
			'Explicabo nihil laborum. Saepe facilis consequuntur in eaque. Consequatur perspiciatis quam. Sed est illo quia. Culpa vitae placeat vitae. Repudiandae sunt exercitationem nihil nisi facilis placeat minima eveniet.',
	},
	{
		id: 2,
		avatar: '../src/assets/img/people/avatar-angela-gray.webp',
		name: 'Angela Gray',
		workProfile: 'Sale manager USA',
		email: 'michael.foster@example.com',
		role: 'Co-Founder / CTO',
		react: 'followed you',
		message: 'Ok i will call you',
		checked: false,
		lastSeen: null,
		lastSeenDateTime: null,
		content:
			'Laudantium quidem non et saepe vel sequi accusamus consequatur et. Saepe inventore veniam incidunt cumque et laborum nemo blanditiis rerum. A unde et molestiae autem ad. Architecto dolor ex accusantium maxime cumque laudantium itaque aut perferendis.',
	},
	{
		id: 3,
		avatar: '../src/assets/img/people/avatar-jacob-thompson.webp',
		name: 'Jacob Thompson',
		workProfile: 'Sale manager Europe',
		email: 'dries.vincent@example.com',
		role: 'Business Relations',
		react: 'has joined your group',
		message: 'Congratulate him',
		checked: false,
		lastSeen: '5h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		content:
			'Quia animi harum in quis quidem sint. Ipsum dolorem molestias veritatis quis eveniet commodi assumenda temporibus. Dicta ut modi alias nisi. Veniam quia velit et ut. Id quas ducimus reprehenderit veniam fugit amet fugiat ipsum eius. Voluptas nobis earum in in vel corporis nisi.',
	},
	{
		id: 4,
		avatar: './src/assets/img/people/avatar-kimberly-smith.webp',
		name: 'Kimberly Smith',
		workProfile: 'Sale manager Australia',
		email: 'lindsay.walton@example.com',
		role: 'Front-end Developer',
		react: 'commented on your picture',
		message: 'Check your earnings',
		checked: true,
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		content:
			'Unde dolore exercitationem nobis reprehenderit rerum corporis accusamus. Nemo suscipit temporibus quidem dolorum. Nobis optio quae atque blanditiis aspernatur doloribus sit accusamus. Sunt reiciendis ut corrupti ab debitis dolorem dolorem nam sit. Ducimus nisi qui earum aliquam. Est nam doloribus culpa illum.',
	},
	{
		id: 5,
		avatar: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		name: 'Rizky Hasanuddin',
		workProfile: 'Sale manager Asia',
		email: 'courtney.henry@example.com',
		role: 'Designer',
		react: 'commented on your picture',
		message: 'Assign her new task',
		checked: true,
		lastSeen: '3h ago',
		lastSeenDateTime: '2023-01-23T13:23Z',
		content:
			'Quia animi harum in quis quidem sint. Ipsum dolorem molestias veritatis quis eveniet commodi assumenda temporibus. Dicta ut modi alias nisi. Veniam quia velit et ut. Id quas ducimus reprehenderit veniam fugit amet fugiat ipsum eius. Voluptas nobis earum in in vel corporis nisi.',
	},
	{
		id: 6,
		avatar: './src/assets/img/people/avatar-nathan-peterson.webp',
		name: 'Nathan Peterson',
		workProfile: 'Sale manager USA',
		email: 'tom.cook@example.com',
		role: 'Director of Product',
		react: 'commented on your picture',
		message: 'Sure, can be over there',
		checked: true,
		lastSeen: null,
		lastSeenDateTime: null,
		content:
			'Unde dolore exercitationem nobis reprehenderit rerum corporis accusamus. Nemo suscipit temporibus quidem dolorum. Nobis optio quae atque blanditiis aspernatur doloribus sit accusamus. Sunt reiciendis ut corrupti ab debitis dolorem dolorem nam sit. Ducimus nisi qui earum aliquam. Est nam doloribus culpa illum.',
	},
];

export const products = [
	{
		id: 1,
		name: 'Throwback Hip Bag',
		href: '#',
		color: 'Salmon',
		price: '$90.00',
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
		imageAlt:
			'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
	},
	{
		id: 2,
		name: 'Medium Stuff Satchel',
		href: '#',
		color: 'Blue',
		price: '$32.00',
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
		imageAlt:
			'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
	},
	{
		id: 3,
		name: 'Women pants',
		href: '#',
		color: 'Pink',
		price: '$129.00',
		quantity: 1,
		imageSrc:
			'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHx8fDA%3D',
		imageAlt: 'Women pink pants',
	},
	{
		id: 4,
		name: 'Women tshirt',
		href: '#',
		color: 'Gray',
		price: '$158.00',
		quantity: 2,
		imageSrc:
			'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Women tshirt gray',
	},
	{
		id: 5,
		name: 'Men suit',
		href: '#',
		color: 'Green',
		price: '$499.00',
		quantity: 1,
		imageSrc:
			'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VpdHxlbnwwfHwwfHx8MA%3D%3D',
		imageAlt: 'Men green suit',
	},
];

export const salesData = [
	{
		id: 'Sales',
		color: 'hsl(267.46987951807233, 42.564102564102555%, 61.76470588235294%)',
		data: [
			{
				x: 'Jan',
				y: 59,
			},
			{
				x: 'Feb',
				y: 14,
			},
			{
				x: 'Mar',
				y: 203,
			},
			{
				x: 'Apr',
				y: 89,
			},
			{
				x: 'May',
				y: 154,
			},
			{
				x: 'Jun',
				y: 142,
			},
			{
				x: 'Jul',
				y: 125,
			},
			{
				x: 'Aug',
				y: 182,
			},
			{
				x: 'Sep',
				y: 274,
			},
			{
				x: 'Oct',
				y: 138,
			},
			{
				x: 'Nov',
				y: 106,
			},
			{
				x: 'Dec',
				y: 73,
			},
		],
	},
	{
		id: 'Guests',
		color: '#000',
		data: [
			{
				x: 'Jan',
				y: 276,
			},
			{
				x: 'Feb',
				y: 162,
			},
			{
				x: 'Mar',
				y: 350,
			},
			{
				x: 'Apr',
				y: 278,
			},
			{
				x: 'May',
				y: 242,
			},
			{
				x: 'Jun',
				y: 192,
			},
			{
				x: 'Jul',
				y: 222,
			},
			{
				x: 'Aug',
				y: 124,
			},
			{
				x: 'Sep',
				y: 74,
			},
			{
				x: 'Oct',
				y: 165,
			},
			{
				x: 'Nov',
				y: 263,
			},
			{
				x: 'Dec',
				y: 123,
			},
		],
	},
];

export const circleData = [
	{
		id: 'Guest',
		label: 'Guest',
		value: 222,
		color: 'hsl(211, 70%, 50%)',
	},
	{
		id: 'Customer',
		label: 'Customer',
		value: 276,
		color: 'hsl(11, 70%, 50%)',
	},
	{
		id: 'Workers',
		label: 'Workers',
		value: 323,
		color: 'hsl(111, 70%, 50%)',
	},
	{
		id: 'CEO',
		label: 'CEO',
		value: 325,
		color: 'hsl(307, 70%, 50%)',
	},
	{
		id: 'President',
		label: 'President',
		value: 405,
		color: 'hsl(349, 70%, 50%)',
	},
];

export const projects = [
	{
		id: 1,
		name: 'GraphQL API',
		href: '#',
		status: 'Complete',
		createdBy: 'Leslie Alexander',
		dueDate: 'March 17, 2023',
		dueDateTime: '2023-03-17T00:00Z',
	},
	{
		id: 2,
		name: 'New benefits plan',
		href: '#',
		status: 'In progress',
		createdBy: 'Leslie Alexander',
		dueDate: 'May 5, 2023',
		dueDateTime: '2023-05-05T00:00Z',
	},
	{
		id: 3,
		name: 'Onboarding emails',
		href: '#',
		status: 'Archived',
		createdBy: 'Courtney Henry',
		dueDate: 'May 25, 2023',
		dueDateTime: '2023-05-25T00:00Z',
	},
	{
		id: 4,
		name: 'iOS app',
		href: '#',
		status: 'In progress',
		createdBy: 'Leonard Krasner',
		dueDate: 'June 7, 2023',
		dueDateTime: '2023-06-07T00:00Z',
	},
	{
		id: 5,
		name: 'Marketing site redesign',
		href: '#',
		status: 'Archived',
		createdBy: 'Courtney Henry',
		dueDate: 'June 10, 2023',
		dueDateTime: '2023-06-10T00:00Z',
	},
	{
		id: 6,
		name: 'Team number 3',
		href: '#',
		status: 'Complete',
		createdBy: 'Mike Gulasowski',
		dueDate: 'June 10, 2023',
		dueDateTime: '2023-06-10T00:00Z',
	},
];

export const clients = [
	{
		id: 1,
		name: 'Tuple',
		lastInvoice: {
			date: 'December 13, 2022',
			dateTime: '2022-12-13',
			amount: '$2,000.00',
			status: 'Overdue',
		},
	},
	{
		id: 2,
		name: 'SavvyCal',
		lastInvoice: {
			date: 'January 22, 2023',
			dateTime: '2023-01-22',
			amount: '$14,000.00',
			status: 'Paid',
		},
	},
	{
		id: 3,
		name: 'Reform',
		lastInvoice: {
			date: 'January 23, 2023',
			dateTime: '2023-01-23',
			amount: '$7,600.00',
			status: 'Paid',
		},
	},
	{
		id: 4,
		name: 'Nokia',
		lastInvoice: {
			date: 'January 23, 2023',
			dateTime: '2023-01-23',
			amount: '$7,600.00',
			status: 'Withdraw',
		},
	},
];

export const userRows = [
	{
		id: 1,
		img: './src/assets/img/people/avatar-nathan-peterson.webp',
		firstName: 'Eula',
		lastName: 'Hubbard',
		email: 'kewez@@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '2532',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 2,
		img: '../src/assets/img/people/avatar-mark-webber.webp',
		firstName: 'James',
		lastName: 'Smith',
		email: 'jsmith@gmail.com',
		phone: '123 456 789',
		position: 'Sales Manager',
		location: 'United Kingdom',
		hireData: '01.02.2021',
		earnings: '-250',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 3,
		img: '../src/assets/img/people/avatar-angela-gray.webp',
		firstName: 'Christopher',
		lastName: 'Anderson',
		email: 'canderson@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'Spain',
		hireData: '01.08.2020',
		earnings: '756',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 4,
		img: './src/assets/img/people/avatar-kimberly-smith.webp',
		firstName: 'Mary',
		lastName: 'Wright',
		email: 'mwright@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '980',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 5,
		img: './src/assets/img/people/avatar-nathan-peterson.webp',
		firstName: 'Lisa',
		lastName: 'Mitchell',
		email: 'lmitchell@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '-120',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 6,
		img: '../src/assets/img/people/avatar-mark-webber.webp',
		firstName: 'Jonh',
		lastName: 'Thomas',
		email: 'jthomas@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '3500',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 7,
		img: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		firstName: 'Daniel',
		lastName: 'Rodriguez',
		email: 'drodriguez@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '1973',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 8,
		img: '../src/assets/img/people/avatar-angela-gray.webp',
		firstName: 'Anthony',
		lastName: 'Lopez',
		email: 'alopez@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '-840',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 9,
		img: './src/assets/img/people/avatar-kimberly-smith.webp',
		firstName: 'Patricia',
		lastName: 'Perez',
		email: 'pperez@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '1735',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 10,
		img: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		firstName: 'Nancy',
		lastName: 'Williams',
		email: 'nwilliams@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '-501',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 11,
		img: '../src/assets/img/people/avatar-mark-webber.webp',
		firstName: 'Laura',
		lastName: 'Jackson',
		email: 'ljackson@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '780',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 12,
		img: './src/assets/img/people/avatar-nathan-peterson.webp',
		firstName: 'Robert',
		lastName: 'Lewis',
		email: 'rlewis@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '804',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 13,
		img: '../src/assets/img/people/avatar-angela-gray.webp',
		firstName: 'Paul',
		lastName: 'Hill',
		email: 'phill@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '555',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 14,
		img: './src/assets/img/people/avatar-kimberly-smith.webp',
		firstName: 'Kevin',
		lastName: 'Roberts',
		email: 'kroberts@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '632',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 15,
		img: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		firstName: 'Linda',
		lastName: 'Jones',
		email: 'ljones@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '752',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 16,
		img: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		firstName: 'Karen',
		lastName: 'White',
		email: 'kwhite@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '-640',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 17,
		img: './src/assets/img/people/avatar-nathan-peterson.webp',
		firstName: 'Sarah',
		lastName: 'Lee',
		email: 'slee@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '125',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 18,
		img: './src/assets/img/people/avatar-nathan-peterson.webp',
		firstName: 'Eula',
		lastName: 'Hubbard',
		email: 'kewez@@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '2532',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 19,
		img: '../src/assets/img/people/avatar-mark-webber.webp',
		firstName: 'James',
		lastName: 'Smith',
		email: 'jsmith@gmail.com',
		phone: '123 456 789',
		position: 'Sales Manager',
		location: 'United Kingdom',
		hireData: '01.02.2021',
		earnings: '-250',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 20,
		img: '../src/assets/img/people/avatar-angela-gray.webp',
		firstName: 'Christopher',
		lastName: 'Anderson',
		email: 'canderson@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'Spain',
		hireData: '01.08.2020',
		earnings: '756',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 21,
		img: './src/assets/img/people/avatar-kimberly-smith.webp',
		firstName: 'Mary',
		lastName: 'Wright',
		email: 'mwright@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '980',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 22,
		img: './src/assets/img/people/avatar-nathan-peterson.webp',
		firstName: 'Lisa',
		lastName: 'Mitchell',
		email: 'lmitchell@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '-120',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 23,
		img: '../src/assets/img/people/avatar-mark-webber.webp',
		firstName: 'Jonh',
		lastName: 'Thomas',
		email: 'jthomas@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '3500',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 24,
		img: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		firstName: 'Daniel',
		lastName: 'Rodriguez',
		email: 'drodriguez@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '1973',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 25,
		img: '../src/assets/img/people/avatar-angela-gray.webp',
		firstName: 'Anthony',
		lastName: 'Lopez',
		email: 'alopez@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '-840',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 26,
		img: './src/assets/img/people/avatar-kimberly-smith.webp',
		firstName: 'Patricia',
		lastName: 'Perez',
		email: 'pperez@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '1735',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 27,
		img: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		firstName: 'Nancy',
		lastName: 'Williams',
		email: 'nwilliams@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '-501',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 28,
		img: '../src/assets/img/people/avatar-mark-webber.webp',
		firstName: 'Laura',
		lastName: 'Jackson',
		email: 'ljackson@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '780',
		actions: 'edit, delete',
		verified: false,
	},
	{
		id: 29,
		img: './src/assets/img/people/avatar-nathan-peterson.webp',
		firstName: 'Robert',
		lastName: 'Lewis',
		email: 'rlewis@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '804',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 30,
		img: '../src/assets/img/people/avatar-angela-gray.webp',
		firstName: 'Paul',
		lastName: 'Hill',
		email: 'phill@gmail.com',
		phone: '123 456 789',
		position: 'CEO',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '555',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 31,
		img: './src/assets/img/people/avatar-kimberly-smith.webp',
		firstName: 'Kevin',
		lastName: 'Roberts',
		email: 'kroberts@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '632',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 32,
		img: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		firstName: 'Linda',
		lastName: 'Jones',
		email: 'ljones@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '752',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 33,
		img: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		firstName: 'Karen',
		lastName: 'White',
		email: 'kwhite@gmail.com',
		phone: '123 456 789',
		position: 'Sales Menager',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '-640',
		actions: 'edit, delete',
		verified: true,
	},
	{
		id: 34,
		img: './src/assets/img/people/avatar-nathan-peterson.webp',
		firstName: 'Sarah',
		lastName: 'Lee',
		email: 'slee@gmail.com',
		phone: '123 456 789',
		position: 'Mechanic',
		location: 'USA',
		hireData: '01.02.2023',
		earnings: '125',
		actions: 'edit, delete',
		verified: true,
	},
];
