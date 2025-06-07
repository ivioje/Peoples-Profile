import React from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import Profiles from "./routes/Profiles";
import Templates from "./routes/Templates";
import Guide from "./routes/Guide";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Footer from "./components/Footer";
import { Dashboard } from "./routes/Dashboard";
import ProfileDetails from "./components/profiles/profileDetails";
import ProfessionalProfile from "./components/templates/professionalTemplate/ProfessionalProfile";
import FinishedTemplate from "./components/templates/professionalTemplate/FinishedTemplate";
import DashboardNav from "./components/dashboard/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
	const location = useLocation();
	const dashboardLocation = location.pathname.includes("/dashboard");

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition="slide"
			/>
			{dashboardLocation ? <DashboardNav /> : <Navbar />}
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
					path="/profiles/user/:id"
					element={<ProfileDetails />}
				/>
				<Route
					path="/templates/professional-portfolio-template"
					element={<ProfessionalProfile />}
				/>
				<Route
					path="/templates/professional-portfolio-template/finished-template"
					element={<FinishedTemplate />}
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
