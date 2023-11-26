import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
	isNotificationClicked: boolean;
	toggleNotification: () => void;
	isMessageClicked: boolean;
	toggleMessage: () => void;
	isCartClicked: boolean;
	toggleCart: () => void;
	handleCloseAll: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [isNotificationClicked, setNotificationClicked] = useState(true);
	const [isMessageClicked, setMessageClicked] = useState(false);
	const [isCartClicked, setCartClicked] = useState(false);

	const toggleNotification = () => {
		{
			setMessageClicked(false);
			setCartClicked(false);
			setNotificationClicked(!isNotificationClicked);
		}
	};
	const toggleMessage = () => {
		{
			setMessageClicked(!isMessageClicked);
			setCartClicked(false);
			setNotificationClicked(false);
		}
	};
	const toggleCart = () => {
		{
			setMessageClicked(false);
			setCartClicked(!isCartClicked);
			setNotificationClicked(false);
		}
	};

	const handleCloseAll = () => {
		setMessageClicked(false);
		setCartClicked(false);
		setNotificationClicked(false);
	};

	const value: AppContextProps = {
		isNotificationClicked,
		toggleNotification,
		isMessageClicked,
		toggleMessage,
		isCartClicked,
		toggleCart,
		handleCloseAll,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used within an AppProvider');
	}
	return context;
};
