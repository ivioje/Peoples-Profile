import React, { useState } from "react";
import styles from "../../style";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContext";

const SignUp = () => {
	const { signUp, name, setName } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			// Call the signUp function with the provided name, email, and password
			await signUp(email, password);
		} catch (error) {
			console.error("Signup error:", error);
		}
	};

	return (
		<section
			className={`font-poppins div-overlay ${styles.flexCenter} p-2 relative`}
		>
			<div
				className={`bg-white ${styles.flexBtw} flex-col p-5 sm:p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-full rounded-[34px]`}
			>
				<h2 className="font-[600] p-1 text-[22px]">Sign Up</h2>
				<form
					className={`${styles.flexBtw} flex-col mt-12 w-full sm:w-[90%] px-1`}
					onSubmit={handleSignUp}
				>
					<div className="mb-8 flex flex-col w-full">
						<input
							name="name"
							placeholder="Enter your name"
							className="h-9 p-2 placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-8 flex flex-col w-full">
						<input
							name="email"
							placeholder="Enter an email address"
							className="h-9 p-2 placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-8 flex flex-col w-full">
						<input
							name="password"
							placeholder="Enter a password"
							className="h-9 p-2 placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<button
						type="submit"
						className="w-full p-2 mt-10 mb-6 bg-primary rounded text-dimWhite bg-opacity-95  hover:bg-opacity-100 text-center "
					>
						Sign Up
					</button>

					<p>Or</p>

					<button className={`${styles.flexBtw} flex-wrap p-1 my-6`}>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
							alt=""
							className="w-[50px] h-[50px] mx-3 "
						/>
					</button>
					<p className="text-center">
						Already have an account?
						<NavLink
							to={`/login`}
							className="text-gradient"
						>
							{" "}
							Log In
						</NavLink>
					</p>
				</form>
			</div>
		</section>
	);
};

export default SignUp;
