import React, { useContext } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import DashboardNav from "./components/dashboard/DashboardNav";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home, Profiles, Templates, Guide, Login, SignUp, Dashboard } from './pages/index'
import IndexLayout from "./layouts/IndexLayout";
import { AuthContext } from "./context/AuthenticationContext";
import { Loader } from "lucide-react";

const App = () => {
	const { isLoggedIn } = useContext(AuthContext);
	console.log("isLoggedIn", isLoggedIn);

	if (isLoggedIn === undefined) {
		return <div className="min-h-screen flex justify-center items-center">
					<Loader size={25} className="animate-spin" />
				</div>;
	}

	return (
		<div>
			<Toaster />
			{isLoggedIn ? <DashboardNav /> : <Navbar />}
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
					path="/template/*"
					element={<IndexLayout title="Templates" footer="Footer Content" />}
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
