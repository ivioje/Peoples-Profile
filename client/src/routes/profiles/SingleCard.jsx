import React from 'react'
import { BsHeart, BsHeartFill, BsShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Share from './Share'

const AddToFavoritesButton = (props) => {

    const addFavorites = () => {
        props.toggleFavorites(props.item)
    }

    return (
            <button className='absolute xs:top-[110px] right-0 bg-dimWhite w-[30px] xs:w-[40px] 
                        h-[30px] xs:h-[40px] flex items-center justify-center text-[14px] xs:text-[19px] rounded-full 
                        mr-1 ss:mr-2 shadow-lg outline-none xs:shadow text-primary' 
                        onClick={addFavorites} >
                <BsHeart />
            </button>

            
    )
}

export default AddToFavoritesButton