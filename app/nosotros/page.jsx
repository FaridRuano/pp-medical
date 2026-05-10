import ExperienceUs from '@app/_components/us/experience/ExperienceUs'
import FocusUs from '@app/_components/us/focus/FocusUs'
import Hero from '@app/_components/us/hero/HeroUs'
import TechnologyUs from '@app/_components/us/technology/TechnologyUs'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero/>
      <ExperienceUs/>
      <FocusUs/>
      <TechnologyUs/>
    </>
  )
}

export default page
