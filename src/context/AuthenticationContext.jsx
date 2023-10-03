import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsloggedIn] = useState(false);
	//const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const hasErrors = Object.keys(errors).length > 0;

	const onLogin = (e) => {
		if (hasErrors) {
			console.log(errors);
		} else {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					// const user = userCredential.user;
					// navigate(`/dashboard/overview`);
					console.log("logged in");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, errorMessage);
				});
		}
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				//sign out successful
				// navigate("/login");
				console.log("logged out");
			})
			.catch((error) => {
				console.log("an error occured");
			});
	};

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
		<AuthContext.Provider
			value={{
				isLoggedIn,
				setIsloggedIn,
				register,
				handleSubmit,
				setEmail,
				setPassword,
				onLogin,
				logOut,
				errors,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
