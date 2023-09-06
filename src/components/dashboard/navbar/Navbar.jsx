import React, { useContext, useState } from "react";
import logo from "../../../assets/dashboardLogo.svg";
import styles from "../../../style";
import { Link } from "react-router-dom";
import Sidenav from "../sidebar/Sidenav";
import CreateProfile from "./CreateProfile";
import ChooseTemplates from "./ChooseTemplates";
import DbSearch from "./DbSearch";
import User from "./User";
import { BsCaretDown } from "react-icons/bs";
import Account from "./Account";
import { TemplateContext } from "../../../context/TemplateContext";

const DashboardNav = () => {
	const { toggle, setToggle, openTemplatesList, setOpenTemplatesList } =
		useContext(TemplateContext);

	return (
		<>
			<section
				className={`bg-secondary h-[80px] ex:h-[71px] w-[100vw] sm:${styles.flexBtw} border flex font-firaSans sm:fixed sm:z-50`}
			>
				<div className="flex items-center xs:justify-between justify-between">
					<div className="ml-8 sm:ml-1 mx-1 sm:w-[165px] xs:w-full h-[28px]">
						<Link to="/dashboard/overview">
							<img
								src={logo}
								alt="peoples profiles"
								className="w-[100%] h-[100%] min-w-[120px]"
							/>
						</Link>
					</div>
					<div
						className={`sm:flex hidden item-center justify-between sm:ml-16 md:ml-14 sm:w-[280px]`}
					>
						<button
							className="py-1 px-4 bg-slate-500 text-secondary"
							onClick={() => setOpenTemplatesList((prev) => !prev)}
						>
							Create a profile
						</button>
						<div
							className={`${openTemplatesList ? "block" : "hidden"} relative`}
						>
							<CreateProfile setOpenTemplatesList={setOpenTemplatesList} />
						</div>
					</div>
				</div>

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
							<DbSearch />
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

				<div className="flex">
					<div className="sm:flex hidden w-[170px]">
						<DbSearch />
					</div>
					<div className="mx-2 sm:mr-6">
						<User />
					</div>
				</div>
			</section>

			<Account />

			<Sidenav />
		</>
	);
};

export default DashboardNav;
