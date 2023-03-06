import React from 'react';
import styles from '../../style';

const OrganizationFilter = ({ toggleOrganisationView, data, handleFilterClick, setToggleOrganisationView }) => {

    const getRandomId = (min, max) => {
        let id = Math.random() * (max - min) + min;
        return id;
    }

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
                <button onClick={() => {
                    handleFilterClick(null);
                    setToggleOrganisationView(false)
                }}
                className='bg-slate-400 px-5 py-1 text-primary tracking-wider font-[600] '>
                    ALL
                </button>
                    {uniqueList.map((item) => (
                        <div key={item} className={`${styles.flexBtw} p-1 m-3 border-b cursor-pointer hover:bg-gray-300`}>
                            <div className='w-[20px] h-[20px] '>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
                                    className='mx-1' />
                            </div>
                            <p onClick={() => {
                                handleFilterClick(`${item}`);
                                setToggleOrganisationView(false)
                            }}
                             className='mx-3'>{item}</p>
                            <small className='bg-gray-300 p-1 h-[20px] flex items-center rounded-full'>
                                5
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OrganizationFilter