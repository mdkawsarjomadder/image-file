import React from 'react'
import { assets, testimonialsData } from '../../assets/assets'
import { motion } from 'motion/react'

const Testmonials = () => {
return (
<motion.div 
initial={{opacity:0.3, y:100}}
transition={{duration:1}}
whileInView={{opacity:1, y:1}}
viewport={{once:true}}
className='flex flex-col items-center justify-center my-20 py-12'>
<h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer testmonials</h1>
<p className="text-gray-500 mb-12">What Our Users Are Saying</p>

<div className="flex flex-wrap gap-6">
{testimonialsData.map((testimonial, index) =>(
      <div key={index} className="bg-white/20 p-12 rounded-lg shadow-md shadow-gray-300 order w-80 m-auto cursor-pointer hover:scale-[1.02] ">
      <div className=" flex flex-col items-center">
            <img src={testimonial.image} alt="" className=' rounded-full w-14'  />
            <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 ">{testimonial.role}</p>
            <div className="flex mb-4">
            {Array(testimonial.stars).fill().map((item, index)=>(
                  <img src={assets.rating_star} alt='' className='' key={index} />
            ))}
            </div>
            <p className="text-sm text-center text-gray-600">{testimonial.text}</p>
            {/* <h1 className="">{testimonial.stars}</h1> */}
            
      </div>
      </div>


))}

</div>

</motion.div>
)
}

export default Testmonials