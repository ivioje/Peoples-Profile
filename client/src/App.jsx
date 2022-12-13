import React, { useEffect } from 'react';
import Home from './pages/home/Home';
import AOS from 'aos';

const App = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Home />
    </div>
  )
}

export default App