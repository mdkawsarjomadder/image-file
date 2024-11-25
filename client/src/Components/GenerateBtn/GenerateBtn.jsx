import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContaxt'

const GenerateBtn = () => {
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
  <motion.div
  initial={{opacity:0.3, y:100}}
  transition={{duration:1}}
  whileInView={{opacity:1, y:1}}
  viewport={{once:true}}
  className='pb-16 text-center'>
    <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-500 py-6 md:py-16">See the magic.try now</h1>
    <div className="flex items-center justify-center">
          <button onClick={onClickHandle} className=" inline-flex items-center gap-2 px-12 py-3 w-auto bg-black text-white rounded-lg transition-all duration-500 hover:scale-105">Generate Images
                <img  src={assets.star_group} alt="" className='h-6'/>
          </button>
    </div>
  </motion.div>
)
}

export default GenerateBtn