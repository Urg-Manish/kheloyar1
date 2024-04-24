
import './App.css'
import CricketDetailPage from './Pages/CricketDetailPage'
import HomePage from './Pages/HomePage'
import SingleSportsPage from './Pages/SingleSportsPage'
import SoccerDetailPage from './Pages/SoccerDetailPage'
import SportsPage from './Pages/SportsPage'
import AllCasino from './components/AllCasino'
import Endorsment from './components/Endorsment'
import Esports from './components/Esports'
import Footer from './components/Footer'
import IndianCasion from './components/IndianCasion'
import { MainSignup } from './components/MainSignUp'
import NavBar from './components/NavBar'
import Payments from './components/Payments'
import PopularGames from './components/PopularGames'
import Providers from './components/Providers'
import Signup from './components/Signup'
import Slider from './components/Slider'
import Sports from './components/Sports'
import AllSports from './Pages//AllSports';

import RouletteGame from './Pages/RouletteGame'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStore } from './zustrore'
import Cookies from 'universal-cookie'
import { useEffect } from 'react'

function App() {
const{count,login,setLogin,setToken}= useStore()
const cookies = new Cookies();
useEffect(()=>{

  if(cookies.get('token')!==null){ setLogin(true)
    setToken(cookies.get('token'))
  }
},[])
console.log({count},{login})
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} /> {/* 👈 Renders at /app/ */}
        <Route path='/signup' element={<MainSignup/>}/>
        <Route path='/sports' element={<SportsPage/>}/>
        <Route path='/sports/sportsbyid/:id' element={<SingleSportsPage/>}/>
<Route path='/sports/4/:id' element={<CricketDetailPage/>}/>
<Route path='/sports/1/:id' element={<SoccerDetailPage sport_id={1}/>}/>
<Route path='/sports/2/:id' element={<SoccerDetailPage sport_id={2}/>}/>

        <Route path='/all-sports' element={<AllSports/>}/>
        <Route path='casinos/games/:type' element={<RouletteGame/>}/>

      </Routes>
    </BrowserRouter>
   
   {/* <Signup/> */}
   {/* <MainSignup/> */}
   </>
  )
}

export default App
