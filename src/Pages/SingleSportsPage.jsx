import React, { useEffect } from 'react'
import CricketMatchesSp from '../components/CricketMatchesSp'
import Sidebar from '../components/Sidebar'
import { useGetseiresMatchsListMutation } from '../services/jsonServerApi';
import { useParams } from 'react-router-dom';
import moment from 'moment';

export default function SingleSportsPage() {
    const [getMatches, { data }] = useGetseiresMatchsListMutation();
    const params= useParams()
    useEffect(() => {
        console.log({params})
      getMatches({
        limit: 50,
        pageno: 1,
        series_id: 0,
        sport_id: params?.id,
        type: "home",
      });
    }, [params]);
    useEffect(()=>{
console.log({first:data})
    },[data])
    const  dateConvertor=(passedDate)=>{
        return new Date( passedDate*1000)
        }
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
        <div className="container-fluid pt-1">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 inplay_matches_box">
      
         
          {/* Cricket */}
          <div className="card" style={{ borderRadius: '2px', boxSizing: 'border-box' }}>
            <div>
            
              <div className="mt-0 tab-content">
              {data?.data?.UpCommingMatches?.map((i,index)=>(
                <div key={index} className='mt-0 tab-content'>
                      <ul className="nav-tabs nav" role="tablist">
             
             <li className="mx-2 my-auto nav-item ng-star-inserted">
             <span className={`sports-icon sports${params?.id}`}></span>   <span>{i?.seriesName}</span>
             </li>
           </ul>
      <div key={index}  className="game-box" id="1.227411685">
      <div className="game-box-left" tabIndex="0">
        <app-scorebox className="scorebox_size_same_as_odd">
          <div className="status-wrapper">
            <span className="comingup-time">{ ( moment( dateConvertor(i?.start_date)?.toLocaleString())?.calendar())}</span>
          </div>
        </app-scorebox>
        <div className="vertical-divider"></div>
      {i?.name}
      </div>
      <div className="game-box-right" data-check="2">
        {i?.runner_json?.map((i,index)=>(
         
         <>
         <app-oddsbutton key={index} className="box special-a gradient-special-a">
        <div className="box special-a gradient-special-a lesser_odds_opacity">
      <div className="box d-md-flex d-none d-sm-none odds-box special-box-border">
        <span > {i?.ex?.availableToBack?.[0]?.price}</span>
        <div className="amount-below"><p className="transparent">{i?.ex?.availableToBack?.[0]?.size}</p></div>
        {/* Add any child components or content here */}
      </div>
      <div className="box box_without_size d-flex d-md-none d-sm-flex small_box_col special-box-border">
        
        
        {/* Add any child components or content here */}
      </div>
    </div>
        </app-oddsbutton>
        <app-oddsbutton key={index} className="box special-b gradient-special-b">
        <div className="box special-b gradient-special-b lesser_odds_opacity">
      <div className="box d-md-flex d-none d-sm-none odds-box special-box-border">
        <span >{i?.ex?.availableToLay?.[0]?.price}</span>
        <div className="amount-below"><p className="transparent">{i?.ex?.availableToLay?.[0]?.size} </p></div>
        {/* Add any child components or content here */}
      </div>
      <div className="box box_without_size d-flex d-md-none d-sm-flex small_box_col special-box-border">
        
        
        {/* Add any child components or content here */}
      </div>
    </div>
        </app-oddsbutton>
         </>
        ))}
        
        <app-oddsbutton className="box special-b gradient-special-b margin_between_odds">
          {/* Odds buttons content */}
        </app-oddsbutton>
        <app-oddsbutton className="box special-a gradient-special-a lesser_odds_opacity">
          {/* Odds buttons content */}
        </app-oddsbutton>
        <app-oddsbutton className="box special-b gradient-special-b lesser_odds_opacity margin_between_odds">
          {/* Odds buttons content */}
        </app-oddsbutton>
        <app-oddsbutton className="box special-a gradient-special-a">
          {/* Odds buttons content */}
        </app-oddsbutton>
        <app-oddsbutton className="box special-b gradient-special-b margin_between_odds">
          {/* Odds buttons content */}
        </app-oddsbutton>
        <div className="info-wrapper">
          <div className="box1 special-c">
            <span className="info-icon" style={{ color: '#75A7F2', fontSize: '20px' }}>
              <svg
                className="svg-inline--fa fa-info-circle fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fa"
                data-icon="info-circle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                {/* SVG path */}
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
    ))}
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
