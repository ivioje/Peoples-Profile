import React from 'react'
import { BsX } from 'react-icons/bs'
import { organizations } from '../../constants'
import styles from '../../style'

const OrganizationFilter = () => {

    const getRandomId = (min, max) => {
        let id = Math.random() * (max - min) + min;
        return id;
    }

    return (
        <section className='font-poppins text-[14px]  relative text-text_color md:w-[650px] w-[100vw] xs:w-[90%] z-50 '>
            <div className='border-t absolute left-0 p-3 rounded-[26px] shadow-xl bg-white xs:mx-0 mx-2'>
                <div className={`${styles.flexBtw} flex-wrap-reverse`}>
                    <p className='m-2 text-[16px] '>
                        Filter profiles by organization or company.
                    </p>
                    <span className='text-[30px] cursor-pointer'>
                        <BsX />
                    </span>
                </div>
                <hr className='m-2' />
                <div className={`${styles.flexBtw} flex-wrap overflow-y-scroll h-[300px] `}>
                    {organizations.map((org) => (
                        <div key={getRandomId(0, 1000)} className={`${styles.flexBtw} p-1 m-3 border-b cursor-pointer hover:bg-gray-300  `}>
                            <div className='w-[20px] h-[20px] '>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
                                    className='mx-1' />
                            </div>
                            <p className='mx-3' >{org.org}</p>
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

export default OrganizationFilter