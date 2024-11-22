import React from 'react'
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'
import Result from './Pages/Result'
import BuyCredit from './Pages/BuyCredit'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
return (
  <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>

        <Navbar />     
      <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/result' element={<Result />} />
      <Route path='/buy' element={<BuyCredit />} />
    </Routes>
    <Footer />
    
    
    
  </div>
)
}

export default App