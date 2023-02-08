import React from 'react';
import shareIcon from '../../../assets/shareIcon.svg'
import styles from '../../../style';
import SharedProfilesList from './SharedProfilesList';

const Sharedprofiles = () => {
  return (
    <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center'>
      <div className=' sm:mt-10 mt-1 xs:p-3 w-full font-montserrat'>
        <div className='flex items-center '>
          <img src={shareIcon} alt="icon" />
          <p className='mx-1'>
            Your saved profiles
          </p>
        </div>
        <hr />
        <div className={`${styles.flexBtw} my-2 opacity-70`}>
          <p className=''>
            Here, you'll find all the profiles you've shared
          </p>
          <button title='clear all items' className='bg-slate-200 rounded-2xl text-[14px] py-1 px-2'>
            Clear
          </button>
        </div>
      </div>

      <SharedProfilesList />

    </section>
  )
}

export default Sharedprofiles