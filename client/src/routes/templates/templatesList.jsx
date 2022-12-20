import React from 'react'
import { BsBookmark } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { tempItems } from '../../constants'
import styles from '../../style'

const TemplatesList = () => {
    return (
        <section className={`font-firaSans ${styles.flexBtw} flex-wrap flex-col xs:flex-row md:py-16 py-8 px-3 md:px-28`}>
            {tempItems.map((item) => (
                <div key={item.id} className='xs:w-[49%] p-2 md:p-0 md:w-[30%] w-full md:mx-2 my-6 border-b'>
                    <h1 style={{ 'background': `${item.color}` }} className='text-lightGray text-[20px] font-[600] p-1 '>
                        {item.type} {' '} Template
                    </h1>
                    <p className='font-poppins text-text_color px-1 py-4'>Sit faucibus molestie diam quis ultricies.
                        Nunc ultricies eu justo, in egestas id auctor proin dui.
                    </p>
                    <div className={`${styles.flexBtw} p-1`}>
                        <button style={{ 'color': `${item.color}`, 'borderColor': `${item.color}` }} className='font-[500] p-1 border opacity-80
                        hover:opacity-100 hover:transition-opacity'>
                            <Link to={`/${item.type.toLowerCase()}`}>Use Template</Link>
                        </button>
                        <button className={` ${styles.flexCenter} rounded-full text-primary bg-lightGray w-[40px] h-[40px]`}>
                            <BsBookmark />
                        </button>
                    </div>
                    <hr className='opacity-5' />
                </div>
            ))}
        </section>
    )
}

export default TemplatesList