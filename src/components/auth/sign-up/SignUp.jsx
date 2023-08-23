import React, { useState } from 'react'
import styles from '../../../style'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const hasErrors = Object.keys(errors).length > 0;

    const onSubmit = () => {
        if (hasErrors) {
            toast.error("Please correct the errors in the form.", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    toast.success("You've successfully created an account", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    navigate("/login");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    // Show error message using toast notification
                    toast.error(errorMessage, {
                        position: toast.POSITION.TOP_RIGHT
                    });

                    console.log(errorCode, errorMessage);
                });
        }
    };

    return (
        <section className={`font-poppins div-overlay ${styles.flexCenter} p-2 relative`}>

            <ToastContainer />

            <div className={`bg-white ${styles.flexBtw} flex-col p-5 sm:p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-full rounded-[34px]`}>
                <h2 className='font-[600] p-1 text-[22px]'>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={`${styles.flexBtw} flex-col mt-12 w-full sm:w-[90%] px-1`}>
                    <div className='mb-8 flex flex-col w-full'>
                        <input
                            {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter an email address'
                            className='h-9 p-2 placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100'
                        />

                        {errors.email && errors.email.type === "required" && (
                            <p className="w-full text-[12px] text-red-900 opacity-90">Email is required.</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <p className="w-full text-[12px] text-red-900 opacity-90">Email is not valid.</p>
                        )}
                    </div>
                    <div className='mb-8 flex flex-col w-full'>
                        <input
                            {...register("password", { required: true, minLength: 8 })}
                            value={password}
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter a password'
                            className='h-9 p-2 placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100'
                        />

                        {errors.password && errors.password.type === "required" && (
                            <p className="w-full text-[12px] text-red-900 opacity-90">Password is required.</p>
                        )}
                        {errors.password && errors.password.type === "minLength" && (
                            <p className="w-full text-[12px] text-red-900 opacity-90">
                                Password should be at least 8 characters.
                            </p>
                        )}
                    </div>

                    <button type="submit" className='w-full p-2 mt-10 mb-6 bg-primary rounded text-dimWhite bg-opacity-95  hover:bg-opacity-100 text-center '>
                        Sign Up
                    </button>

                    <p>Or</p>

                    <button className={`${styles.flexBtw} flex-wrap p-1 my-6`}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
                            alt='' className='w-[50px] h-[50px] mx-3 ' />
                    </button>
                    <p className='text-center'>
                        Already have an account?
                        <NavLink to={`/login`} className='text-gradient'>
                            {' '}Log In
                        </NavLink>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default SignUp