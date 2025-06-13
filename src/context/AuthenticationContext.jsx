import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [name, setName] = useState("");
	const [userId, setUserId] = useState("");
	const [user, setUser] = useState(null);

	const logIn = (userData) => {
		setIsLoggedIn(true);
		setName(userData.name);
		setUserId(userData._id);
		setUser(userData);
		sessionStorage.setItem("user", JSON.stringify(userData));
	};

	const logout = () => {
		setIsLoggedIn(false);
		setName("");
		setUserId("");
		setUser(null);
		sessionStorage.removeItem("user");
	};

	useEffect(() => {
		const savedUser = sessionStorage.getItem("user");
		if (savedUser) {
			const userData = JSON.parse(savedUser);
			setIsLoggedIn(true);
			setName(userData.name);
			setUserId(userData._id);
			setUser(userData);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ isLoggedIn, name, setName, logIn, logout, user, setUser, userId, setUserId }}>
			{children}
		</AuthContext.Provider>
	);
};
