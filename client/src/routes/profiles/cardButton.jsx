import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const CardButton = ({ fill, filled, setFill }) => {
    return (
        <button className='absolute top-[110px] right-0 bg-white w-[40px] h-[40px]
                        flex items-center justify-center text-[19px] rounded-full mr-2 shadow text-primary'
            onClick={() => setFill((prev) => !prev)}>
            {filled ? <BsHeartFill /> : <BsHeart />}
        </button>
    )
}

export default CardButton