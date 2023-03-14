import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from '../../context/Context';

const ProfileDetails = () => {

  const { id } = useParams();
  const { data, nodeRef } = useContext(Context);

  const items = data.map((item) => item);

  const userDetails = items[id];
  

  if(!userDetails) {
    return <div>User not found</div>
  }

  return (
    <div ref={nodeRef}>
      <h1>{userDetails.name}</h1>
      <div className='w-[100px] h-[100px] rounded-full'>
      <img src={userDetails.photo} alt={userDetails.name} />
      </div>
      <h1>{userDetails.work}</h1>
    </div>
  )
}

export default ProfileDetails