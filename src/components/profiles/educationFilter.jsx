import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import styles from '../../style'

const EducationFilter = () => {

    const { toggleEducationView, data, getSimilarItemsCount, setToggleEducationView,
        handleFilterClick } = useContext(Context)

    const mappedItems = data.map((item) => item.edu)

    const uniqueList = [...new Set(mappedItems)]

    return (
        <section className={`font-poppins text-[14px]  relative  w-[100vw] ss:w-[330px] xs:left-[100px] z-40 ${toggleEducationView ? 'block' : 'hidden'}`}>
            <div className='border-t absolute left-0 p-3 rounded-[26px] shadow-xl bg-white ss:mx-0 mx-2'>
                <p className='m-2 text-[16px] '>
                    Filter profiles by education/degree.
                </p>
                <hr className='m-2' />
                <div className={`${styles.flexBtw} flex-wrap overflow-y-scroll h-[250px] `}>
                    {uniqueList.map((item) => (
                        <div key={item} className={`${styles.flexBtw} w-full p-1 m-1 shadow-md cursor-pointer hover:bg-gray-300  `}
                            onClick={() => {
                                handleFilterClick(`${item}`);
                                setToggleEducationView(false)
                            }}>
                            <p>{item}</p>
                            <small className='bg-gray-300 p-1 h-[20px] font-medium flex items-center rounded-full'>
                                {getSimilarItemsCount(data, 'edu', item)}
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EducationFilter