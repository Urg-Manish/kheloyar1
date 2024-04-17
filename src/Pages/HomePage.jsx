import React from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Providers from '../components/Providers'
import PopularGames from '../components/PopularGames'
import IndianCasion from '../components/IndianCasion'
import AllCasino from '../components/AllCasino'
import Esports from '../components/Esports'
import Sports from '../components/Sports'
import Payments from '../components/Payments'
import Endorsment from '../components/Endorsment'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
 <NavBar/>
   <Slider/>
   <Providers/>
   <PopularGames/>
   <IndianCasion/>
   <AllCasino/>
   <Esports/>
   <Sports/>
   <Payments/>
   <hr className='my-3' />
   <Endorsment/>
   <Footer/> 
    </>
  )
}
