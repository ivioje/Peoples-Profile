import React from "react";
import { auth } from "../../../firebase";

const User = () => {
	const user = auth.currentUser.email.charAt(0).toUpperCase();

	return (
		<div className="h-[31px] w-[31px] rounded-full bg-black text-[22px] font-[700] text-secondary text-center opacity-90 cursor-pointer ">
			<h1 className="">{user}</h1>
		</div>
	);
};

export default User;
