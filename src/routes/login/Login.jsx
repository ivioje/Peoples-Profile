import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../components/auth/Auth'
import InputBox from '../../components/auth/inputBox'
import { loginInputs } from '../../constants'
import styles from '../../style'

const Login = () => {
    return (
        <section className={`font-poppins div-overlay ${styles.flexCenter}  p-2`}>
            <div className={`bg-white ${styles.flexBtw} flex-col p-5 sm:p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-full rounded-[34px] `}>
                <h2 className='font-[600] p-1 text-[22px]'>Welcome back!</h2>
                <p>Log in to continue</p>

                <form className={`${styles.flexBtw} flex-col mt-12 w-full sm:w-[90%] px-1`}>
                    {
                        loginInputs.map(input => (
                            <InputBox key={input.placeholder} name={input.name} type={input.type} placeholder={input.placeholder} />
                        ))
                    }
                    <div className={`${styles.flexBtw} flex-wrap w-full text-[15px]`}>
                        <label className='cursor-pointer'>
                            <input name='rememberMe' type='checkbox' />
                            {' '} Remember me
                        </label>
                        <p className='text-gradient cursor-pointer'>Forgot password?</p>
                    </div>
                    <Auth title={'Sign Up'} btnText={'Log In'} question={'Don\'t have an account?'} linkTo={'dashboard/overview'} linkBack={'signup'} />
                </form>
            </div>
        </section>
    )
}

export default Login