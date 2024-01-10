import React, { createContext, useState } from "react";
import { useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsloggedIn] = useState(false);
	const [name, setName] = useState("");

	//const navigate = useNavigate();

	const logIn = async (email, password) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			// You can now access user information if login is successful
			console.log("Logged in user:", user);
			return user;
		} catch (error) {
			console.error("Login error:", error);
			throw error;
		}
	};

	// Function to create a user and store their name
	async function createUserWithProfile(userId, name) {
		try {
			const docRef = await addDoc(collection(db, "users"), {
				name: name,
				uid: userId,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	const signUp = async (email, password) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			console.log("Signed up user:", user);
			createUserWithProfile(user.uid, name);
			return user;
		} catch (error) {
			console.error("Signup error:", error);
			throw error;
		}
	};

	const logOut = async () => {
		try {
			await signOut(auth);
			// User is now logged out
			console.log("User logged out");
		} catch (error) {
			console.error("Logout error:", error);
			throw error;
		}
	};

	return (
		<AuthContext.Provider
			value={{
				signUp,
				logIn,
				logOut,
				name,
				setName,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
