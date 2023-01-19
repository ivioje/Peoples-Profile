import React from 'react'
import ProfileUploads from './UploadedProfiles'

const UploadedProfiles = () => {
  return (
    <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center'>
      <div className='sm:mt-10 mt-1 xs:p-3  '>
        <p className='w-full'>
          Your uploaded profiles
        </p>
        <hr />
        <p className='my-2'>
          Here, you'll find all the profiles you've created
        </p>
      </div>

        <ProfileUploads />
       
    </section>
  )
}
export default UploadedProfiles