import React from 'react'

const DashboardHeaders = ({ icon, title, subtitle }) => {
    return (
        <div className=' sm:mt-10 mt-1 xs:p-3 w-full font-montserrat'>
            <div className='flex items-center '>
                <img src={icon} alt="icon" />
                <p className='mx-1'>
                    {title}
                </p>
            </div>
            <hr />
            <p className='my-2 opacity-70'>
                {subtitle}
            </p>
        </div>
    )
}

export default DashboardHeaders