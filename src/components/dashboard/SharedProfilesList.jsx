import React, { useContext } from 'react'
import { ProfileContext } from '../../context/ProfileContext';

const SharedProfilesList = () => {

    const { data } = useContext(ProfileContext);
    return (
        <div className={`flex justify-center items-center flex-wrap `}>
            {data.map(item => (
                <div title='click to view' className='xs:w-[200px] w-full m-4 cursor-pointer' key={item.id}>
                    <div className={`h-[114px] bg-cover bg-no-repeat bg-center text-secondary rounded-sm`}
                        style={{ 'backgroundImage': `url(${item.photo})` }}>
                        <div className='profilesOverlay p-1 flex flex-col justify-between flex-wrap rounded-sm'>
                            <div className='text-[15px]'>
                                <div className={`flex justify-start items-center uppercase tracking-[1px]`}>
                                    <h1 className='my-1'>{item.name}</h1>
                                </div>
                                <h3 className='capitalize'>{item.work}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SharedProfilesList