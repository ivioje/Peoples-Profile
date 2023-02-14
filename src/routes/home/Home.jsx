import React from 'react'
import {
  Hero, Stats, Testimonials, Upload, UseTemplates, ViewProfiles
} from '.'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Upload />
      <ViewProfiles />
      <UseTemplates />
      <Testimonials />
    </div>
  )
}

export default Home