import React from 'react'
import { cardItems } from '../../../constants'
import styles from '../../../style'

const Favorites = () => {
  return (
    <div className={`flex justify-center items-center flex-wrap `}>
            {cardItems.map(item => (
                <div className='xs:w-[200px] w-full m-4' key={item.id}>
                    <div className={`h-[114px] bg-cover bg-no-repeat bg-center text-secondary rounded-sm`}
                        style={{ 'backgroundImage': `url(${item.photo})` }}>
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

                    <div className={`${styles.flexCenter} px-1 py-3 mt-1 text-slate-600 font-[600] `}>
                        <button>Remove</button>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Favorites