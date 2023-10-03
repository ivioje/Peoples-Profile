import React, { useContext, useState } from "react";
import logo from "../../assets/dashboardLogo.svg";
import styles from "../../style";
import { Link } from "react-router-dom";
import CreateProfile from "./CreateProfile";
import { BsCaretDown, BsSearch } from "react-icons/bs";
import { TemplateContext } from "../../context/TemplateContext";

const DashboardNav = () => {
	const { toggle, setToggle } = useContext(TemplateContext);
	const [isAccountOpen, setIsAccountOpen] = useState(false);
	const [openTemplatesList, setOpenTemplatesList] = useState(false);

	const toggleAccount = () => {
		setIsAccountOpen(() => !isAccountOpen);
	};

	const toggleTemplateList = () => {
		setOpenTemplatesList(() => !openTemplatesList);
	};

	return (
		<>
			<section
				className={`bg-secondary h-[80px] ex:h-[71px] w-[100vw] items-center justify-between  border flex font-firaSans  sm:z-50`}
			>
				{/*desktop nav */}
				<div className="flex items-center">
					<div className="w-full h-[28px]">
						<Link to="/dashboard/overview">
							<img
								src={logo}
								alt="peoples profiles"
								className="w-[100%] h-[100%] min-w-[120px]"
							/>
						</Link>
					</div>
					<div className={`flex item-center justify-between`}>
						<button
							className=" bg-slate-500 text-secondary w-full"
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
						className={`${styles.flexCenter} cursor-pointer text-primary bg-slate-300 p-1`}
						onClick={() => setToggle((prev) => !prev)}
					>
						More <BsCaretDown className="m-1" />
					</h5>

					<div
						className={`${
							toggle ? "flex" : "hidden"
						} left py-6 px-2 bg-secondary absolute top-14 my-2 rounded-xl sidebar mt-7 z-50 border shadow-xl`}
					>
						<div className="flex flex-col-reverse h-[120px] w-[170px] justify-center items-center">
							<div className="flex items-center bg-slate-300 p-[10px] rounded-full text-[18px]">
								<BsSearch />
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

				{/**search */}
				<div className="flex items-center justify-around w-[200px]">
					<div className="flex items-center bg-slate-300 p-[10px] rounded-full text-[18px]">
						<BsSearch />
					</div>

					{/**user */}
					<div
						onClick={toggleAccount}
						className="rounded-full bg-gray-900 text-[18px] font-bold text-secondary text-center cursor-pointer px-[13px] py-1"
					>
						R
					</div>

					<button className="font-bold text-gray-900 text-[18px]">
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
