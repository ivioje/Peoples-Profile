import React, { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import styles from '../../style'

const GenderFilter = () => {

    const { toggleGenderView, setToggleGenderView, handleFilterClick } = useContext(ProfileContext)

    return (
        <section className={`font-poppins text-[14px]  relative  w-[100vw] ss:w-[300px] sm:right-[-250px] z-40 ${toggleGenderView ? 'block' : 'hidden'}`}>
            <div className='border-t absolute left-0 p-3 rounded-[26px] shadow-xl bg-white ss:mx-0 mx-2'>
                <p className='m-2 text-[16px] '>
                    Filter profiles by gender
                </p>
                <hr className='m-2' />

                <div className={`${styles.flexBtw} flex-wrap h-[50px] checkContent `}>
                    <label className='border' onClick={() => {
                        handleFilterClick('male');
                        setToggleGenderView(false)
                    }}>
                        <input type='checkbox' className=' ' />{' '}
                        <span className="checkmark"></span>
                        <h6>Male</h6>
                    </label>
                    <label className='border' onClick={() => {
                        handleFilterClick('female');
                        setToggleGenderView(false)
                    }}>
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