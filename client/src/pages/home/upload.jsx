import React from 'react';
import uploadImg from '../../assets/uploadImg.svg'
import Button from '../../components/Button';

const Upload = () => {
  return (
    <section className='flex justify-between items-center flex-col md:flex-row my-[45px] md:my-[54px] md:px-[100px] px-4 w-full'>
      <div data-aos='fade-right'
        className='w-full md:w-[40%] px-3 pt-5 md:pt-10'>
        <h1 className='text-[30px] md:text-[40px] font-[700] text-text_color font-firaSans'>
          Upload Profiles with Ease
        </h1>
        <p className='font-poppins font-[16px] text-text_color py-4'>
          Upload your professional profile for others to connect with you.
          Easily upload your employees profile. You can upload unlimited number of profiles.
        </p>
        <button className='btn font-firaSans primary-gradient text-dimWhite font-[500] text-[20px] 
        rounded-[10px] h-auto md:h-[60px] w-auto p-3'>
          <span>Upload Profiles</span>
        </button>
      </div>
      <div data-aos='fade-left'
        className='w-full flex justify-center md:w-[500px] md:my-0 my-6'>
        <img src={uploadImg} alt='upload' />
      </div>
    </section>
  )
}

export default Upload