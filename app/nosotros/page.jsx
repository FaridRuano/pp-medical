import About from '@app/_components/us/about/AboutUs'
import DataUs from '@app/_components/us/data/DataUs'
import Hero from '@app/_components/us/hero/HeroUs'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero/>
      <About/>
      <DataUs/>
    </>
  )
}

export default page