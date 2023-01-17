import React, { useState } from 'react';
import { BsChevronRight, BsX } from 'react-icons/bs';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { sidenavItems } from '../../../constants';
import styles from '../../../style'
import NewProfile from '../NewProfile';
import menu from '../../../assets/nav-menu.svg'

const DashboardNav = () => {
    const [toggle, setToggle] = useState(false);

    let activeStyle = {
        color: '#334257',
        background: 'rgba(51, 66, 87, 0.26)'
    }
    return (
        <div className='sm:flex '>
            <section className={` h-full w-full ss:w-[250px] md:w-[350px] ${styles.flexBtw} flex-col flex-wrap relative font-poppins `}>
                <div className={` font-poppins ${styles.flexCol} `}>
                    <ul className='list-none flex hide flex-col justify-center items-start flex-1 pt-20 pl-0 md:pl-20 pr-2 pb-2'>
                        {
                            sidenavItems.map((item => (
                                <NavLink to={`${item.id}`} key={item.id} className='py-2 w-full px-1 rounded-[3px]'
                                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    {item.title}
                                </NavLink>
                            )))
                        }

                        <NewProfile />

                        <div className='text-primary absolute bottom-[-80px] hidden xs:flex'>
                            <Link to='/profiles' >
                                Back to profiles page
                            </Link>
                        </div>
                    </ul>
                </div>

                <div className='sm:hidden flex flex-col left-0 absolute  '>
                    <div onClick={() => setToggle((prev) => !prev)}
                        className='p-1 absolute top-[-55px] cursor-pointer h-[32px] w-[32px]'>
                        <img src={menu} alt='menu' className='w-full h-full' />
                    </div>

                    <div className={`${toggle ? 'flex' : 'hidden'} h-full flex-col items-center justify-between `}>
                        <ul className={`flex justify-start absolute dashBSidebar h-fit w-[100vw] left-0 flex-col z-40 pt-2 pb-2 px-1 bg-white`}>
                            {
                                sidenavItems.map((item => (
                                    <NavLink to={`${item.id}`} key={item.id} className='py-2 w-full px-1 rounded-[3px]'
                                        style={({ isActive }) => isActive ? activeStyle : undefined}
                                        onClick={() => setToggle(false)}>
                                        {item.title}
                                    </NavLink>
                                )))
                            }
                            <NewProfile />

                            <div className='text-primary mt-10'>
                                <Link to='/profiles' >
                                    Back to profiles page
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>


            </section>

            <div className='w-auto '>
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardNav