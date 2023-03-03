import React from 'react';
import { motion } from 'framer-motion';
import templateImg from '../../assets/templateImg.svg'

const UseTemplates = () => {
    return (
        <motion.section className='flex justify-between items-center md:flex-row flex-col 
        my-[45px] md:my-[54px] md:px-[100px] px-4 w-full' viewport={{ root: false }}>
            <motion.div className='w-full md:w-[40%] px-3 pt-5 md:pt-10' initial={{ x: '20vw', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} transition={{ type: 'spring', duration: 1, bounce: 0.3 }}>
                <h1 className='text-[30px] md:text-[40px] font-[700]  font-firaSans'>
                    Use Templates
                </h1>
                <p className='font-poppins font-[16px]  py-2'>
                    Choose from several templates tailored to your profession.
                    You can also request for a template when you don’t find a
                    template that suits your need. Easily bookmark a template for later.
                </p>
                <button className='btn font-firaSans primary-gradient font-[500] text-[20px] text-dimWhite
                 rounded-[10px] h-auto md:h-[60px] w-auto p-3'>
                    <span>Use Templates</span>
                </button>
            </motion.div>
            <motion.div className='w-full flex justify-center md:w-[500px] md:my-0 my-10' initial={{ x: '-20vw', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} transition={{ type: 'spring', duration: 1, bounce: 0.3 }}>
                <img src={templateImg} alt='upload' />
            </motion.div>
        </motion.section>
    )
}

export default UseTemplates