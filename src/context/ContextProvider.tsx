import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
	isNotificationClicked: boolean;
	toggleNotification: () => void;
	isMessageClicked: boolean;
	toggleMessage: () => void;
	isCartClicked: boolean;
	toggleCart: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [isNotificationClicked, setNotificationClicked] = useState(false);
	const [isMessageClicked, setMessageClicked] = useState(false);
	const [isCartClicked, setCartClicked] = useState(false);

	const toggleNotification = () =>
		setNotificationClicked(!isNotificationClicked);
	const toggleMessage = () => setMessageClicked(!isMessageClicked);
	const toggleCart = () => setCartClicked(!isCartClicked);

	const value: AppContextProps = {
		isNotificationClicked,
		toggleNotification,
		isMessageClicked,
		toggleMessage,
		isCartClicked,
		toggleCart,
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
