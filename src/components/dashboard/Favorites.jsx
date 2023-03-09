import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context'
import styles from '../../style'

const Favorites = () => {

    const {  favorites, removeFromFavorites } = useContext(Context);

    return (
        <div className={`flex justify-center items-center flex-wrap `}>
            {favorites.map(item => (
                <div className='xs:w-[200px] w-full m-4' key={item.id}>
                    <Link to={`/profiles/user/${item.id}`}>
                    <div className={`h-[114px] bg-cover bg-no-repeat bg-center text-secondary rounded-sm`}
                        style={item.photo? { 'backgroundImage': `url(${item.photo})` } : 
                        {'backgroundImage': `url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')`}}>
                        <div className='profilesOverlay p-1 flex flex-col justify-between flex-wrap rounded-sm'>
                            <div className='text-[15px]'>
                                <div className={`flex justify-start items-center uppercase tracking-[1px]`}>
                                    <h1 className='my-1'>{item.name}</h1>
                                </div>
                                <h3 className='capitalize'>{item.work}</h3>
                            </div>
                            <h6 className='uppercase text-[12px] tracking-[2px]'>sept 10, 2022</h6>
                        </div>
                    </div>
                    </Link>

                    <div className={`${styles.flexCenter} px-1 py-3 mt-1 text-slate-600 font-[600] `}>
                        <button onClick={() => removeFromFavorites(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Favorites