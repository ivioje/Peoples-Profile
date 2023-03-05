import React from 'react'
import SingleCard from './SingleCard'

const Cards = ({
    data,
    favorites,
    setFavorites,
    filteredItems }) => {

    return (
        <section className='pb-20'>
            <div className='flex justify-center flex-wrap font-poppins pb-6'>
                {filteredItems(data).map(items => (
                    <div key={items.id}>
                        <SingleCard
                            items={items}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    </div>
                ))}
            </div>
            <h4 className='text-center text-gray-500 font-bold font-firaSans'>
                Loading...
            </h4>
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