import React from 'react'
import { BsArrowRight, BsClockHistory } from 'react-icons/bs'
import { tempItems } from '../../constants'
import styles from '../../style'

const RecentTemplates = () => {
    return (
        <div className='font-poppins text-[16px] mt-10 px-4 sm:px-1 z-[-1]'>
            <div className={`${styles.flexBtw} mb-6`}>
                <div className=' flex items-center font-montserrat'>
                    <span className='mx-1'><BsClockHistory /></span>
                    <h4 className='mx-1'> Recent templates</h4>
                </div>
                <span className='cursor-pointer'><BsArrowRight /></span>
            </div>

            <div className={`${styles.flexBtw} overflow-x-scroll overflow-y-hidden relative font-[400] overviewScroll`}>
                {tempItems.length ?
                    (
                        tempItems.map(item => (
                            <div key={item.id} className={`m-1 h-[120px] flex flex-col bg-center bg-cover bg-no-repeat text-secondary rounded-[15px] cursor-pointer p-4`}
                                style={{ 'background': `linear-gradient(180deg, ${item.color} 0%, rgba(0, 0, 0, 0.85) 100%) ` }}>
                                <div className=' h-[20px] w-fit font-firaSans text-text_color text-[11px]'>
                                    <h4 className='absolute top-3 rounded-sm bg-lightGray py-[2px] px-2'>
                                        Template
                                    </h4>
                                </div>
                                <div className={`w-[190px] rounded-[15px]`}>
                                    <h1 className='h-fit mt-2 '>
                                        {item.type} {' Template'}
                                    </h1>
                                </div>
                            </div>
                        ))
                    )
                    : (<div>No recent templates</div>)
                }
            </div>
        </div>
    )
}

export default RecentTemplates