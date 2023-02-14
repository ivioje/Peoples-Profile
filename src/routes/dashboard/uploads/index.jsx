import React from 'react';
import uploadIcon from '../../../assets/cloud-upload.svg';
import DashboardHeaders from '../../../components/dashboard/DashboardHeaders';
import ProfileUploads from '../../../components/dashboard/UploadedProfiles';

const UploadedProfiles = () => {
  return (
    <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center'>
      <DashboardHeaders
        title={'Your uploaded profiles'}
        subtitle={'Here, you\'ll find all the profiles you\'ve created'}
        icon={uploadIcon}
      />

      <ProfileUploads />
    </section>
  )
}
export default UploadedProfiles