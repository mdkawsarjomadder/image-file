import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
return (
<div className='flex flex-col justify-center items-center text-center py-20'>
      <div className=" text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
      <p className="">Best Text To image generator.</p>
      <img src={assets.star_icon} alt="" className="" />
      </div>
      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
      Ture text to <span className='text-blue-500'>image</span>, in seconds.</h1>

      <p className="text-center max-w-xl mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ut perspiciatis temporibus sapiente ad, officia molestias?
      </p>
      <button className=" flex items-center mt-8 px-12 py-2.5 gap-2 
      sm:text-lg text-white bg-black w-auto rounded-full hover:text-blue-200">Bachelor Image
            <img className='h-6' src={assets.star_group} alt="" />
      </button>
      <div className="flex flex-wrap justify-center mt-16 gap-3.5">
      {Array(6).fill('').map((item, index) => (

            <img src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1}
            
            key={index} alt="" 
            className="cursor-pointer max-sm:w-10 rounded  hover:scale-105 duration-300 transition-all " width={70} />
      ))}
      </div>
      <p className="mt-2 text-neutral-600">Generated images from bachelor.</p>
</div>
)
}

export default Header