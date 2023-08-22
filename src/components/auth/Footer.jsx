import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../style';

const AuthFooter = ({ title, btnText, linkTo, question, linkBack }) => {
    return (
        <>
            <Link to={`/${linkTo}`} className='w-full p-2 mt-10 mb-6 bg-primary rounded text-dimWhite bg-opacity-95  hover:bg-opacity-100 text-center '>
                {btnText}
            </Link>
            <p>Or</p>
            <button className={`${styles.flexBtw} flex-wrap p-1 my-6`}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
                    alt='' className='w-[50px] h-[50px] mx-3 ' />
            </button>
            <p className='text-center'>
                {question}
                <Link to={`/${linkBack}`} className='text-gradient'>
                    {' '}{title}
                </Link>
            </p>
        </>
    )
}

export default AuthFooter