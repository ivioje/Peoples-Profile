import React, { useState } from 'react';
import { BsChevronRight, BsX } from 'react-icons/bs';
import { NavLink, Outlet } from 'react-router-dom';
import { sidenavItems } from '../../../constants';
import styles from '../../../style'

const DashboardNav = () => {
    const [toggle, setToggle] = useState(false);

    let activeStyle = {
        color: 'text-primary',
        background: 'rgba(51, 66, 87, 0.26)'
    }
    return (
        <div className='xs:flex'>
            <section className={` h-full w-full ss:w-[350px] ${styles.flexBtw} flex-wrap relative font-poppins`}>
                <div className={` font-poppins ${styles.flexCol} `}>
                    <ul className='list-none flex hide flex-col justify-center items-start flex-1 pt-20 pl-20 pr-2 pb-2'>
                        {
                            sidenavItems.map((item => (
                                <NavLink to={`${item.id}`} key={item.id} className='py-2 w-full pl-1 rounded-[3px]'
                                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    {item.title}
                                </NavLink>
                            )))
                        }
                    </ul>
                </div>

                <div className='xs:hidden flex flex-col left-0 absolute  '>
                    <span onClick={() => setToggle((prev) => !prev)}
                        className='p-1 h-[35px] w-[35px] bg-primary text-secondary rounded-full fixed flex items-center justify-center text-[20px] z-50'>
                        {toggle ? <BsX className='' /> :
                            <BsChevronRight className='' />}
                    </span>

                    <div className={`${toggle ? 'flex' : 'hidden'} h-full flex-col items-center justify-between `}>
                        <ul className={`flex justify-start absolute dashBSidebar h-fit w-[100vw] left-0 flex-col z-1 pt-14 pb-2 px-1 bg-white`}>
                            {
                                sidenavItems.map((item => (
                                    <NavLink to={`${item.id}`} key={item.id} className='py-2 w-full pl-1 rounded-[3px]'
                                        style={({ isActive }) => isActive ? activeStyle : undefined}
                                        onClick={() => setToggle(false)}>
                                        {item.title}
                                    </NavLink>
                                )))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <div className='mt-10'>
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardNav