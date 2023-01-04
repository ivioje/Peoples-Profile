import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../style'

const Login = () => {
    return (
        <section className={`font-poppins div-overlay ${styles.flexCenter}  p-2`}>
            <div className={`bg-white ${styles.flexBtw} flex-col p-5 sm:p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-full rounded-[34px] `}>
                <h2 className='font-[600] p-1 text-[22px]'>Welcome back!</h2>
                <p>Log in to continue</p>

                <form className={`${styles.flexBtw} flex-col mt-12 w-full sm:w-[90%] px-1`}>
                    <input name='email' type='text' placeholder='Email address or username'
                        className='h-9 p-2 mb-8 placeholder: placeholder:font-[100] bg-slate-50 rounded w-full border border-gray-100' />
                    <input name='password' type='password' placeholder='Password'
                        className='h-9 p-2 mb-6 placeholder: placeholder:font-[100] bg-slate-50 rounded w-full border border-gray-100' />
                    <div className={`${styles.flexBtw} flex-wrap w-full text-[15px]`}>
                        <label className='cursor-pointer'>
                            <input name='rememberMe' type='checkbox' />
                            {' '} Remember me
                        </label>
                        <p className='text-gradient cursor-pointer'>Forgot password?</p>
                    </div>
                    <Link to='/dashboard' className='w-full p-2 mt-10 mb-6 bg-primary rounded text-dimWhite bg-opacity-95  hover:bg-opacity-100 text-center '>
                        Log in
                    </Link>
                    <p>Or</p>
                    <div className={`${styles.flexBtw} flex-wrap border p-1 my-6`}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
                            alt='' className='w-[25px] h-[25px] mx-3 ' />
                        <button className=' p-1  rounded-[4px]'>Continue with Google</button>
                    </div>
                    <p className='text-center'>Don't have an account?
                        <Link to='/signup' className='text-gradient'>
                            {' '} Sign up
                        </Link>
                    </p>

                </form>
            </div>
        </section>
    )
}

export default Login