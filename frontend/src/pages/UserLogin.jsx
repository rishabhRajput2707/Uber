import React, { useState  , useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const {user , setUser} = useContext(UserDataContext);
  const navigate = useNavigate()

  const sumbmitHandler = async(e)=>{
    e.preventDefault();
    const userData = {
      email: email,
      password:password
    }

    // try{
    //   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`) 

    // if(response.status === 200){
    //   const data = response.data
    //   setUser(data.user)
    //   navigate('/home')
    // }
    // }catch(error){
    //   console.log('login failed', error);
      
    // }



  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData, {
      headers: {
        'Content-Type': 'application/json', // Ensure the correct Content-Type
      },
    });

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token' , data.token)
      navigate('/home');
    }
  } catch (error) {
    console.error('Login failed:', error.response?.data?.errors || error.message);
    // Display error messages to the user
    if (error.response?.data?.errors) {
      error.response.data.errors.forEach((err) => {
        alert(`${err.path}: ${err.msg}`); // Show validation errors to the user
      });
    }
  }


    
    
    setEmail('');
    setPassword('')
  }
  return (
    <div className='px-4 py-2 flex flex-col items-center h-screen justify-between'>
      <div className='w-full max-w-sm'>
        <img className='w-20 mb-7' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <form onSubmit={(e)=>{
          sumbmitHandler(e)
        }}>
          <h3 className='text-xl mb-3'>What's your Email</h3>
          <input 
            required 
            value ={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            type="email" 
            placeholder='email@example.com' 
          />

          <h3 className='text-xl mb-3 '>Enter Password</h3>
          <input 
            required 
            value ={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            type="password" 
            placeholder='Password' 
          />

          
          <button className="bg-black text-white font-semibold font-xl w-full py-2 block text-center rounded-lg text-lg">
            Login
          </button>
          
        </form>
        <p className='text-center mt-2'>New here? <Link to='/signup' className='text-blue-700'>Create new Account</Link></p>
       </div>
 
      <div className='w-full max-w-sm '>
        <Link to='/captain-login' className="bg-[#55ad6f] mb-10 text-white font-semibold rounded-lg w-full py-2 block text-center text-lg">
          Sign in as a Captain
        </Link>
      </div>
    </div>
  )
}

export default Userlogin
