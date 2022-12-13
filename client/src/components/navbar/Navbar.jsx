import React, { useState } from 'react';
import { navLinks } from '../../constants';
import logo from '../../assets/logo.svg';
import close from '../../assets/close.svg';
import menu from '../../assets/menu.svg';
import styles from '../../style'
import GetStarted from './GetStarted';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <section className={`bg-primary h-[100px] ex:h-[81px] w-[100%] ${styles.flexCenter} flex-wrap`}>
            <div className=' mx-2 sm:mx-6 ex:mx-[74px] ex:w-[165px] w-[100px] h-[28px]'>
                <img src={logo} alt='peoples profiles' className='w-[100%] h-[100%] min-w-[160px]' />
            </div>
            <div className={`mx-[74px] font-poppins ${styles.flexCenter}`}>
                <ul className='list-none ex:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((navlink) => (
                        <li key={navlink.id} className='ex:text-dimWhite px-3 cursor-pointer' >
                            <a href={`#${navlink.id}`} className={navlink.item ? 'font-bold navLinks' : 'font-normal navLinks'} >
                                {navlink.title}
                            </a>
                        </li>
                    ))}
                    <GetStarted />
                </ul>
            </div>

            <div className='ex:hidden flex '>
                <img src={toggle ? close : menu} alt='menu' className='mr-2 sm:mr-6 w-[28px] h-[28px] object-contain cursor-pointer'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 primary-gradient absolute top-20 right-0 mx-4 my-2 
                 rounded-xl sidebar mt-7 z-[1]`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={'font-poppins font-normal cursor-pointer text-[16px] my-2 text-dimWhite'}>
                                <a href={`#${nav.id}`} className='navLinks'>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                        <div className='mt-2'>
                            <GetStarted />
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Navbar