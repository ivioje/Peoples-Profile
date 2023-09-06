import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "@firebase/auth";
import styles from "../../../style";
import { auth } from "../../../firebase";

const Account = () => {
	const navigate = useNavigate();

	const logOut = () => {
		signOut(auth)
			.then(() => {
				//sign out successful
				navigate("/login");
				console.log("logged out");
			})
			.catch((error) => {
				console.log("an error occured");
			});
	};

	return (
		<div
			className={`absolute top-[83px] ex:top-[73px] bg-secondary right-1 p-4 h-[150px] flex flex-col items-center justify-center font-poppins text-primary border z-50`}
		>
			<h3 className="border-b text-gray-500">Account</h3>
			<p className="m-2 border-b w-full text-center">
				<NavLink to="account">Account details</NavLink>
			</p>
			<button
				className="m-2 border-b w-full text-center"
				onClick={logOut}
			>
				Log out
			</button>
		</div>
	);
};

export default Account;
