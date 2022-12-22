import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../style'

const Login = () => {
    return (
        <section className={`font-poppins div-overlay ${styles.flexCenter} text-text_color`}>
            <div className={`bg-white ${styles.flexBtw} flex-col p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-[90%] rounded-[34px] `}>
                <h2 className='font-[600] p-1'>Welcome back!</h2>
                <p>Log in to continue</p>

                <form className={`${styles.flexBtw} flex-col mt-12 w-[90%]`}>
                    <input name='email' type='text' placeholder='Email address or username'
                    className='h-9 p-2 mb-8 placeholder:text-text_color placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100' />
                    <input name='password' type='password' placeholder='Password'
                    className='h-9 p-2 mb-8 placeholder:text-text_color placeholder:font-[200] bg-slate-50 rounded w-full border border-gray-100' />
                    <div>
                        <label>
                            <input name='rememberMe' type='checkbox' />
                            {' '} Remember me
                        </label>
                        <p>Forgot password?</p>
                    </div>
                    <button>Log in</button>
                    <p>Or</p>
                    <button>Continue with Google</button>
                    <p>Don't have an account?
                        <Link to='/signin'>
                            Sign in
                        </Link>
                    </p>

                </form>
            </div>
        </section>
    )
}

export default Login