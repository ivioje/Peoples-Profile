import React, { useContext } from "react";
import { AuthContextProvider } from "../../../context/AuthenticationContext";
import { auth } from "../../../firebase";

const User = () => {
	return (
		<div className="h-[31px] w-[31px] rounded-full bg-black text-[22px] font-[700] text-secondary text-center opacity-90 cursor-pointer ">
			<h1 className="uppercase">R</h1>
		</div>
	);
};

export default User;
