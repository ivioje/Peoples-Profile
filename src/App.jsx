import React from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profiles from "./routes/Profiles";
import Templates from "./routes/Templates";
import Guide from "./routes/Guide";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/Footer";
import { Dashboard } from "./routes/Dashboard";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/profiles"
					element={<Profiles />}
				/>
				<Route
					path="/templates"
					element={<Templates />}
				/>
				<Route
					path="/guide"
					element={<Guide />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<SignUp />}
				/>
				<Route
					path="/dashboard/*"
					element={<Dashboard />}
				/>
				<Route
					path="*"
					element={<Navigate to="/" />}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
