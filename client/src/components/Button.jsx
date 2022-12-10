import React from 'react'

const Button = ({ props }) => (
    <button className='bg-primary-gradient rounded-[10px] h-[40px] md:h-[60px] w-[100px] md:w-[164px]'>
        {props}
    </button>
)

export default Button