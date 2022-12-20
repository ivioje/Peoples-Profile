import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../../assets/tempHeaderImg.jpg'

const Header = () => (
    <div className='font-poppins text-text_color'>
        <div className='h-[140px] relative'>
            <img src={bgImg} alt='cover' className='object-cover h-[140px] w-full' />
            <h2 className='overlay flex items-center justify-center text-[20px] ss:text-[30px] font-[600] p-1'>
                Choose from several templates <br /> to suit your need.
            </h2>
        </div>

        <p className='text-center font-normal py-6 px-1'>
            <Link to='/login' className=' border-b-2 border-dotted border-gray-500 text-gradient'>
                Log in</Link> to use and bookmark a template
        </p>
    </div>
)

export default Header