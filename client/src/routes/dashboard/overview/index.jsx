import React from 'react'
import RecentProfiles from './RecentProfiles'
import RecentTemplates from './RecentTemplates'

const Overview = () => (
    <section className='font-poppins w-full sm:w-[70vw] '>
        <div className='mt-3 mb-10 text-[20px] text-center font-garamond font-[500]'>
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