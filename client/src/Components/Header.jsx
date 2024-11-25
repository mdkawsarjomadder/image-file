import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react"
import { AppContext } from '../Context/AppContaxt'
import { useNavigate } from 'react-router-dom'

const Header = () => {
const {user, setShowLogin} = useContext(AppContext)
const navigate = useNavigate();
const onClickHandle = () =>{ 
if(user){
      navigate('/result');
}
else{
setShowLogin(true);
}
}      
return (
<motion.div className='flex flex-col justify-center items-center text-center py-20'
initial={{opacity:0.2, y:100}}
transition={{duration:1}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
>

<motion.div className=" text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
initial={{opacity:0, y:-20}}
animate={{opacity:1, y:0}}
transition={{delay:0.2, duration:1}}
>
<p className="">Best Text To image generator.</p>
<img src={assets.star_icon} alt="" className="" />
</motion.div>
<motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
Ture text to <span className='text-blue-500'
inlist={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.4, duration:2}}
>image</span>, in seconds.</motion.h1>

<motion.p className="text-center max-w-xl mx-auto mt-5"
initial={{opacity:0, y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.6, duration:2}}
>
Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Ut perspiciatis temporibus sapiente ad, officia molestias?
</motion.p>

<motion.button onClick={onClickHandle} 
className=" flex items-center mt-8 px-12 py-2.5 gap-2 
sm:text-lg text-white bg-black w-auto rounded-full hover:text-blue-200"
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:{duration:0.5},opacity:{delay:0.8}, duration:1}}
>Bachelor Image
<img className='h-6' src={assets.star_group} alt="" />
</motion.button>
<motion.div 
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1, duration:1}}
className="flex flex-wrap justify-center mt-16 gap-3.5">
{Array(6).fill('').map((item, index) => (

<motion.img
      whileHover={{scale:0.01, duration:0.2}}
src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1}

key={index} alt="" 
className="cursor-pointer max-sm:w-10 rounded  hover:scale-105 duration-300 transition-all " width={70} />
))}
</motion.div>
<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1.2, duration:0.8}}
className="mt-2 text-neutral-600">Generated images from bachelor.</motion.p>
</motion.div>
)
}

export default Header