import React from 'react';
import templateImg from '../../assets/templateImg.svg'
import Button from '../../components/Button';

const UseTemplates = () => {
    return (
        <section className='flex justify-between items-center md:flex-row flex-col-reverse 
        my-[65px] md:my-[54px] md:px-[100px] px-4 w-full'>
            <div className='w-full md:w-[40%] px-3 pt-10'>
                <h1 className='text-[30px] md:text-[40px] font-[700] text-text_color font-firaSans'>
                    Use Templates
                </h1>
                <p className='font-poppins font-[16px] text-text_color py-4'>
                    Choose from several templates tailored to your profession.
                    You can also request for a template when you don’t find a
                    template that suits your need. Easily bookmark a template for later.
                </p>
                <button className='btn font-firaSans primary-gradient font-[500] text-[20px] text-dimWhite
                 rounded-[10px] h-auto md:h-[60px] w-auto p-3'>
                    <span>Use Templates</span>
                </button>
            </div>
            <div className='w-full flex justify-center md:w-[500px]'>
                <img src={templateImg} alt='upload' />
            </div>
        </section>
    )
}

export default UseTemplates