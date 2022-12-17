import React from 'react'
import {
  Hero, Stats, Testimonials, Upload, UseTemplates, ViewProfiles
} from '.'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Upload />
      <ViewProfiles />
      <UseTemplates />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home