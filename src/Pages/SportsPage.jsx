import React from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import CricketMatchesSp from '../components/CricketMatchesSp'
import { Link } from 'react-router-dom'

export default function SportsPage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">

        <Sidebar/>
        <div className="col">
        <div className="row">
      <div className="col-sm-12 side-content">
        <>
          <div className="alet alert-darkmode bg-" style={{ fontFamily: 'var(--font_family_global)' }}>
            <marquee onMouseOver={() => this.stop()} onMouseOut={() => this.start()} className="pt-1">
              🔥IPL BUMPER OFFER GET 3% CASH BONUS ON EVERY DEPOSIT🔥...👉👉PLEASE CHANGE YOUR PASSWORD FREQUENTLY FROM "CHANGE OPTION" IN THE MENU👈👈
            </marquee>
          </div>
        </>
        <Slider/>
        <div className="container-fluid pt-1">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 inplay_matches_box">
          <div className="card" style={{ borderRadius: '2px', boxSizing: 'border-box' }}>
            <div>
              <ul className="nav-tabs nav" role="tablist">
                <li className="mx-3 my-auto" style={{ width: '2.5%' }}>
                  <img className="horse-image"  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/horseraci.gif" alt="horse" />
                </li>
                <li className="mx-2 my-auto nav-item ng-star-inserted">
                  <a href="" className="race-region px-1 " aria-labelledby="FR" id="ngb-nav-2" role="tab" aria-selected="false" aria-disabled="false">
                    <span className="flag_logo FR"></span>
                    <span className="city ml-1">FR</span>
                  </a>
                </li>
              </ul>
              <div className="mt-0 tab-content">
                {/* Add your content here if any */}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="card" style={{ borderRadius: '2px', boxSizing: 'border-box' }}>
            <div>
              <ul className="nav-tabs nav" role="tablist">
                <li className="mx-3 my-auto" style={{ width: '2.5%' }}>
                  <img className="horse-image"  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/horseraci.gif" alt="horse" />
                </li>
                <li className="mx-2 my-auto nav-item ng-star-inserted">
                  <a href="" className="race-region px-1 " aria-labelledby="AU" id="ngb-nav-2" role="tab" aria-selected="false" aria-disabled="false">
                    <span className="flag_logo AU"></span>
                    <span className="city ml-1">AU</span>
                  </a>
                </li>
              </ul>
              <div className="mt-0 tab-content">
                {/* Add your content here if any */}
              </div>
            </div>
          </div>
          {/* Cricket */}
          <div className="card" style={{ borderRadius: '2px', boxSizing: 'border-box' }}>
            <div>
              <ul className="nav-tabs nav" role="tablist">
             <Link  to='/sports/sportsbyid/4'>
             
                <li className="mx-2 my-auto nav-item ng-star-inserted">
                <span className="sports-icon sports4"></span>   <span>Cricket</span>
                </li>
             </Link>
              </ul>
              <div className="mt-0 tab-content">
                <CricketMatchesSp sport_id={4}/>
                {/* Add your content here if any */}
              </div>
            </div>
          </div>
          {/* Soccer */}
          <div className="card" style={{ borderRadius: '2px', boxSizing: 'border-box' }}>
            <div>
              <ul className="nav-tabs nav" role="tablist">
             <Link to='/sports/sportsbyid/1'
             >

                <li className="mx-2 my-auto nav-item ng-star-inserted">
                <span className="sports-icon sports1"></span>   <span>Soccer</span>
                </li>
             </Link>
              </ul>
              <div className="mt-0 tab-content">
                <CricketMatchesSp sport_id={1}/>
                {/* Add your content here if any */}
              </div>
            </div>
          </div>
          {/* Tennis */}
          <div className="card" style={{ borderRadius: '2px', boxSizing: 'border-box' }}>
            <div>
              <ul className="nav-tabs nav" role="tablist">
             
                <li className="mx-2 my-auto nav-item ng-star-inserted">
                <span className="sports-icon sports2"></span>   <span>Tennis</span>
                </li>
              </ul>
              <div className="mt-0 tab-content">
                <CricketMatchesSp sport_id={2}/>
                {/* Add your content here if any */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      
        </div>
          </div>
        </div>
      </div>
      {/* <NavBar/> */}
       
   
    </div>
        </div>
   
  )
}
