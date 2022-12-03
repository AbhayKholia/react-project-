import React from 'react'
import FeatureProduct from "./components/FeatureProduct"
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Slider from './slider'

const Home = () => {
    const data= {
    name:"Abhay Store"
  }
  const data2 = {
    info:"A store is a physical or online place where consumers can purchase merchandise Stores often target a particular customer need and provide a product to fulfill that need. Typically, stores do not produce the goods they sell. Instead, they source productsfrom manufacturers or wholesale stores."
  }

  return (
  <>
  <HeroSection  mydata = {data} myinfo = {data2}/>
  <FeatureProduct/>
  <Slider/>
   <Services/>
   <Trusted/>
  </>
  )
}
 
export default Home
