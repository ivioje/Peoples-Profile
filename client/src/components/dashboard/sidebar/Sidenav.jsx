import React, { useState } from 'react';
import { BsChevronRight, BsX } from 'react-icons/bs';
import styles from '../../../style'

const DashboardNav = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <section className={` h-full w-full ss:w-[350px] ${styles.flexBtw} flex-wrap relative`}>
                <div className={` font-poppins ${styles.flexCol} `}>
                    <ul className='list-none flex hide flex-col justify-center items-start flex-1'>
                        <a>Overview</a>
                        <a>Uploaded profiles</a>
                    </ul>
                </div>

                <div className='xs:hidden flex flex-col left-0 absolute  '>
                    <span onClick={() => setToggle((prev) => !prev)} 
                    className='p-1 h-[35px] w-[35px] bg-primary text-secondary rounded-full fixed flex items-center justify-center text-[20px] z-50'>
                        {toggle ? <BsX className='' /> :
                            <BsChevronRight className='' />}
                    </span>

                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 dashBSidebar h-full flex-col`}>
                        <ul className={`flex justify-start absolute h-[500px] w-[100vw] left-0 flex-col z-1 p-5`}>
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