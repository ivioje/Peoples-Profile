import React, { useState } from 'react'
import { BsShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AddToFavoritesButton from './AddToFavorites'
import Share from './Share';

const SingleCard = ({ items, favorites, setFavorites }) => {
    const [open, setOpen] = useState(false);

    const addToFavorites = () => {
        // Check if the profile is already in the favorites list
        if (favorites.find((favorite) => favorite.id === items.id)) {
            return;
        }
        // Otherwise, add the profile to the favorites list
        setFavorites([...favorites, items]);
    }

    const isInFavorite = favorites.some((favorite) => favorite.id === items.id);

    return (
        <div key={items.id} className='w-[160px] xs:w-[215px] border 
                    border-gray-100 flex flex-col items-center justify-between pt-3
                    my-6 mx-2 top-[-10px] min-w-[40px] rounded-t-[26px] relative '>

            <div className='w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] mb-4 border border-white 
                            rounded-[50%] shadow bg-cover bg-center'
                style={{ 'backgroundImage': `url(${items.photo})` }}
            />
            <AddToFavoritesButton addToFavorites={addToFavorites} isInFavorite={isInFavorite} />

            <div className='flex flex-col w-full p-2 bg-primary text-lightGray text-center'>
                <h4 className='card_text_gradient px-1 pt-1 font-[500] uppercase text-[13px] font-firaSans'>
                    {items.name}
                </h4>
                <p className='px-1 pb-3 text-[14px]'>
                    {items.work}
                </p>
                <div className='flex justify-between items-center'>
                    <Link to={`/user/${items.name}`} className='p-[2px] text-[14px] border border-gray-400'>
                        View Profile
                    </Link>

                    <button className='bg-dimWhite w-[30px] xs:w-[40px] h-[30px] xs:h-[40px]
                                    flex items-center justify-center text-[14px] xs:text-[19px] rounded-full shadow-lg
                                    outline-none xs:shadow text-primary' onClick={() => setOpen(!open)} >
                        <BsShareFill />
                    </button>
                </div>
            </div>
            <Share setOpen={setOpen} open={open} />
        </div>
    )
}

export default SingleCard