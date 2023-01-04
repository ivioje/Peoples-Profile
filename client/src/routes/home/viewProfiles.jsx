import React from 'react';
import viewImg from '../../assets/viewImg.svg'

const ViewProfiles = () => {
    return (
        <section className='flex justify-between items-center md:flex-row-reverse flex-col
         my-[45px] md:my-[54px] md:px-[100px] px-4 w-full'>
            <div className='w-full md:w-[40%] px-3 md:pt-10 pt-5'>
                <h1 className='text-[30px] md:text-[40px] font-[700]  font-firaSans'>
                    View, Search, Share, Save and Connect
                </h1>
                <p className='font-poppins font-[16px]  py-4'>
                    View and search from several profiles and find out who fits the job. You can also view profiles
                    of employees from various companies and connect. Share or save a profile for later.
                </p>
                <button className='btn font-firaSans primary-gradient text-dimWhite font-[500] text-[20px] 
                rounded-[10px] h-auto md:h-[60px] w-auto p-3'>
                    <span>View Profiles</span>
                </button>
            </div>
            <div className='w-full flex justify-center md:justify-start md:w-[500px] md:my-0 my-10'>
                <img src={viewImg} alt='upload' className='' />
            </div>
        </section>
    )
}

export default ViewProfiles