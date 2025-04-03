import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState()
  const submitHandler = (e)=>{
    e.preventDefault()
  }
  return (
    <div >
      <h5 className='p-1 text-center w-[93%] absolute top-0  text-center ' onClick={() => {
        props.setRidePopUpPanel(false)
      }}>
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i> </h5>
      <h3 className='text-2xl font-semibold mb-5'>confirm this Ride to Start</h3>
      <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg mt-4'>
        <div className='flex items-center gap-3 '>
          <img className='h-12 w-12 object-cover  rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUueKMdnTNO_ItCNq3y606v5XXTSbTibol2Q&s" alt="" />
          <h2 className='text-lg font-medium '>Harshita Patel</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>
      <div className='flex  flex-col justify-center items-center'>
        <div className='w-full'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562//11-A</h3>
              <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, Bhopal</p>
            </div>
          </div>


          <div className='flex items-center gap-5 p-3 border-b-2' >
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562//11-A</h3>
              <p className='text-sm text-gray-600 -mt-1'>Kankariya Talab, Bhopal</p>
            </div>
          </div>


          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm text-gray-600 -mt-1'> Cash Cash</p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <input value={otp} onChange={(e)=> setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP'/>
            <Link to='/captain-riding' className='w-full mt-5 flex justify-center bg-green-600 text-lg text-white font-semibold p-3 rounded-lg'>
              Confirm
            </Link>

            <button onClick={() => {
              props.setConfirmRidePopUpPanel(false)
              props.setRidePopUpPanel(false)

            }} className='w-full mt-2 bg-red-600 text-white font-semibold text-lg p-3 rounded-lg'>
              Cancel
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ConfirmRidePopUp