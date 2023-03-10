import React from 'react'
import { BsCheck, BsHeart } from 'react-icons/bs'

const AddToFavoritesButton = ({ isInFavorite, addToFavorites }) => {

    return (
        <div onClick={addToFavorites}>
            {isInFavorite ?
                <button className='absolute flex items-center border rounded-tr-full top-0 right-0 uppercase font-extrabold text-primary text-[12px] px-[1px] rounded-md'>
                    saved <BsCheck />
                </button>
                :
                <button className='absolute xs:top-[110px] top-[90px] right-0 bg-dimWhite w-[30px] xs:w-[40px] h-[30px] xs:h-[40px] flex items-center justify-center text-[14px] xs:text-[19px] rounded-full 
                    mr-1 ss:mr-2 shadow-lg outline-none xs:shadow text-primary'>
                    <BsHeart />
                </button>
            }
        </div>

    )
}

export default AddToFavoritesButton