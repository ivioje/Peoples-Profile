import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../../style";
import api from "../../api";
import Input from "./Input";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");
		api.post(`/user/login`, { email, password })
			.then((response) => {
				console.log(response.data)
				navigate(`/dashboard/overview/${response.data._id}`);
				toast.success("Login successful");
			})
			.catch((err) => {
				setError(err?.response?.data?.message || "Login failed. Please try again.");
				toast.error(error)
			}).finally (() => {
				setIsSubmitting(false);
			});
	};

	return (
		<section className={`font-poppins div-overlay ${styles.flexCenter}  p-2`}>
			<div
				className={`bg-white ${styles.flexBtw} flex-col p-5 sm:p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-full rounded-[34px] `}
			>
				<h2 className="font-[600] p-1 text-[22px]">Welcome back!</h2>
				<p>Log in to continue</p>

				<form
					className={`${styles.flexBtw} flex-col mt-12 w-full sm:w-[90%] px-1`}
					onSubmit={handleLogin}
				>
					<div className="mb-8 flex flex-col w-full">
						<Input
							name="email"
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="mb-8 flex flex-col w-full">
						<Input
							name="password"
							placeholder="Enter your password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

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

					{error && <div className="text-red-500 text-sm mb-2">{error}</div>}

					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-full p-2 mt-10 mb-6 bg-primary rounded text-dimWhite bg-opacity-95  hover:bg-opacity-100 text-center ${isSubmitting ? 'bg-opacity-40 hover:bg-opacity-40': ''}`}
					>
						Log In {isSubmitting && <FaSpinner className="inline animate-spin ml-2" />}
					</button>

					<p>Or</p>

					<button className={`${styles.flexCenter} p-1 my-6 shadow-inner bg-white border rounded`}>
						<BsGoogle className="text-red-600 mx-2" />
						<span className="text-primary">Sign in with Google</span>
					</button>
					<p className="text-center">
						Don't have an account?
						<NavLink to={`/signup`} className="text-gradient mx-2">
							Sign Up
						</NavLink>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Login;
