import React, { useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext';
import styles from '../../styles/style';

const OrganizationFilter = () => {

    const { data, handleFilterClick, setToggleOrganisationView, toggleOrganisationView, getSimilarItemsCount } = useContext(ProfileContext)

    const mappedItems = data.map((item) => item.org)

    const uniqueList = [...new Set(mappedItems)]

    return (
        <section className={`font-poppins text-[14px]  relative  md:w-[350px] w-[80vw] xs:w-[90%] z-40 ${toggleOrganisationView ? 'block' : 'hidden'}`}>
            <div className='border-t absolute left-0 p-3 rounded-[26px] shadow-xl bg-white xs:mx-0 mx-2'>
                <p className='m-2 text-[15px] '>
                    Filter profiles by organization or company.
                </p>
                <hr className='m-2' />
                <div className={`${styles.flexCenter} flex-wrap overflow-y-scroll h-auto `}>
                    {uniqueList.map((item) => (
                        <div key={item} className={`${styles.flexBtw} p-1 m-3 border-b cursor-pointer hover:bg-gray-300`} onClick={() => {
                            handleFilterClick(`${item}`);
                            setToggleOrganisationView(false)
                        }}>
                            <p className='mx-3'>{item}</p>
                            <small className='bg-gray-300 p-1 h-[20px] font-medium flex items-center rounded-full'>
                                {getSimilarItemsCount(data, 'org', item)}
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OrganizationFilter