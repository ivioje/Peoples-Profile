import React, { useEffect } from 'react';
import Home from './routes/home/Home';
import Navbar from './components/navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Profiles from './routes/profiles/Profiles';

const App = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Navbar />
      <Home />
      <Profiles />
    </div>
  )
}

export default App