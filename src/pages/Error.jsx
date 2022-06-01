import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! It's a dead end</h1>
        <NavLink to='/' className='btn btn-primary'>
          back home
        </NavLink>
      </div>
    </section>
  )
}

export default Error
