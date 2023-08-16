import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
      <Hero heading='My Work' message='I want to share with you my most recent projects.' />      
      <Portfolio />
    </div>
  )
}

export default work