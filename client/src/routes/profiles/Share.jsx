import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsX } from 'react-icons/bs'
import styles from '../../style'

const Share = () => {
  return (
    <section className='absolute border-4 border-gray-100 pt-6 px-2 xs:p-4 w-auto h-auto bottom-[-20px] right-0 bg-white shadow'>
      <button className='absolute top-0 right-0 text-[26px]'>
        <BsX />
      </button>
      <small className='font-firaSans text-gray-500'>Share on</small>
      <div className={`${styles.flexBtw} flex-wrap text-xl text-primary share mt-1`}>
        <a href='#'><BsTwitter /></a>
        <a href='#'><BsGithub /></a>
        <a href='#'><BsLinkedin /></a>
        <a href='#'><BsFacebook /></a>
      </div>
    </section>
  )
}

export default Share