import React, { useState } from 'react'
import { BsHeart, BsHeartFill, BsShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { cardItems } from '../../constants'
import Share from './Share'
import SingleCard from './SingleCard'

const Cards = () => {
   const [fill, setFill] = useState([]);
    const [open, setOpen] = useState(false)

    const toggleFavourites = (item) => {
        setFill([...fill, item])
        console.log(fill);
    }

    const openModal = () => {
        setOpen((prev) => !prev)
    }

    return (
        <section className='pb-20'>
            <div className='flex justify-center flex-wrap font-poppins pb-6'>
                {cardItems.map((items) => (
                    <SingleCard key={items.id} item={items} toggleFavourites={toggleFavourites} fill={fill} setFill={setFill} />
                ))
                }
            </div>
            <h4 className='text-center text-gray-500 font-bold font-firaSans'>
                Loading...
            </h4>
        </section>
    )
}

export default Cards