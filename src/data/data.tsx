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

interface Person {
	id: number;
	avatar: string;
	name: string;
	react: string;
	message: string;
	checked: boolean;
}

export const personsData: Person[] = [
	{
		id: 1,
		avatar: '../src/assets/img/people/avatar-mark-webber.webp',
		name: 'Mark Webber',
		react: 'reacted to your recent post',
		message: 'Sure, can be over there',
		checked: false,
	},
	{
		id: 2,
		avatar: '../src/assets/img/people/avatar-angela-gray.webp',
		name: 'Angela Gray',
		react: 'followed you',
		message: 'Ok i will call you',
		checked: false,
	},
	{
		id: 3,
		avatar: '../src/assets/img/people/avatar-jacob-thompson.webp',
		name: 'Jacob Thompson',
		react: 'has joined your group',
		message: 'Congratulate him',
		checked: false,
	},
	{
		id: 4,
		avatar: './src/assets/img/people/avatar-kimberly-smith.webp',
		name: 'Kimberly Smith',
		react: 'commented on your picture',
		message: 'Check your earnings',

		checked: true,
	},
	{
		id: 5,
		avatar: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		name: 'Rizky Hasanuddin',
		react: 'commented on your picture',
		message: 'Assign her new task',
		checked: true,
	},
	{
		id: 6,
		avatar: './src/assets/img/people/avatar-nathan-peterson.webp',
		name: 'Nathan Peterson',
		react: 'commented on your picture',
		message: 'Sure, can be over there',
		checked: true,
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
