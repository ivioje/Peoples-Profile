import React, { useState } from 'react';
import { BsMenuButton, BsX } from 'react-icons/bs';
import close from '../../../assets/close.svg';
import menu from '../../../assets/menu.svg';
import styles from '../../../style'

const DashboardNav = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <section className={`bg-secondary h-full w-full ss:w-[350px] ${styles.flexBtw} flex-wrap`}>
                <div className={` font-poppins ${styles.flexCol} `}>
                    <ul className='list-none flex hide flex-col justify-end items-strt flex-1'>
                        <a>Overview</a>
                        <a>Uploaded profiles</a>
                    </ul>
                </div>

                <div className='xs:hidden flex '>
                    <span onClick={() => setToggle((prev) => !prev)} className=' w-[28px] h-[28px] object-contain cursor-pointer'>
                    {toggle ? <BsX /> : <BsMenuButton />} 
                        
                    </span>

                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute left-0
                 sidebar mt-7 z-50`}>
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                            <a>Overview</a>
                            <a>Uploaded profiles</a>

                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default DashboardNav