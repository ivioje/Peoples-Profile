import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './hero'
import Stats from './stats'
import Upload from './upload'

const Home = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <Stats />
        <Upload />
    </section>
  )
}

export default Home