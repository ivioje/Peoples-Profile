import React from 'react';
import heartIcon from '../../../assets/heartIcon.svg'
import DashboardHeaders from '../../../components/dashboard/DashboardHeaders';
import Favorites from '../../../components/dashboard/Favorites';

const SavedProfiles = () => (
  <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center min-h-[80vh]'>
    <DashboardHeaders
      title={'Saved profiles'}
      title={'See and manage your saved profiles'}
      icon={heartIcon}
    />

    <Favorites />
  </section>
)

export default SavedProfiles