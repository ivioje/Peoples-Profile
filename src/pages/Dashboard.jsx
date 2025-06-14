import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, Link, NavLink, useParams } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { getUserById } from "../utils/api";
import styles from "../styles/style";
import { sidenavItems } from "../constants";
import { Overview, SavedProfiles, Sharedprofiles, Trash, UploadedProfiles, Bookmarks } from './index.js'
import { AuthContext } from "../context/AuthenticationContext.jsx";

const Dashboard = () => {
	const [toggle, setToggle] = useState(false);
	const { userId } = useContext(AuthContext)

	console.log("userId", userId);

	let activeStyle = {
		color: "#334257",
		background: "rgba(51, 66, 87, 0.26)",
	};

	return (
		<div>
			<div className="sm:flex block items-start justify-center">
				{/**dashboard sidebar */}
				<div
					className={`h-full w-full sm:w-[250px] ${styles.flexBtw} flex-col flex-wrap relative font-poppins`}
				>
					{/**desktop */}
					<div className={`font-poppins sm:${styles.flexCol} hidden mt-20 `}>
						<ul className="list-none flex flex-col justify-center items-start flex-1 pl-0  pr-2 pb-2">							{sidenavItems.map((item) => (
								<NavLink
									to={`/dashboard/${userId}/${item.id}`}
									key={item.id}
									className="py-2 w-full px-1 m-1 rounded-[3px]"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									{item.title}
								</NavLink>
							))}

							<button
								className={`${styles.flexBtw} p-3 text-primary border border-dotted border-primary rounded-full my-8`}
							>
								<BsPlus className="text-[25px]" />
								New Profile
							</button>

							<div className="text-primary hidden xs:flex my-5">
								<Link to="/profiles">Back to profiles page</Link>
							</div>
						</ul>
					</div>

					{/**mobile */}
					<div className="sm:hidden flex flex-col absolute shadow-md h-[100vh] w-full ">
						<div
							onClick={() => setToggle((prev) => !prev)}
							className="absolute top-[-50px] left-0 cursor-pointer text-[25px] mx-2 z-[100] text-dimWhite"
						>
							<AiOutlineMenu />
						</div>

						<div
							className={`${
								toggle ? "flex" : "hidden"
							} flex-col items-center justify-between`}
						>
							<ul className={`flex justify-start absolute dashBSidebar h-fit w-[70vw] left-0 flex-col z-40 pt-2 pb-2 px-1 bg-white border-b shadow-sm`}>
								{sidenavItems.map((item) => (
									<NavLink
										to={`/dashboard/${userId}/${item.id}`}
										key={item.id}
										className="py-3 w-full px-1 rounded-[3px]"
										style={({ isActive }) =>
											isActive ? activeStyle : undefined
										}
										onClick={() => setToggle(false)}
									>
										{item.title}
									</NavLink>
								))}
								<button
									className={`${styles.flexBtw} w-[150px] mt-8 p-3 text-primary border border-dotted border-primary rounded-full`}
								>
									<BsPlus className="text-[25px]" />
									New Profile
								</button>

								<div className="text-primary mt-10 pb-24">
									<Link to="/profiles">Back to profiles page</Link>
								</div>
							</ul>
						</div>
					</div>
				</div>				
				
				{/**dashboard routes */}
				<div className="sm:w-[75vw] w-[100vw]">
					<Routes>
						<Route index element={<Overview />} />
						<Route path="overview" element={<Overview />} />
						<Route path="uploads" element={<UploadedProfiles />} />
						<Route path="saved" element={<SavedProfiles />} />
						<Route path="bookmarks" element={<Bookmarks />} />
						<Route path="shared" element={<Sharedprofiles />} />
						<Route path="trash" element={<Trash />} />
					</Routes>
				</div>
			</div>

			{/**dashboard footer */}
			<div className=" w-full text-center flex justify-center my-10">
				<p className="font-[500] ">Total profile views:</p>
				<span className="font-[800] text-[20px] mx-3">{"30"}</span>
			</div>
		</div>
	);
};
export default Dashboard;