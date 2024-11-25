import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContaxt';
import { motion } from 'motion/react';

const Login = () => {
const [state, setStase] = useState('Login');
const {setShowLogin} = useContext(AppContext)


useEffect(() => {
document.body.style.overflow = 'hidden';
return() =>{
document.body.style.overflow = 'unset';
}
},[])

return (
<motion.div
initial={{opacity:0.2, y:50}}
transition={{duration:0.3}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
className=' fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30'>
<form className=" relative bg-white p-10 rounded-xl text-slate-500">
<h1 className="text-center text-2xl text-neutral-700 font-medium ">{state}</h1>
<p className=" text-sm">Welcome Back! please sing in to continue</p>

{ state !== 'Login' && <div className="flex items-center border px-6 py-2 gap-2 rounded-full mt-5">
      <img src={assets.profile_icon} alt="" width={30} />
      <input type="text" className='outline-none text-sm' placeholder='Full Name' required/>
</div>}
<div className="flex items-center border px-6 py-2 gap-2 rounded-full mt-4">
      <img src={assets.email_icon} alt="" width={20} />
      <input type="email" className='outline-none text-sm' placeholder='Email Id' required/>
</div>
<div className="flex items-center border px-6 py-2 gap-2 rounded-full mt-4">
      <img src={assets.lock_icon} alt="" width={20} />
      <input type="password" className='outline-none text-sm' placeholder='Password' required/>
</div>
<p className="text-sm text-blue-500 my-4 cursor-pointer">
      Forget Password
</p>
<button className=" bg-blue-600 text-white hover:text-blue-200 w-full py-2 rounded-full">
      { state === 'Login' ? 'login' : 'Create Account'}
</button>

{ state === 'Login' ? <p className="mt-5 text-center">
      Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>setStase('Sign Up')} >Sign Up</span>
</p> :
<p className="mt-5 text-center">
      Already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>setStase('Login')} >Login</span>
</p>
}
<img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className=" absolute top-5 right-5 cursor-pointer" />
</form>

</motion.div>
)
}

export default Login