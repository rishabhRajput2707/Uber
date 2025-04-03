import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '>
                 <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2 '>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='p-2'>
                <div className='flex items-center justify-between'>
                    <img className='h-[10%] w-[30%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Zf5_MJBYbsWV5-3cOwpc2Pl9wy9jjkMZbA&s" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Rishabh</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex  flex-col justify-center items-center'>
                    <div className='w-full'>



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
                </div>
                <button onClick={() => {
                    props.setVehicleFound(true);
                    props.setConfirmRidePanel(false);
                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>
                    Make a Payment
                </button>
            </div>
        </div>
    )
}

export default Riding