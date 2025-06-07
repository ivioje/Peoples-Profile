import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [name, setName] = useState("");
	const [userId, setUserId] = useState("");

	const logIn = (userData) => {
		setIsLoggedIn(true);
		setName(userData.name);
		setUserId(userData._id);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setName("");
		setUserId("");
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, name, setName, logIn, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
