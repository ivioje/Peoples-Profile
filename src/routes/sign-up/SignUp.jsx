import React from 'react'
import Auth from '../../components/auth/Auth'
import InputBox from '../../components/auth/inputBox'
import { signupInputs } from '../../constants'
import styles from '../../style'

const SignUp = () => {
    return (
        <section className={`font-poppins div-overlay ${styles.flexCenter}  p-2`}>
            <div className={`bg-white ${styles.flexBtw} flex-col p-5 sm:p-10 my-10 md:my-16 sm:my-12 md:w-[590px] sm:w-[60%] w-full rounded-[34px] `}>
                <h2 className='font-[600] p-1 text-[22px]'>Sign Up</h2>

                <form className={`${styles.flexBtw} flex-col mt-12 w-full sm:w-[90%] px-1`}>
                    {
                        signupInputs.map(input => (
                            <InputBox key={input.placeholder} name={input.name} type={input.type} placeholder={input.placeholder} />
                        ))
                    }
                    <div className={`${styles.flexBtw} flex-wrap w-full text-[15px]`}>
                        <p>Passwords must be at least 8 characters long</p>
                    </div>
                    <Auth title={'Log In'} btnText={'Sign Up'} question={'Already have an account?'} linkTo={'success'} linkBack={'login'} />
                </form>
            </div>
        </section>
    )
}

export default SignUp