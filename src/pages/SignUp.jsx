import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../utils/api-client";
import { BsGoogle } from "react-icons/bs";
import { FaSpinner } from 'react-icons/fa'
import { AuthContext } from "../context/AuthenticationContext";
import Input from "../components/common/Input";
import styles from "../styles/style";

const SignUp = () => {
	const [username, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { logIn } = useContext(AuthContext);

	const handleSignUp = (e) => {
		e.preventDefault();
		setError("");
		setIsSubmitting(true);
		apiClient.post("/user/create", { username: username, email: email, password: password })
			.then((response) => {
				if(response.data) navigate("/login");
				logIn(response.data);
				console.log(response.data);
			})
			.catch((err) => {
                toast.error(err?.response?.data?.message || "Sign up failed. Please try again.");
				console.log("Sign up error:", err);
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<section className={`font-poppins div-overlay ${styles.flexCenter} p-2 relative`}>
			<div className={`bg-white ${styles.flexBtw} flex-col p-5 sm:p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-full rounded-[34px]`}>
				<h2 className="font-[600] p-1 text-[22px]">Sign Up</h2>
				<form
					className={`${styles.flexBtw} flex-col mt-12 w-full sm:w-[90%] px-1`}
					onSubmit={handleSignUp}
				>
					<div className="mb-8 flex flex-col w-full">
						<Input
							name="name"
							type="text"
							placeholder="Enter your Name"
							value={username}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-8 flex flex-col w-full">
						<Input
							name="email"
							type="email"
							placeholder="Enter an email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-8 flex flex-col w-full">
						<Input
							name="password"
							type="password"
							placeholder="Enter a password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{error && (
						<div className="text-red-500 text-sm mb-2">{error}</div>
					)}
					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-full p-2 mt-10 mb-6 bg-primary rounded text-dimWhite bg-opacity-95  hover:bg-opacity-100 text-center ${isSubmitting ? 'bg-opacity-40 hover:bg-opacity-40': ''} `}
					>
						Sign Up {isSubmitting && <FaSpinner className="inline animate-spin ml-2" />}
					</button>

					<p>Or</p>

					<button className={`${styles.flexCenter} p-1 my-6 shadow-inner bg-white border rounded`}>
						<BsGoogle className="text-red-600 mx-2" />
						<span className="text-primary">Sign Up with Google</span>
					</button>
					<p className="text-center">
						Already have an account?
						<Link to={`/login`}	className="text-gradient mx-2">
							Log In
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
};

export default SignUp;
