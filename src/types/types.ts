// Calendartype
import { Dispatch, SetStateAction } from 'react';

export interface Meeting {
	id: string;
	name: string;
	title: string;
	time: string;
	date: string;
}

export interface MeetingProps {
	meeting: Meeting;
	onDelete: (id: string) => void;
}

export interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	setMeetings: Dispatch<SetStateAction<Meeting[]>>;
}

//InvoiceType

export interface InvoiceListProps {
	invoice: {
		id: string;
		clientName: string;
		emailAddress: string;
		streetAddress: string;
		city: string;
		state: string;
		zipCode: number;
		amount: number;
		status: string;
	};
	onEdit: (id: string) => void;
	onDelete: (id: string) => void;
}

export interface InvoiceFormProps {
	onSave: (invoice: {
		clientName: string;
		emailAddress: string;
		streetAddress: string;
		city: string;
		state: string;
		zipCode: number;
		amount: number;
		status: string;
	}) => void;
	editedInvoice?:
		| {
				id: string;
				clientName: string;
				emailAddress: string;
				streetAddress: string;
				city: string;
				state: string;
				zipCode: number;
				amount: number;
				status: string;
		  }
		| undefined;
	onClearEdit: () => void;
	isOpen: boolean;
	closeModal: () => void;
}

export interface InvoiceData {
	id: string;
	clientName: string;
	emailAddress: string;
	streetAddress: string;
	city: string;
	state: string;
	zipCode: number;
	amount: number;
	status: string;
}

//KanbanType

export interface TaskCardProps {
	task: Task;
	deleteTask: (id: Id) => void;
	updateTask: (id: Id, content: string) => void;
}

export type Id = string | number;

export interface Column {
	id: string | number;
	title: string;
}
export interface Task {
	id: string | number;
	columnId: string | number;
	content: string;
}

export interface KanbanContainerProps {
	column: Column;
	deleteColumn: (id: Id) => void;
	updateColumn: (id: Id, title: string) => void;
	createTask: (columnId: Id) => void;
	updateTask: (id: Id, content: string) => void;
	deleteTask: (id: Id) => void;
	tasks: Task[];
}




//SidebarType

export interface SidebarProps {
	renderRoutes: () => React.ReactNode;
}

//TopbarType

export interface NotificationProps {
	checkedCount: number;
	setCheckedCount: React.Dispatch<React.SetStateAction<number>>;
	setUnread: React.Dispatch<React.SetStateAction<boolean>>;
}

//ContextType

export interface AppContextProps {
	isNotificationClicked: boolean;
	toggleNotification: () => void;
	isMessageClicked: boolean;
	toggleMessage: () => void;
	isCartClicked: boolean;
	toggleCart: () => void;
	handleCloseAll: () => void;
}

//CryptoType

export interface CryptoProps {
	id: number;
	name: string;
	image: string;
	symbol: string;
	current_price: number;
	price_change_percentage_24h: number;
	market_cap: number;
	market_cap_rank: number;
	ath: number;
}


//PersonType

export interface PersonHome {
	id: number;
	avatar: string;
	avatarAlt: string;
	name: string;
	workProfile: string;
	task: number;
	trend: boolean;
	money: number;
}

export interface Person {
	id: number;
	avatar: string;
	avatarAlt: string;
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

