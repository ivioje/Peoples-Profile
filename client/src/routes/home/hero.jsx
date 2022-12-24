import React from 'react';
import heroImg from '../../assets/hero-img.svg';
import styles from '../../style'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Hero = () => (
    <section
        className={`bg-primary md:h-[90vh] flex-col flex justify-center items-center md:flex-row `}>
        <div className='w-full mt-10 md:mt-0 md:w-[50%] px-4 ex:px-0 ex:ml-[74px] font-poppins 
        text-dimWhite pr-2 md:mb-0 mb-5' >
            <h1 className='text-[35px] ex:text-[45px] font-[500]'>
                Upload and view profiles all in {' '}
                <span className='font-bold hero-border'>one place</span>
            </h1>
            <p className='md:w-[90%] text-[16px] pr-8 md:pl-0 my-8 md:pr-4 leading-6'>
                Easily upload your professional profile for recruiters and potential partners
                to view. Expand your network of collaborators by browsing through profiles.
                Choose from several templates to create a stunning profile.
            </p>
            <GetStarted />
        </div>

        <div className='min-w-[330px] sm:w-full sm:h-full 
        px-5 md:px-0 md:w-[702px] md:h-[492px] md:mr-[74px] md:my-0 my-5 md:pl-2 md:block flex justify-center
        relative'>
            <img src={heroImg} alt='hero image' className='object-cover z-[5]' />
            <div className='absolute z-[0] w-[50%] h-[50%] bottom-10 right-20 red__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full right-40 bottom-40 black__gradient' />
        </div>
    </section>
)


const GetStarted = () => (
    <div className={`${styles.flexCenter} flex justify-start border-[2px] w-1/2 border-dotted border-t-primary
    border-b-[#548CA8] border-l-[#548CA8] border-r-[#548CA8] font-[900] text-lightGray relative bg-lightGray p-1 text-[20px]`}>
        <Link to='/signup'>
            <button className='text-gradient'>
                GET STARTED {' '}
            </button>
                <span className=' absolute rotate-[-45deg] text-primary p-1'><BsArrowRight /></span>
        </Link>
    </div>
)


export default Hero

