import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container'>
      <Link className='register-button' to="/register">REGISTER </Link>
      <Link className='login-button' to="/login">LOGIN </Link>
    </div>
  )
}

export default Home
