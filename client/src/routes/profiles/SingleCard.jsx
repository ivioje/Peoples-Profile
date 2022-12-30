import React from 'react'
import { BsHeart, BsHeartFill, BsShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Share from './Share'

const SingleCard = ({ item, toggleFavourites, fill, setFill }) => {
const { photo, name, work } = item
    return (
        <div className='w-[42%] xs:w-[215px] border 
                    border-gray-100 flex flex-col items-center justify-between pt-3
                    my-6 mx-2 top-[-10px] min-w-[40px] rounded-t-[26px] relative '>

            <div className='w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] mb-4 border border-white 
                            rounded-[50%] shadow bg-cover bg-center'
                style={{ 'backgroundImage': `url(${photo})` }}
            />

            <button className='absolute xs:top-[110px] right-0 bg-dimWhite w-[30px] xs:w-[40px] 
                        h-[30px] xs:h-[40px] flex items-center justify-center text-[14px] xs:text-[19px] rounded-full 
                        mr-1 ss:mr-2 shadow-lg outline-none xs:shadow text-primary' onClick={() =>  toggleFavourites(item)} >
                {fill.id ? <BsHeartFill /> : <BsHeart />}
            </button>

            <div className='flex flex-col w-full p-2 bg-primary text-lightGray text-center'>
                <h4 className='card_text_gradient px-1 pt-1 font-[500] uppercase text-[13px] font-firaSans'>
                    {name}
                </h4>
                <p className='px-1 pb-3 text-[14px]'>
                    {work}
                </p>
                <div className='flex justify-between items-center'>
                    <Link to={`/user/${name}`} className='p-[2px] text-[14px] border border-gray-400'>
                        View Profile
                    </Link>

                    <button className='bg-dimWhite w-[30px] xs:w-[40px] h-[30px] xs:h-[40px]
                            flex items-center justify-center text-[14px] xs:text-[19px] rounded-full shadow-lg
                            outline-none xs:shadow text-primary'>
                        <BsShareFill />
                    </button>
                </div>
            </div>
            {/*share component */}
            <Share />
        </div>
    )
}

export default SingleCard