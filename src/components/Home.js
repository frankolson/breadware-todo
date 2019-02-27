import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="container container--small text-center my-4">
    <h1 className="mb-3">Welcome to my Breadware Tech Challenge!</h1>

    <Link to='/login' className='btn btn-primary'>
      Let's get started!
    </Link>
  </div>
)

export default Home
