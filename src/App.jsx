import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import DashboardNav from "./components/dashboard/DashboardNav";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home, Profiles, Templates, Guide, Login, SignUp, Dashboard } from './pages/index'
import BasicTemplate from "./layouts/basic/BasicTemplate";

const App = () => {
	const location = useLocation();
	const dashboardLocation = location.pathname.includes("/dashboard");

	return (
		<div>
			<Toaster />
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
					path="/templates/basic"
					element={<BasicTemplate />}
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
					path="/dashboard/:userId/*"
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
