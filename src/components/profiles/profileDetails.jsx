import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../../context/GlobalContext';

const ProfileDetails = () => {

  const { id } = useParams();
  const { data, nodeRef } = useContext(Context);

  const items = data.map((item) => item);

  const userDetails = items[id];


  if (!userDetails) {
    return <div>User not found</div>
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="flex justify-center">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Profile picture"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">John Doe</h2>
          <p className="text-sm font-medium text-gray-500">Software Developer</p>
          <div className="mt-6">
            <h3 className="text-gray-600 font-semibold text-lg">Experience</h3>
            <ul className="mt-4">
              <li className="flex items-start mb-2">
                <span className="bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-lg font-bold flex items-center justify-center">
                  1
                </span>
                <div className="ml-3">
                  <p className="font-semibold text-gray-700">Software Developer</p>
                  <p className="text-gray-600 text-sm">Acme Corporation</p>
                  <p className="text-gray-500 text-sm">June 2020 - Present</p>
                </div>
              </li>
              <li className="flex items-start mb-2">
                <span className="bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-lg font-bold flex items-center justify-center">
                  2
                </span>
                <div className="ml-3">
                  <p className="font-semibold text-gray-700">Junior Software Developer</p>
                  <p className="text-gray-600 text-sm">Xyz Corporation</p>
                  <p className="text-gray-500 text-sm">January 2019 - June 2020</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails