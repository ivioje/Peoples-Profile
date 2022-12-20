import React, { useState } from 'react'
import { BsHeart, BsHeartFill, BsShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { cardItems } from '../../constants'
import CardButton from './cardButton'

const Cards = () => {
    const [fill, setFill] = useState(null);
    let id;

    const getRandomId = (min, max) => {
        id = Math.random() * (max - min) + min;
        return id;
    }

    return (
        <section className='pb-20'>
            <div className='flex justify-center flex-wrap font-poppins pb-6'>
                {cardItems.map((items) => (
                    <div key={items.id} className='w-[42%] xs:w-[215px] border 
                    border-gray-100 flex flex-col items-center justify-between pt-3
                    my-6 mx-2 top-[-10px] min-w-[40px] rounded-t-[26px] relative '>

                        <div className='w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] mb-4 border border-white 
                            rounded-[50%] shadow bg-cover bg-center'
                            style={{ 'backgroundImage': `url(${items.photo})` }}
                        />

                        <button className='absolute xs:top-[110px] right-0 bg-dimWhite w-[30px] xs:w-[40px] 
                        h-[30px] xs:h-[40px] flex items-center justify-center text-[14px] xs:text-[19px] rounded-full 
                        mr-1 ss:mr-2 shadow-lg outline-none xs:shadow text-primary' onClick={() => setFill(items.id)}>
                            {fill === items.id ? <BsHeartFill /> : <BsHeart />}
                        </button>
                        {/* <CardButton filled={items.fill} setFill={setFill} fill={fill} /> */}

                        <div className='flex flex-col w-full p-2 bg-primary text-lightGray text-center'>
                            <h4 className='card_text_gradient px-1 pt-1 font-[500] uppercase text-[13px]'>
                                {items.name}
                            </h4>
                            <p className='px-1 pb-3 text-[14px] font-[500]'>
                                {items.work}
                            </p>
                            <div className='flex justify-between items-center'>
                                <Link to={`/user/${items.name}`} className='p-[2px] text-[14px] border border-gray-400'>
                                    View Profile
                                </Link>

                                <button className='bg-dimWhite w-[30px] xs:w-[40px] h-[30px] xs:h-[40px]
                            flex items-center justify-center text-[14px] xs:text-[19px] rounded-full shadow-lg
                            outline-none xs:shadow text-primary'>
                                    <BsShareFill />
                                </button>
                            </div>
                        </div>
                    </div>
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