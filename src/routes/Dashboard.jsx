import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./dashboard/overview";
import SavedProfiles from "./dashboard/saved";
import Bookmarks from "./dashboard/bookmarked";
import UploadedProfiles from "./dashboard/uploads";
import Sharedprofiles from "./dashboard/shared";
import Trash from "./dashboard/trash";
import SideBar from "../components/dashboard/Sidenav";
import Footer from "../components/dashboard/Footer";

export const Dashboard = () => {
	return (
		<div>
			<div className="flex items-center justify-center">
				<div className="ss:w-[25vw]">
					<SideBar />
				</div>

				<div className="ss:w-[75vw]">
					<Routes>
						<Route
							path="overview"
							element={<Overview />}
						/>
						<Route
							path="uploads"
							element={<UploadedProfiles />}
						/>
						<Route
							path="saved"
							element={<SavedProfiles />}
						/>
						<Route
							path="bookmarks"
							element={<Bookmarks />}
						/>
						<Route
							path="shared"
							element={<Sharedprofiles />}
						/>
						<Route
							path="trash"
							element={<Trash />}
						/>
						<Route path="" />
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
};
