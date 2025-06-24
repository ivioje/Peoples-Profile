import React, { useContext } from 'react'
import BasicTemplate from './basic/BasicTemplate'
import { Link, Route, Routes } from 'react-router-dom'
import { AuthContext } from '@/context/AuthenticationContext'
import { InfoIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const IndexLayout = ({ title, footer }) => {
  const { userId } = useContext(AuthContext)

  return (
    <div className='w-full'>
      <header>
        {userId && (
          <div className='text-gray-600 text-xs flex justify-center items-center py-2'>
            <p>This banner and footer will be visible on your public profile. 
            <Link to="/upgrade" className='text-primary mx-1 font-medium underline'>Upgrade</Link> 
            now to remove.
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon size={12} className='inline-block mx-1' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Only visible to you</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          )}
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
      <footer className="text-center my-5">@2025 Peoples Profile</footer>
    </div>
  )
}

export default IndexLayout