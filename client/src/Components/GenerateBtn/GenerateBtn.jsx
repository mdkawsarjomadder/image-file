import React from 'react'
import {assets} from '../../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='pb-16 text-center'>
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-500 py-6 md:py-16">See the magic.try now</h1>
      <div className="flex items-center justify-center">
            <button className=" inline-flex items-center gap-2 px-12 py-3 w-auto bg-black text-white rounded-lg transition-all duration-500 hover:scale-105">Generate Images
                 <img src={assets.star_group} alt="" className='h-6'/>
            </button>
      </div>
    </div>
  )
}

export default GenerateBtn