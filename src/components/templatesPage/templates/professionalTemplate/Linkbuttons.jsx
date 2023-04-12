import React, { useContext } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { TemplateContext } from '../../../../context/TemplateContext'
import styles from '../../../../style'

const LinkButtons = () => {
    const { activeButton, showButtonContent } = useContext(TemplateContext);

    const items = [
        { title: 'LinkedIn', id: 1 },
        { title: 'Website', id: 2 },
        { title: 'Twitter', id: 3 },
        { title: 'Facebook', id: 4 },
        { title: 'GitHub', id: 5 }
    ]
    return (
        <>
            <div className={`${styles.flexBtw} flex-wrap my-3`}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.flexBtw} cursor-pointer m-2 rounded-2xl p-1 border border-blue-900 ${activeButton === item.id ? 'bg-[#171F3A] opacity-90 text-dimWhite transition-all' : 'text-blue-900'}`}
                        onClick={() => showButtonContent(item.id)}
                    >
                        <span className='text-[20px]'><BsPlusCircle /></span>
                        <button className='p-1'>
                            {item.title}
                        </button>
                    </div>
                ))}

            </div>

            <div className='shadow-xl p-3 w-full'>
                {items.map((item) => (
                    <div key={item.id}>
                        {activeButton === item.id &&
                            <div>
                                <form className='flex flex-col items-start justify-start'>
                                    <label>{item.title} URL</label>
                                    <input
                                        type='url'
                                        placeholder={`Enter ${item.title} URL`}
                                        className='h-[41px] w-full'
                                    />
                                    <button type='submit' className='bg-[#171F3A] opacity-90 text-dimWhite px-2 py-1 rounded-lg'>Save</button>
                                </form>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default LinkButtons