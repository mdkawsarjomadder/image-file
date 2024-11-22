import React, { useContext } from 'react'
import { plans } from '../assets/assets'
import { assets } from '../assets/assets'
import {AppContext} from '../Context/AppContaxt'


const BuyCredit = () => {
 
  const {user} = useContext(AppContext)

return (
  <div className=' '>
    <div className="min-h-[80vh] text-center pt-14 mt-12">
      <button className="uppercase text-zinc-500 font-semibold  px-10 py-3 border border-gray-500 rounded-full mb-6">our plans</button>
      <h1 className="text-3xl text-center font-semibold mb-6 sm:mb-6">Choose The plan</h1>
    
    <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) =>(
          <div className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-500 hover:scale-105 transition-all duration-500" 
          key={index}>
            <img width={40} src={assets.lock_icon} alt="" />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
               <span className=" text-3xl font-medium hover:text-gray-700">${item.price}</span>
               /{item.credits} credits </p>
               <button className="w-full mt-6 mb-2 text-sm py-2.5 min-w-52 bg-gray-800  rounded-md text-white ">
                 { user ? 'Purchase' : 'Get Started'}
                </button>
          </div>

      
        ))}

    </div>
    
    </div>

    

  </div>
)
}

export default BuyCredit