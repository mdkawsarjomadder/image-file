import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Result = () => {
 
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded ] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const onSubmitHandler = async => {

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col justify-center items-center min-h-[90vh]'>
    <div>
      <div className=" relative">
        <img src={image} alt="" className=" max-w-sm rounded" />
        <span className= {`absolute bottom-0 left-0 h-1 bg-blue-500
        ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}
         `} />
      </div>

      <p className={ !loading ? 'hidden' : ''  }>Loading.....</p>
    </div>

      
     {! isImageLoaded && 
    <div className="flex w-full max-w-xl bg-neutral-500 text-white rounded-full text-sm p-0.5">
       <input onChange={e => setInput(e.target.value)} value={input}
         
       type="text" placeholder='Describe what you want to generate' 
       className=' flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' />
       <button className=" bg-zinc-800 px-10 sm:px-16 rounded-full py-3" type='submit'>Generate</button>
    </div>
     }
     {isImageLoaded && 
    <div className="flex flex-wrap gap-2 justify-center text-white text-sm p-0.5 mt-10 rounded-full">
      <p onClick={()=>{setIsImageLoaded(false)}}
      className=" bg-transparent border border-zinc-800 hover:border-sky-400 text-black px-8 py-3 rounded-full cursor-pointer">Generate Another</p>
      <a href={image} download className=' bg-zinc-800  px-10 py-3 rounded-full cursor-pointer border hover:border-sky-500'>Download</a>
    </div>
    }
    
    </form>
  )
}

export default Result