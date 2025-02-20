import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import{CaptainDataContext} from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

      const navigate = useNavigate();


      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})
      const[vehicleColor, setVehicleColor] = useState('');
      const[vehiclePlate, setVehiclePlate] = useState('');
      const[vehicleCapacity, setVehicleCapacity] = useState('');
      const[vehicleType, setVehicleType] = useState('');
    

     const {captain, setCaptain} = React.useContext(CaptainDataContext)


      const sumbmitHandler = async(e) => {
        e.preventDefault();
      
        const captainData = {
          email: email,
          password: password,
          fullname: {
            firstname: firstName,
            lastname: lastName,
          },
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType,
          },
        };
      
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if(response.status === 201){
          const data = response.data;
          setCaptain(data.captain);
          localStorage.setItem('token', data.token);
          navigate('/captain-home');
        }
      
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
      };
  return (
    <div>
    <div className='px-4 py-2 flex flex-col items-center h-screen justify-between'>
    <div className='w-full max-w-sm'>
    <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
          
          className='bg-[#eeeeee] mb-7 rounded px- py-2 border w-1/2 text-lg placeholder:text-base' 
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
        
        <h3 className='text-xl mb-3'>Vehicle Information</h3>
        <div className='flex gap-5'>
          <input 
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
            type="text" 
            placeholder='Vehicle Color' 
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          <input 
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
            type="text" 
            placeholder='Vehicle Plate' 
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />
        </div>
        <div className='flex gap-5'>
          <input 
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
            type="number" 
            placeholder='Vehicle Capacity' 
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />
          <select 
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
        </div>
        
        <button className="bg-black text-white font-semibold font-xl w-full py-2 block text-center rounded-lg text-lg">
          Create Captain Account
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

  
};



export default CaptainSignup