import React, { useEffect } from "react";
import { useGetseiresMatchsListMutation } from "../services/jsonServerApi";
import moment from "moment";
import { Link } from "react-router-dom";

export default function CricketMatchesSp({sport_id}) {
  const [getMatches, { data }] = useGetseiresMatchsListMutation();
  useEffect(() => {
    getMatches({
      limit: 20,
      pageno: 1,
      series_id: 0,
      sport_id: sport_id,
      type: "home",
    });
  }, []);
  {console.log(data)}
 const  dateConvertor=(passedDate)=>{
  return new Date( passedDate*1000)
  }
  return (
    <>
    {/* Inplay Matches */}
    {data?.data?.InplayMatches?.map((i,index)=>(
      <Link key={index} to={'/sports/cricket/'+i?.match_id}>
      <div key={index}  className="game-box" id="1.227411685">
      <div className="game-box-left" tabIndex="0">
        <app-scorebox className="scorebox_size_same_as_odd">
        <div className="category-wrapper ng-star-inserted"><span className="category">In Play</span></div>
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
    </Link>
    ))}
    {/* Upcoming matches */}
    {data?.data?.UpCommingMatches?.map((i,index)=>(
            <Link key={index} to={'/sports/cricket/'+i?.match_id}>

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
    </Link>
    ))}
     
    </>
  )
 
}
