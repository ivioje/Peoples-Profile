import React, { useContext, useEffect } from "react";
import {
	Route,
	Routes,
	Navigate,
	BrowserRouter as Router,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../../context/AuthenticationContext";
import { auth } from "../../utils/firebase";

const ProtectedRoute = ({ children, isLoggedIn, ...rest }) => {
	// const { isLoggedIn } = useContext(AuthContext);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user.displayName);
				isLoggedIn = true; // User is authenticated
			} else {
				isLoggedIn = false; // User is not authenticated
			}
		});

		return () => {
			unsubscribe(); // Unsubscribe from the listener when component unmounts
		};
	}, []);

	return (
		<Routes>
			<Route
				{...rest}
				element={isLoggedIn ? children : <Navigate to="/login" />}
			/>
		</Routes>
	);
};

export default ProtectedRoute;
