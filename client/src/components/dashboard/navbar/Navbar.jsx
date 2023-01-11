import React, { useState } from 'react';
import logo from '../../../assets/dashboardLogo.svg';
import close from '../../../assets/close.svg';
import menu from '../../../assets/menu.svg';
import styles from '../../../style'
import { Outlet, Link } from 'react-router-dom';
import Sidenav from '../sidebar/Sidenav';

const DashboardNav = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <section className={`bg-secondary h-[80px] ex:h-[71px] w-[100%] ${styles.flexBtw} flex-wrap`}>
                <div className=' mx-1 ex:w-[165px] w-[100px] h-[28px]'>
                    <Link to='/dashboard/overview'>
                        <img src={logo} alt='peoples profiles' className='w-[100%] h-[100%] min-w-[160px]' />
                    </Link>
                </div>
                <div className={` font-poppins ${styles.flexCenter}`}>
                    <ul className='list-none ex:flex hidden justify-end items-center flex-1'>
                        ...
                    </ul>
                </div>

                <div className='ex:hidden flex '>
                    <img src={toggle ? close : menu} alt='menu' className='mr-4 sm:mr-6 w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle((prev) => !prev)}
                    />

                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 primary-gradient absolute top-20 right-0 mx-4 my-2 
                 rounded-xl sidebar mt-7 z-50`}>
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                           ...
                            
                        </ul>
                    </div>
                </div>

            </section>

            <Sidenav />
        </>
    )
}

export default DashboardNav