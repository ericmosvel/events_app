import React from 'react'
import Hero from '../components/Hero'
import Form from '../components/Form'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='You can contact me to schedule our next meeting.' />
        <Form />        
    </div>
  )
}

export default contact