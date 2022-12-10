import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './hero'
import Stats from './stats'
import Testimonials from './testimonial'
import Upload from './upload'
import UseTemplates from './useTemplates'
import ViewProfiles from './viewProfiles'

const Home = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <Stats />
        <Upload />
        <ViewProfiles />
        <UseTemplates />
        <Testimonials />
    </section>
  )
}

export default Home