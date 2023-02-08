import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../style'

const Account = () => {
    return (
        <div className={`absolute top-[83px] ex:top-[73px] bg-secondary right-1 p-4 h-[150px] flex flex-col items-start font-poppins text-primary border`}>
            <h3 className='text-center opacity-50 border-b w-full mb-2'>Account</h3>
            <Link to='/account' className='my-2 border-b w-full'>
                Account details
            </Link>
            <Link to='logout' className='border-b w-full'>
                Log out
            </Link>
        </div>
    )
}

export default Account