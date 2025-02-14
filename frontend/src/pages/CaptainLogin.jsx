import React,
{ useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
  
    const sumbmitHandler = (e)=>{
      e.preventDefault();
      setCaptainData({
        email: email,
        password:password
      })
      
      setEmail('');
      setPassword('')
    }
  return (
    
    <div className='px-4 py-2 flex flex-col items-center h-screen justify-between'>
    <div className='w-full max-w-sm'>
      <img className='w-20 mb-7' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
      <p className='text-center mt-2'>join a fleet? <Link to='/captain-signup' className='text-blue-700'>Register as a Captain</Link></p>
     </div>

    <div className='w-full max-w-sm '>
      <Link to='/login' className="bg-[#98502A] mb-10 text-white font-semibold rounded-lg w-full py-2 block text-center text-lg">
        Sign in as a user
      </Link>
    </div>
  </div>
  )
}

export default CaptainLogin
