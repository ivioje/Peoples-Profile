import React, { useContext } from 'react'
import { BsArrowRight, BsClockHistory, BsHeart, BsShareFill } from 'react-icons/bs'
import { Context } from '../../context/Context'
import styles from '../../style'

const RecentProfiles = () => {

    const { data } = useContext(Context);

    return (
        <div className='text-[18px] px-4 sm:px-1 z-[-1] '>
            <div className={`${styles.flexBtw} mb-6`}>
                <div className='text-[16px] flex items-center font-montserrat'>
                    <span className='mx-1'><BsClockHistory /></span>
                    <h4 className='mx-1'> Recent profiles</h4>
                </div>
                <span className='cursor-pointer'><BsArrowRight /></span>
            </div>

            <div className={`${styles.flexBtw} overflow-x-scroll overflow-y-hidden relative font-[400] overviewScroll`}>
                {data.profile.map(item => (
                    <div key={item.id} className='m-1 h-[120px] flex flex-col bg-center bg-cover bg-no-repeat text-secondary rounded-[15px] cursor-pointer'
                        style={{ 'backgroundImage': `url(${item.photo})` }}>
                        <div className='profilesOverlay w-[200px] rounded-[15px] p-1'>
                            <h1 className='h-fit p-1 uppercase font-firaSans text-[16px] '>
                                {item.name}
                            </h1>
                            <h4 className='h-fit px-1 text-[16px]'>
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
        </div>
    )
}

export default RecentProfiles