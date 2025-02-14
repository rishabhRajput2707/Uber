import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CaptainSignup = () => {
  const [email, setEmail] = useState('');
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})
    
      const sumbmitHandler = (e) => {
        e.preventDefault();
      
        const newUserData = {
          email: email,
          password: password,
          fullName: {
            firstName: firstName,
            lastName: lastName,
          },
        };
      
        setUserData(newUserData); // State update
        console.log(newUserData); //  Ye turant updated data print karega
      
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
      };
  return (
    <div>
    <div className='px-4 py-2 flex flex-col items-center h-screen justify-between'>
    <div className='w-full max-w-sm'>
    <img className='w-20 mb-7' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={(e)=>{
        sumbmitHandler(e)
      }}>
        <h3 className='text-xl mb-3'>What's our  Captain's Name</h3>
        <div className='flex gap-5'>
        <input 
          required 
          
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
          type="first Name" 
          placeholder='first Name' 
          value={firstName}
          onChange={(e)=>{
            setFirstName(e.target.value)
          }}
        />
        <input 
          required 
          
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
          type="Last Name" 
          placeholder='Last Name' 
          value={lastName}
          onChange={(e)=>{
            setLastName(e.target.value)
          }}
        />
        </div>
        <h3 className='text-xl mb-3'>What's our  Captain's Email</h3>
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
      <p className='text-center mt-2'>Already have a Account? <Link to='/captain-login' className='text-blue-700'>Login here</Link></p>
      
     </div>

    <div className='w-full max-w-sm '>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span>  and <span className='underline'> Terms of Service apply.</span> </p>
    </div>
  </div>

  </div>
  )
}

export default CaptainSignup