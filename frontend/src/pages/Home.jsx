import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-cover bg-contain  bg-center bg-[url(https://plus.unsplash.com/premium_photo-1737012422783-590bdd55f7e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8)]  flex justify-between flex-col h-screen w-full'>
      <img className='w-20' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
      <div className='bg-white flex flex-col gap-5 justify-center py-4 px-10'>
        <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
       
        <Link to='/login' className='inline-block bg-black text-white rounded py-2 px-17 flex flex-center justify-center'>Continue</Link>
      </div>
    </div>
  )
}

export default Home