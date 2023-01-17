import React, { useState } from 'react';
import logo from '../../../assets/dashboardLogo.svg';
import styles from '../../../style'
import { Link } from 'react-router-dom';
import Sidenav from '../sidebar/Sidenav';
import CreateProfile from './CreateProfile';
import ChooseTemplates from './ChooseTemplates';
import DbSearch from './DbSearch';
import User from './User';
import { BsCaretDown } from 'react-icons/bs';
import Account from './Account';

const DashboardNav = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <section className={`bg-secondary h-[80px] ex:h-[71px] w-[100%] flex sm:${styles.flexBtw} items-center justify-center font-firaSans`}>
                <div className='flex items-center xs:justify-start justify-between'>
                    <div className='ml-6 sm:ml-1 mx-1 ex:w-[165px] xs:w-[100px] h-[28px]'>
                        <Link to='/dashboard/overview'>
                            <img src={logo} alt='peoples profiles' className='w-[100%] h-[100%] min-w-[120px]' />
                        </Link>
                    </div>
                    <div className={`sm:flex hidden item-center justify-between sm:ml-16 md:ml-14 sm:w-[300px]`}>
                        <CreateProfile />
                        <ChooseTemplates />
                    </div>
                </div>


                <div className={`${styles.flexBtw} sm:w-[250px] px-3 w-[140px] ss:w-[190px] flex justify-between flex-wrap`}>
                    <div className='sm:hidden flex'>
                        <h5 className={`${styles.flexCenter} cursor-pointer text-primary bg-slate-300 p-1 xs:p-2 mr-[]`} onClick={() => setToggle((prev) => !prev)}>
                            More <BsCaretDown className='m-1' />
                        </h5>

                        <div className={`${toggle ? 'flex' : 'hidden'} left py-6 px-2 bg-secondary absolute top-14 my-2 rounded-xl sidebar mt-7 z-50`}>
                            <div className='flex flex-col-reverse h-[80px] w-[170px] justify-between items-center'>
                                <CreateProfile setToggle={setToggle} />
                                <ChooseTemplates setToggle={setToggle} />
                                <div className=''>
                                </div>
                            </div>
                        </div>
                    </div>
                        <DbSearch />
                    <User />
                </div>
            </section>

            {/* <Account /> */}

            <Sidenav />
        </>
    )
}

export default DashboardNav