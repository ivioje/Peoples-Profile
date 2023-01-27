import React from 'react';
import heartIcon from '../../../assets/heartIcon.svg'
import Favorites from './Favorites';

const SavedProfiles = () => (
  <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center'>
    <div className=' sm:mt-10 mt-1 xs:p-3 w-full font-montserrat'>
      <div className='flex items-center '>
        <img src={heartIcon} alt="icon" />
        <p className='mx-1'>
          Your saved profiles
        </p>
      </div>
      <hr />
      <p className='my-2 opacity-70'>
        See and manage your saved profiles
      </p>
    </div>

    <Favorites />
  </section>
)

export default SavedProfiles