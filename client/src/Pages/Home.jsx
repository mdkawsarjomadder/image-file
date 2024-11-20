import React from 'react'
import Header from '../Components/Header'
import Steps from '../Components/Steps/Steps'
import Description from '../Components/Description/Description'
import Testmonials from '../Components/Testmonials/Testmonials'
import GenerateBtn from '../Components/GenerateBtn/GenerateBtn'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testmonials />
      <GenerateBtn />
      {/* <Footer /> */}
    </div>
  )
}

export default Home