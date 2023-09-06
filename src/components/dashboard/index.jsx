import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/AuthenticationContext";
import DashboardNav from "./navbar/Navbar";

const Dashboard = () => {
	const { isLoggedIn } = useContext(AuthContext);

	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}

	return (
		<>
			<DashboardNav />
		</>
	);
};

export default Dashboard;
