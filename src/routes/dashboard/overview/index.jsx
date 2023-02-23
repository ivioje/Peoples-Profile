import React from 'react'
import RecentProfiles from '../../../components/dashboard/RecentProfiles'
import RecentTemplates from '../../../components/dashboard/RecentTemplates'

const Overview = () => (
    <section className='font-poppins pl-2 pr-2 min-h-[80vh]'>
        <div className='sm:mt-3 mt-8 mb-10 text-[17px] font-normal text-center font-montserrat'>
            <p>Hello {'Taylor'}, welcome to your dashboard. Create something awesome 😎</p>
        </div>

        <RecentProfiles />
        <RecentTemplates />
    </section>
)
export default Overview