import React from 'react'
import { BsX } from 'react-icons/bs'
import styles from '../../style'

const GenderFilter = ({ toggleGenderView }) => {

    return (
        <section className={`font-poppins text-[14px]  relative  w-[100vw] ss:w-[300px] sm:right-[-250px] z-40 ${toggleGenderView? 'block': 'hidden'}`}>
            <div className='border-t absolute left-0 p-3 rounded-[26px] shadow-xl bg-white ss:mx-0 mx-2'>
                    <p className='m-2 text-[16px] '>
                        Filter profiles by gender
                    </p>
                <hr className='m-2' />

                <div className={`${styles.flexBtw} flex-wrap h-[50px] checkContent `}>
                    <label className='border'>
                        <input type='checkbox' className=' ' />{' '}
                        <span className="checkmark"></span>
                        <h6>Male</h6>
                    </label>
                    <label className='border'>
                        <input type='checkbox' />{' '}
                        <span className="checkmark"></span>
                        <h6>Female</h6>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default GenderFilter