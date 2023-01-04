import React from 'react'
import { BsX } from 'react-icons/bs'
import { organizations } from '../../constants'
import styles from '../../style'

const JobFilter = () => {

    const getRandomId = (min, max) => {
        let id = Math.random() * (max - min) + min;
        return id;
    }

    return (
        <section className='font-poppins text-[14px]  relative text-text_color w-[100vw] ss:w-[300px] z-50 '>
            <div className='border-t absolute left-0 p-3 rounded-[26px] shadow-xl bg-white ss:mx-0 mx-2'>
                <div className={`${styles.flexBtw} flex-wrap-reverse`}>
                    <p className='m-2 text-[16px] '>
                        Filter profiles by job title.
                    </p>
                    <span className='text-[30px] cursor-pointer'>
                        <BsX />
                    </span>
                </div>
                <hr className='m-2' />
                <div className={`${styles.flexBtw} flex-wrap overflow-y-scroll h-[250px] `}>
                    {organizations.slice(0, 10).map((org) => (
                        <div key={getRandomId(0, 1000)} className={`${styles.flexBtw} w-full p-1 m-1 border-b cursor-pointer hover:bg-gray-300  `}>
                            <p className='' >{org.job}</p>
                            <small className='bg-gray-300 p-1 h-[20px] flex items-center rounded-full'>
                                5
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobFilter