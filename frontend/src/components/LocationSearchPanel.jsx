import React from 'react'

const LocationSearchPanel = (props) => {
  

  // Sample array for location
  const locations = [
    "21B Regal treasure Near Ayodhya Bypass Narela Shankari , Bhopal",
    "28B Regal treasure Near Ayodhya Bypass Narela Shankari , Bhopal",
    "34A Regal treasure Near Ayodhya Bypass Narela Shankari , Bhopal",
    "Minal mall Near Ayodhya Bypass Narela Shankari , Bhopal"

  ]
  return (
    <div>
      {/* this is just a sample data */}

      {
        locations.map(function(elem , index){
          return <div key={index} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex border-2 p-3 border-gray-50 active:border-black rounded-xl gap-4 my-2 items-center justify-start'>
          <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center  rounded-full'><i className="ri-map-pin-fill "></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel