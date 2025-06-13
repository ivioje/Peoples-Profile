import React, { useContext } from 'react'
import BasicTemplate from './basic/BasicTemplate'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '@/context/AuthenticationContext'

const IndexLayout = ({ title, footer }) => {
  const { userId } = useContext(AuthContext)

  return (
    <div>
      <header>{title}</header>
      <div>
        <Routes>
          <Route path={`/basic/${userId}/*`} element={<BasicTemplate />} />
        </Routes>
      </div>
      <footer>{footer}</footer>
    </div>
  )
}

export default IndexLayout