import React, { useState } from 'react';
import logo from '../../../assets/dashboardLogo.svg';
import close from '../../../assets/close.svg';
import menu from '../../../assets/menu.svg';
import styles from '../../../style'
import { Outlet, Link } from 'react-router-dom';
import Sidenav from '../sidebar/Sidenav';
import CreateProfile from './CreateProfile';
import ChooseTemplates from './ChooseTemplates';
import DbSearch from './DbSearch';
import User from './User';
import { BsCaretDown } from 'react-icons/bs';

const DashboardNav = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <section className={`bg-secondary h-[80px] ex:h-[71px] w-[100%] ${styles.flexBtw}  flex-wrap font-firaSans`}>
                <div className='flex items-center xs:justify-start justify-between'>
                    <div className=' mx-1 ex:w-[165px] xs:w-[100px] h-[28px]'>
                        <Link to='/dashboard/overview'>
                            <img src={logo} alt='peoples profiles' className='w-[100%] h-[100%] min-w-[120px]' />
                        </Link>
                    </div>
                    <div className={`sm:flex hidden item-center justify-between sm:ml-16 md:ml-14 sm:w-[260px]`}>
                        <CreateProfile />
                        <ChooseTemplates />
                    </div>
                </div>


                <div className='sm:hidden flex '>
                    <h5 className={`${styles.flexCenter} cursor-pointer text-primary bg-slate-200 p-1 xs:p-2`} onClick={() => setToggle((prev) => !prev)}>
                        More <BsCaretDown className='m-1' />
                    </h5>

                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-secondary absolute top-20 mx-4 my-2 
                 rounded-xl sidebar mt-7 z-50`}>
                        <div className='flex flex-col-reverse h-[80px] justify-between items-center'>
                            <CreateProfile setToggle={setToggle} />
                            <ChooseTemplates setToggle={setToggle} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.flexBtw} sm:w-[250px] px-3`}>
                    <DbSearch />
                    <User />
                </div>

            </section>

            <Sidenav />
        </>
    )
}

export default DashboardNav