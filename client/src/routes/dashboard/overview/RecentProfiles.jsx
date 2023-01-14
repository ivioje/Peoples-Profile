import React from 'react'
import { BsArrowRight, BsClockHistory, BsHeart, BsShareFill } from 'react-icons/bs'
import { cardItems } from '../../../constants'
import styles from '../../../style'

const RecentProfiles = () => (
    <section className='font-poppins w-full sm:w-[70vw] text-[16px] xs:text-[18px] px-4 sm:px-1'>
        <div className='my-5'>
            <p>Hello Taylor, welcome to your dashboard. Create something awesome 😎</p>
        </div>
        <div className={`${styles.flexBtw} mb-8`}>
            <div className='text-[16px] flex items-center'>
                <span className='mx-1'><BsClockHistory /></span>
                <h4 className='mx-1'> Recent profiles</h4>
            </div>
            <span className='cursor-pointer'><BsArrowRight /></span>
        </div>

        <div className={`${styles.flexBtw} overflow-x-scroll overflow-y-hidden relative font-[400]`}>
            {cardItems.map(item => (
                <div key={item.id} className='m-1 h-[110px] sm:h-[120px] flex flex-col bg-center bg-cover bg-no-repeat text-secondary rounded-[15px] cursor-pointer'
                    style={{ 'backgroundImage': `url(${item.photo})` }}>
                    <div className='profilesOverlay w-[200px] rounded-[15px]'>
                        <h1 className='h-fit p-2 uppercase font-firaSans '>
                            {item.name}
                        </h1>
                        <h4 className='h-fit p-2 text-[16px]'>
                            {item.work}
                        </h4>
                        <div className={`${styles.flexBtw} absolute bottom-0 w-[200px] p-2`}>
                            <span className='cursor-pointer'><BsShareFill /></span>
                            <span className='cursor-pointer'><BsHeart /></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
)

export default RecentProfiles