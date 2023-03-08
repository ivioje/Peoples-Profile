import { data } from 'autoprefixer';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { cardItems } from '../../constants';
import styles from '../../style';
import SingleCard from './SingleCard';

const Cards = ({
    favorites,
    setFavorites,
    paginatedItems,
    filterData,
    handlePageNumber,
    currentPage,
    containerRef
     }) => {

    return (
        <section className='pb-20' >
            <div className='flex justify-center flex-wrap font-poppins pb-6' ref={containerRef}>

                {paginatedItems.length < 1 ? <div>Not found</div> : paginatedItems.map(items => (
                    <div key={items.id}>
                        <SingleCard
                            items={items}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
            {filterData().length > 20 &&
                Array.from({ length: Math.ceil(filterData().length / 20) }, (_, i) => i + 1).map((pageNumber) => (
                <button key={pageNumber} onClick={() => handlePageNumber(pageNumber)} 
                className={currentPage === pageNumber ? `bg-primary text-dimWhite ${styles.flexCenter} border p-2 m-2 w-[30px] h-[30px] rounded-full font-semibold`
                 : 
                `${styles.flexCenter} border p-2 m-2 w-[30px] h-[30px] rounded-full font-semibold`}>
                {pageNumber}
                </button>
            ))}
            </div>
            <h1 className='text-center'>Favorites List</h1>
            <div>
                {favorites.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>


        </section>
    )
}

export default Cards