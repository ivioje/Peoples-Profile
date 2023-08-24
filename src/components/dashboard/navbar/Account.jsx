import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../../style'

const Account = () => {
    return (
        <div className={`absolute top-[83px] ex:top-[73px] bg-secondary right-1 p-4 h-[150px] flex flex-col items-center justify-center font-poppins text-primary border z-50`}>
            <h3 className='border-b text-gray-500'>Account</h3>
            <p className='m-2 border-b w-full text-center'>
                <NavLink to='account' >
                    Account details
                </NavLink>
            </p>
            <button className='m-2 border-b w-full text-center'>
                Log out
            </button>
        </div>
    )
}

export default Account