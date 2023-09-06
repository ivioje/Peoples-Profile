import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsloggedIn] = useState(false);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsloggedIn(true); // User is authenticated
			} else {
				setIsloggedIn(false); // User is not authenticated
			}
		});

		return () => {
			unsubscribe(); // Unsubscribe from the listener when component unmounts
		};
	}, []);

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsloggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};
