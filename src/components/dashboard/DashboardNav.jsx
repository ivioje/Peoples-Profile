import React, { useContext, useState } from "react";
import logo from "../../assets/dashboardLogo.svg";
import { Link, NavLink } from "react-router-dom";
import CreateProfile from "./CreateProfile";
import { BsCaretDown, BsSearch } from "react-icons/bs";
import { TemplateContext } from "../../context/TemplateContext";
import { AuthContext } from "../../context/AuthenticationContext";
import styles from "../../styles/style";
import { logout } from "@/utils/api";
import toast from "react-hot-toast";

const DashboardNav = () => {
	const { toggle, setToggle } = useContext(TemplateContext);
	const [isAccountOpen, setIsAccountOpen] = useState(false);
	const [openTemplatesList, setOpenTemplatesList] = useState(false);

	const { user } = useContext(AuthContext);


	const toggleAccount = () => {
		setIsAccountOpen(() => !isAccountOpen);
	};

	const toggleTemplateList = () => {
		setOpenTemplatesList(() => !openTemplatesList);
	};

	const handleLogout = () => {
		logout()
		.then(() => {
			toast.success("Logged out successfully");
			navigate("/login");
		})
		.catch((err) => {
			toast.error("Error logging out");
		});
	};

	return (
		<>
			<section
				className={`bg-secondary h-[80px] ex:h-[71px] w-full items-center justify-between border flex font-firaSans sm:z-50 md:px-10 sm:px-5 px-2`}
			>
				{/*desktop nav */}
				<div className="flex items-center justify-between">
					<div className="w-full h-[28px]">
						<Link to={`/dashboard/${user?._id}/overview`}>
							<img
								src={logo}
								alt="peoples profiles"
								className="w-[100%] h-[100%] min-w-[120px]"
							/>
						</Link>
					</div>
					<div className={`sm:flex hidden item-center justify-between ml-14`}>
						<button
							className=" bg-slate-500 text-secondary py-3 w-[120px]"
							onClick={toggleTemplateList}
						>
							Create a profile
						</button>
						{openTemplatesList && <CreateProfile />}
					</div>
				</div>

				{/*mobile nav */}

				<div className="sm:hidden flex w-full justify-end items-end relative">
					<h5
						className={`${styles.flexCenter} cursor-pointer text-primary bg-slate-300 p-1 mx-5`}
						onClick={() => setToggle((prev) => !prev)}
					>
						More <BsCaretDown className="m-1" />
					</h5>

					<div
						className={`${
							toggle ? "flex" : "hidden"
						} max-ss:left-0 py-6 px-2 bg-secondary absolute top-14 my-2 rounded-xl sidebar mt-7 z-50 border shadow-xl`}
					>
						<div className="flex flex-col h-[120px] w-[170px] justify-center items-center">
							<div className="flex items-center justify-between bg-white rounded-md w-full py-1 px-1">
								<h3 className="text-slate-500">Search...</h3>
								<span className="rounded-full p-[10px] text-[16px] bg-slate-300">
									<BsSearch />
								</span>
							</div>
							<div
								onClick={() => setToggle(false)}
								className="my-5"
							>
								<button
									className="py-1 px-4 bg-slate-500 text-secondary"
									onClick={() => setOpenTemplatesList((prev) => !prev)}
								>
									Create a profile
								</button>
							</div>
							{/**user */}

							<button onClick={handleLogout} className="font-bold text-gray-900 text-[18px] hover:bg-slate-400 p-1">
								Log out
							</button>
						</div>
					</div>

					<div
						className={`${
							openTemplatesList ? "block z-40" : "hidden"
						} relative`}
					>
						<CreateProfile />
					</div>
				</div>

				<div
					onClick={toggleAccount}
					className="rounded-full sm:hidden block bg-gray-900 text-[18px] font-bold text-secondary text-center cursor-pointer px-[13px] py-1"
				>
					R
				</div>
				{/*end of mobile nav*/}

				{/**search */}
				<div className="sm:flex hidden items-center justify-around w-[200px]">
					<div className="flex items-center bg-slate-300 p-[10px] rounded-full text-[18px]">
						<BsSearch />
					</div>

					{/**user avatar */}
					<div onClick={toggleAccount} className="cursor-pointer">
						<img 
						 src={user?.avatar || "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"}
						 alt={user?.username || "User"} 
						 className="w-[40px] h-[40px] rounded-full" 
						/>
					</div>

					<button onClick={handleLogout} className="font-bold text-gray-900 text-[18px] hover:bg-slate-400 p-1">
						Log out
					</button>
				</div>

				{/**account */}
				{isAccountOpen && (
					<div
						className={`absolute top-[83px] ex:top-[73px] bg-secondary right-1 p-4 h-[150px] flex flex-col items-start font-poppins text-primary border z-50`}
					>
						<p className="m-2 border-b w-full text-center">
							<NavLink to="account">Account details</NavLink>
						</p>
					</div>
				)}
			</section>
		</>
	);
};

export default DashboardNav;
