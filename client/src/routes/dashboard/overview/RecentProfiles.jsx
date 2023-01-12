import React from 'react'
import { BsHeart, BsShare } from 'react-icons/bs'
import { cardItems } from '../../../constants'

const RecentProfiles = () => (
    <div>
        {cardItems.map(item => (
            <div key={item.id} style={{ 'backgroundImage': `url(${item.photo})` }}>
                <h1>{item.name}</h1>
                <h4>{item.work}</h4>

                <BsShare />
                <BsHeart />
            </div>
        ))}
    </div>
)

export default RecentProfiles