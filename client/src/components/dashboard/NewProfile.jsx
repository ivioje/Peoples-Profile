import React from 'react'
import { BsPlus } from 'react-icons/bs'
import styles from '../../style'

const NewProfile = () => {
  return (
    <section className='my-12 xs:flex block'>
        <button className={`${styles.flexBtw} p-3 text-primary border border-dotted border-primary rounded-full`}>
           <BsPlus className='text-[25px]' />
            New Profile</button>
    </section>
  )
}

export default NewProfile