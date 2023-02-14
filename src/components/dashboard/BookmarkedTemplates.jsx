import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { tempItems } from '../../constants'
import styles from '../../style'

const BookmarkedTemplates = () => {
    return (
        <div className='font-poppins mt-3 sm:px-1 z-[-1]'>
            <div className={`${styles.flexCenter} flex-wrap`}>
                {tempItems.slice(0, 5).map(item => (
                    <div key={item.id} className={`m-3 xs:w-[44%] sm:w-[250px] w-full h-[140px] flex flex-col bg-center bg-cover bg-no-repeat text-secondary relative rounded-[15px] cursor-pointer py-4 px-2`}
                        style={{ 'background': `linear-gradient(180deg, ${item.color} 0%, rgba(0, 0, 0, 0.85) 100%) ` }}>
                        <div className={` ${styles.flexBtw} w-full font-firaSans text-text_color text-[11px]`}>
                            <h4 className=' rounded-sm bg-lightGray py-[1px] px-2'>
                                Template
                            </h4>
                            <h4 className=' rounded-2xl bg-lightGray py-[5px] px-2'>
                                open
                            </h4>
                        </div>
                        <div className={` rounded-[15px]`}>
                            <h1 className='h-fit mt-2 '>
                                {item.type} {' Template'}
                            </h1>
                        </div>

                        <button className='absolute bottom-2 right-2 cursor-pointer text-[20px]'>
                            <BsTrash />
                        </button>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default BookmarkedTemplates