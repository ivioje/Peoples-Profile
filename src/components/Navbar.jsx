import React, { useState } from "react";
import { navLinks } from "../constants/index";
import logo from "../assets/logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import styles from "../style";
import GetStarted from "./auth/GetStarted";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	let activeStyle = {
		fontWeight: "900",
	};

	return (
		<>
			<section
				className={`bg-primary h-[80px] ex:h-[71px] w-[100%] ${styles.flexBtw} flex-wrap item`}
			>
				<div className=" mx-2 sm:mx-6 ex:mx-[74px] ex:w-[165px] w-[100px] h-[28px]">
					<NavLink to="/">
						<img
							src={logo}
							alt="peoples profiles"
							className="w-[100%] h-[100%] min-w-[160px]"
						/>
					</NavLink>
				</div>

				{/*desktop nav */}
				<div className={`mx-[74px] font-poppins ${styles.flexCenter}`}>
					<ul className="list-none ex:flex hidden justify-end items-center">
						{navLinks.map((navlink) => (
							<div
								key={navlink.id}
								className="ex:text-dimWhite px-3 cursor-pointer"
							>
								<NavLink
									to={`/${navlink.id}`}
									className={
										navlink.item ? "font-bold navLinks" : "font-normal navLinks"
									}
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									{navlink.title}
								</NavLink>
							</div>
						))}
						<GetStarted />
					</ul>
				</div>

				{/*mobile nav */}
				<div className="ex:hidden flex ">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="mr-4 sm:mr-6 w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle((prev) => !prev)}
					/>

					<div
						className={`${
							toggle ? "flex" : "hidden"
						} p-6 primary-gradient absolute top-20 right-0 mx-4 my-2 
                 rounded-xl sidebar mt-7 z-50`}
					>
						<ul className="list-none flex flex-col justify-end items-center flex-1">
							{navLinks.map((nav) => (
								<div
									key={nav.id}
									className={
										"font-poppins font-normal cursor-pointer text-[16px] my-2 text-dimWhite"
									}
								>
									<NavLink
										to={`/${nav.id}`}
										className="navLinks"
										onClick={() => setToggle(false)}
									>
										{nav.title}
									</NavLink>
								</div>
							))}
							<div
								className="mt-2"
								onClick={() => setToggle(false)}
							>
								<GetStarted />
							</div>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Navbar;
