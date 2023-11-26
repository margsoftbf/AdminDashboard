interface Person {
	id: number;
	avatar: string;
	name: string;
	react: string;
	checked: boolean;
}
export const personsData: Person[] = [
	{
		id: 1,
		avatar: '../src/assets/img/people/avatar-mark-webber.webp',
		name: 'Mark Webber',
		react: 'reacted to your recent post',
		checked: false,
	},
	{
		id: 2,
		avatar: '../src/assets/img/people/avatar-angela-gray.webp',
		name: 'Angela Gray',
		react: 'followed you',
		checked: false,
	},
	{
		id: 3,
		avatar: '../src/assets/img/people/avatar-jacob-thompson.webp',
		name: 'Jacob Thompson',
		react: 'has joined your group',
		checked: false,
	},
	{
		id: 4,
		avatar: './src/assets/img/people/avatar-kimberly-smith.webp',
		name: 'Kimberly Smith',
		react: 'commented on your picture',
		checked: true,
	},
	{
		id: 5,
		avatar: './src/assets/img/people/avatar-rizky-hasanuddin.webp',
		name: 'Rizky Hasanuddin',
		react: 'commented on your picture',
		checked: true,
	},
	{
		id: 6,
		avatar: './src/assets/img/people/avatar-nathan-peterson.webp',
		name: 'Nathan Peterson',
		react: 'commented on your picture',
		checked: true,
	},
];
