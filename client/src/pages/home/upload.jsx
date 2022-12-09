import React from 'react';
import uploadImg from '../../assets/uploadImg.png'

const Upload = () => {
  return (
    <section className='flex justify-between items-center flex-col-reverse md:flex-row my-[54px] md:px-[100px] px-4 w-full'>
      <div className='w-full md:w-[40%] px-3 pt-10'>
        <h1 className='text-[30px] md:text-[40px] font-[700] text_color font-firaSans'>Upload Profiles with Ease</h1>
        <p className='font-poppins font-[16px] text_color py-4'>
          Upload your professional profile for others to connect with you.
          Easily upload your employees profile. You can upload unlimited number of profiles.
        </p>
      </div>
      <div className='w-full md:w-[500px]'>
        <img src={uploadImg} alt='upload' />
      </div>
    </section>
  )
}

export default Upload