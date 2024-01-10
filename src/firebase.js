// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// Required for side-effects
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCfvLTXn3K4Bdzt7byDmBOYriSXxs63o-o",
	authDomain: "peoples-profile.firebaseapp.com",
	projectId: "peoples-profile",
	storageBucket: "peoples-profile.appspot.com",
	messagingSenderId: "68430614685",
	appId: "1:68430614685:web:56afc33a2a87db2d464474",
	measurementId: "G-ZFJ9LT03LB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;
