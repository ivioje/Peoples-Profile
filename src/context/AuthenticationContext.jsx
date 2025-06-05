import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [name, setName] = useState("");

	// Placeholder login/logout for context compatibility
	const logIn = () => {};
	const logout = () => {
		setIsLoggedIn(false);
		setName("");
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, name, setName, logIn, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
