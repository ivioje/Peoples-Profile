import React from 'react'
import RecentProfiles from '../../../components/dashboard/RecentProfiles'
import RecentTemplates from '../../../components/dashboard/RecentTemplates'

const Overview = () => (
    <section className='font-poppins pl-2 pr-2 pb-4'>
        <div className='sm:mt-3 mt-8 mb-10 text-[17px] font-normal text-center font-montserrat'>
            <p>Hello Taylor, welcome to your dashboard. Create something awesome 😎</p>
        </div>

        <RecentProfiles />
        <RecentTemplates />

        <div className='absolute flex items-center mx-3 mt-14'>
            <p className='font-[500]'>Total profile views:</p>
            <span className='font-[800] text-[20px] mx-3'>30</span>
        </div>
    </section>
)
export default Overview