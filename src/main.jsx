import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Profiles from "./routes/Profiles";
import Templates from "./routes/Templates";
import Guide from "./routes/Guide";
import ErrorPage from "./components/ErrorPage";
import SuccessPage from "./routes/SuccessPage";
import Overview from "./routes/dashboard/overview";
import UploadedProfiles from "./routes/dashboard/uploads";
import SavedProfiles from "./routes/dashboard/saved";
import Bookmarks from "./routes/dashboard/bookmarked";
import Sharedprofiles from "./routes/dashboard/shared";
import Trash from "./routes/dashboard/trash";
import ProfileDetails from "./components/profiles/profileDetails";
import { ContextProvider } from "./context/GlobalContext";
import ProfessionalProfile from "./components/templatesPage/templates/professionalTemplate/ProfessionalProfile";
import FinishedTemplate from "./components/templatesPage/templates/professionalTemplate/FinishedTemplate";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		errorElement: <ErrorPage />,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "/profiles",
// 				element: <Profiles />,
// 			},
// 			{
// 				path: "/templates",
// 				element: <Templates />,
// 			},
// 			{
// 				path: "/guide",
// 				element: <Guide />,
// 			},
// 			{
// 				path: "/login",
// 				element: <Login />,
// 			},
// 			{
// 				path: "/signup",
// 				element: <SignUp />,
// 			},
// 			{
// 				path: "/success",
// 				element: <SuccessPage />,
// 			},
// 			{
// 				path: "/profiles/user/:id",
// 				element: <ProfileDetails />,
// 			},
// 			{
// 				path: "/templates/professional-portfolio-template",
// 				element: <ProfessionalProfile />,
// 			},
// 			{
// 				path: "/templates/professional-portfolio-template/finished-template",
// 				element: <FinishedTemplate />,
// 			},
// {
// 	path: "*",
// 	element: <Navigate to="/" />,
// },
// 	],
// },
// {
// 	path: "/dashboard",
// 	element: <Dashboard />,
// 	errorElement: <ErrorPage />,
// 	children: [
// 		{
// 			path: "overview",
// 			element: <Overview />,
// 		},
// 		{
// 			path: "uploads/:id",
// 			element: <UploadedProfiles />,
// 		},
// 		{
// 			path: "saved/:id",
// 			element: <SavedProfiles />,
// 		},
// 		{
// 			path: "bookmarks/:id",
// 			element: <Bookmarks />,
// 		},
// 		{
// 			path: "shared/:id",
// 			element: <Sharedprofiles />,
// 		},
// 		{
// 			path: "trash/:id",
// 			element: <Trash />,
// 		},
// 		{
// 			path: "*",
// 			element: <Navigate to="overview/:id" />,
// 		},
// 	],
// },
//]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<ContextProvider>
				<App />
			</ContextProvider>
		</Router>
	</React.StrictMode>
);
