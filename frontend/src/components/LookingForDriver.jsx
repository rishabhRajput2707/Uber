import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0  text-center ' onClick={() => {
                props.setVehicleFound(false)
            }}>
                <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i> </h5>
            <h3 className='text-2xl font-semibold mb-5'>Looking For A Driver</h3>

            <div className='flex  flex-col justify-center items-center'>
                <img className='h-[10%] w-[30%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Zf5_MJBYbsWV5-3cOwpc2Pl9wy9jjkMZbA&s" alt="" />
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

            </div>
        </div>
    )
}

export default LookingForDriver