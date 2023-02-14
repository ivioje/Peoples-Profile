import React from 'react';
import uploadIcon from '../../../assets/cloud-upload.svg';
import ProfileUploads from '../../../components/dashboard/UploadedProfiles';

const UploadedProfiles = () => {
  return (
    <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center'>
      <div className='sm:mt-10 mt-1 xs:p-3 w-full font-montserrat'>
        <div className='flex items-center '>
          <img src={uploadIcon} alt="icon" />
          <p className='mx-1'>
            Your uploaded profiles
          </p>
        </div>
        <hr />
        <p className='my-2 opacity-70'>
          Here, you'll find all the profiles you've created
        </p>
      </div>

      <ProfileUploads />

    </section>
  )
}
export default UploadedProfiles