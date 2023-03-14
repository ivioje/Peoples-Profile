import React, { useContext, useState } from 'react'
import { BsShareFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../../context/Context';
import AddToFavoritesButton from './AddToFavorites'
import Share from './Share';
import '../../index.css'

const SingleCard = ({ items }) => {
    const [open, setOpen] = useState(false);

    const { favorites, setFavorites, scrollToTop } = useContext(Context)




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
        <div key={items.id} className='w-[160px] xs:w-[215px] border border-gray-100 flex flex-col items-center justify-between pt-3 my-6 mx-2 top-[-10px] min-w-[40px] rounded-[20px] relative'>
            <div className='w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] mb-4 border border-white 
                            rounded-[50%] shadow bg-cover bg-center'
                style={items.photo ? { 'backgroundImage': `url(${items.photo})` } :
                    { 'backgroundImage': `url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')` }}
            />
            <AddToFavoritesButton addToFavorites={addToFavorites} isInFavorite={isInFavorite} />

            <div className='flex flex-col w-full p-2 bg-slate-600 text-lightGray text-center rounded-b-[20px]'>
                <h4 className='card_text_gradient px-1 pt-1 font-[500] uppercase text-[13px] font-firaSans' id='userLink' onClick={() => scrollToTop()}>
                    <Link to={`user/${items.id}`}>
                                {items.name}
                    </Link>
                </h4>
                <p className='px-1 pb-3 text-[14px]'>
                    {items.work}
                </p>
                <div className='flex justify-center items-center px-2'>
                    <button className='bg-dimWhite w-[30px] xs:w-[40px] h-[30px] xs:h-[40px]
                                    flex items-center justify-center text-[14px] xs:text-[19px] rounded-full shadow-lg
                                    outline-none xs:shadow text-primary' onClick={() => setOpen(!open)} >
                        <BsShareFill />
                    </button>
                </div>
            </div>
            <Share open={open} setOpen={setOpen} item={items} />
        </div>
    )
}

export default SingleCard