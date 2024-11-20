import React from 'react'
import {assets} from '../../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
       <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create Al Images</h1>
       <p className="text-gray-500 mb-8">Ture Your Imagination into visual</p>

       <div className="flex flex-col items-center gap-5 md:gap-14 md:flex-row">
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
            <div className="">
                  <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing the AI-Powered text to  images bachelor</h2>
                       <p className="text-gray-600 mb-4">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptatibus
                         explicabo adipisci architecto necessitatibus accusantium dolorem sit. Consequatur,
                         Lorem ipsum dolor sit amet. praesentium illum Lorem ipsum dolor sit amet, consectetur.
                       </p>
                       <p className="text-gray-600">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptatibus
                         explicabo adipisci architecto necessitatibus accusantium dolorem sit. Consequatur,
                         Lorem ipsum dolor sit amet. praesentium illum Lorem ipsum dolor sit amet, consectetur.
                       </p>

            </div>
       </div>
    </div>
  )
}

export default Description