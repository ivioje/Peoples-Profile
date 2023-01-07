import React from 'react';
import { Link } from 'react-router-dom'
import styles from '../style';
import checkMark from '../assets/checkMark.svg'

export default function SuccessPage() {
    return (
        <div className={`${styles.flexCenter} flex-col h-[400px]`}>
            <img src={checkMark} alt='tick' />
            <h1 className='font-[900] text-[20px] my-8 '>
                Account creation successful!
            </h1>
            <Link to='/dashboard' className='font-bold text-primary text-[18px]'>
                Go to dashboard
            </Link>
        </div>
    )
}
