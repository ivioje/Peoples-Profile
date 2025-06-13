import React, { useContext } from 'react'
import BasicTemplate from './basic/BasicTemplate'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '@/context/AuthenticationContext'
import { Button } from '@/components/ui/button'

const IndexLayout = ({ title, footer }) => {
  const { userId } = useContext(AuthContext)

  return (
    <div className='w-full'>
      <header>
        <div className="flex justify-center items-center primary-gradient text-white py-3 w-full">
          <p className='font-medium'>This website was created with Peoples Profile. Join now to create your own profile!</p>
          <button className='bg-slate-950 text-white px-4 py-2 mx-4 rounded-md'>
            <a href="https://peoplesprofile.com">Join Now</a>
          </button>
        </div>
      </header>
      <div>
        <Routes>
          <Route path={`/basic/${userId}/*`} element={<BasicTemplate />} />
        </Routes>
      </div>
      <footer className="text-center">@2025 Peoples Profile</footer>
    </div>
  )
}

export default IndexLayout