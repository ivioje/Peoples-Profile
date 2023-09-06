import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

import styles from "../../../style";

const Login = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const hasErrors = Object.keys(errors).length > 0;

	const onLogin = (e) => {
		if (hasErrors) {
			console.log(errors);
		} else {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					navigate(`/dashboard/overview/${user.uid}`);
					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, errorMessage);
				});
		}
	};

	return (
		<section className={`font-poppins div-overlay ${styles.flexCenter}  p-2`}>
			<div
				className={`bg-white ${styles.flexBtw} flex-col p-5 sm:p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-full rounded-[34px] `}
			>
				<h2 className="font-[600] p-1 text-[22px]">Welcome back!</h2>
				<p>Log in to continue</p>

				<form
					onSubmit={handleSubmit(onLogin)}
					className={`${styles.flexBtw} flex-col mt-12 w-full sm:w-[90%] px-1`}
				>
					<input
						{...register("email", { required: true })}
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						className="h-9 p-2 mb-2 placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100"
					/>
					{errors.email && errors.email.type === "required" && (
						<p className="w-full text-[12px] text-red-900 opacity-90 mb-8">
							Email is required.
						</p>
					)}

					<input
						{...register("password", { required: true })}
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter your password"
						className="h-9 p-2 mb-2 placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100"
					/>
					{errors.password && errors.password.type === "required" && (
						<p className="w-full text-[12px] text-red-900 opacity-90 mb-8">
							Password is required.
						</p>
					)}

					<div className={`${styles.flexBtw} flex-wrap w-full text-[15px]`}>
						<label className="cursor-pointer flex items-center">
							<input
								name="rememberMe"
								type="checkbox"
							/>{" "}
							Remember me
						</label>
						<p className="text-gradient cursor-pointer">Forgot password?</p>
					</div>

					<button
						type="submit"
						className="w-full p-2 mt-10 mb-6 bg-primary rounded text-dimWhite bg-opacity-95  hover:bg-opacity-100 text-center "
					>
						Log In
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
						Don't have an account?
						<NavLink
							to={`/signup`}
							className="text-gradient"
						>
							{" "}
							Sign Up
						</NavLink>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Login;
