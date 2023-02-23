import React from 'react';
import heroImg from '../../assets/hero-img.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../../assets/vanishing-stripes.svg'

const Hero = () => (
    <section
        className={` md:h-[90vh] flex-col flex justify-center items-center md:flex-row hero bg-cover bg-no-repeat`}
        style={{ 'backgroundImage': `url(${heroBg})`}}>
        <div className='w-full mt-10 md:mt-0 md:w-[50%] px-4 ex:px-0 ex:ml-[74px] font-poppins 
        text-dimWhite pr-2 md:mb-0 mb-5' >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}>
            <h1 className='text-[35px] ex:text-[45px] font-[500]'>
                Upload and view profiles all in {' '}
                <span className='font-bold hero-border'>one place</span>
            </h1>
            </motion.div>

            <motion.div
            animate={{ y: 0  }}
            transition={{ delay: 0.5 }}>
            <p className='md:w-[90%] text-[16px] pr-8 md:pl-0 my-8 md:pr-4 leading-6'>
                Easily upload your professional profile for recruiters and potential partners
                to view. Expand your network of collaborators by browsing through profiles.
                Choose from several templates to create a stunning profile.
            </p>
            </motion.div>
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
    <Link to='/signup' className={`block text-center border-[3px] w-1/2 ss:w-[260px] border-dotted border-t-primary
    border-b-[#548CA8] border-l-[#548CA8] border-r-[#548CA8] font-[900] bg-lightGray p-2 text-[20px] cursor-pointer rounded-lg`}>
        <button className='text-gradient mx-2'>
            GET STARTED {' '}
        </button>
    </Link>
)


export default Hero

