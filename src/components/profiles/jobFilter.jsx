import React from 'react'
import { BsX } from 'react-icons/bs'
import { organizations } from '../../constants'
import styles from '../../style'

const JobFilter = ({ 
    toggleWorkView, 
    data, handleFilterClick, 
    setToggleWorkView,
    getSimilarItemsCount }) => {

    const mappedItems = data.map((item) => item.work)

   const uniqueList = [...new Set(mappedItems)]

    return (
        <section className={`font-poppins text-[14px]  relative  w-[100vw] ss:w-[300px] z-40 ${toggleWorkView ? 'block' : 'hidden'}`}>
            <div className='border-t absolute left-0 p-3 rounded-[26px] shadow-xl bg-white ss:mx-0 mx-2'>
                <p className='m-2 text-[16px] '>
                    Filter profiles by job title.
                </p>
                <hr className='m-2' />
                <div className={`${styles.flexBtw} flex-wrap overflow-y-scroll h-[250px] `}>
                    {uniqueList.map((job) => (
                        <div key={job} className={`${styles.flexBtw} w-full p-1 m-1 shadow-md cursor-pointer hover:bg-gray-300  `}
                        onClick={() => {
                            handleFilterClick(job);
                            setToggleWorkView(false)
                           }}>
                    <p>{job}</p>
                            <small className='bg-gray-300 p-1 h-[20px] flex items-center rounded-full'>
                                {getSimilarItemsCount(data, 'work', job)}
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JobFilter