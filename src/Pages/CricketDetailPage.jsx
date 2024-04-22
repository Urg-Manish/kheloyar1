import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetCricketDetailsMutation,
  useGetMatchDetailsQuery,
} from "../services/jsonServerApi";
import Sidebar from "../components/Sidebar";
import moment from "moment";
import { ImInfo } from "react-icons/im";
import { FcInfo } from "react-icons/fc";

export default function CricketDetailPage() {
  const params = useParams();
  // let id = req?.params
  const [getDetails, { data }] = useGetCricketDetailsMutation();
  const { data: mdata } = useGetMatchDetailsQuery(params?.id);
  useEffect(() => {
    getDetails({
      sport_id: "4",
      match_id: params?.id,
    });
  }, [params?.id]);
  useEffect(() => {
    console.log({ mdata, data });
  }, [mdata, data]);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Sidebar />
            <div className="col">
              <div className="row">
                <div className="eventm-header side-content">
                    <Link to={'/'}>

                  <span className="market-head market-head1" tabIndex="0">
                    Home
                  </span>
                    </Link>
                  <span className="v-div mx-2">&gt;</span>
                  <Link to={'/sports/sportsbyid/4'}>

                  <span className="market-head market-head1" tabIndex="0">
                    Cricket
                  </span>
                  </Link>
                  {/* <span className="v-div mx-2">&gt;</span>
                  <span className="market-head market-head1" tabIndex="0">
                    Indian Premier League
                  </span> */}
                  <span className="v-div mx-2">&gt;</span>
                  <span className="market-head">
                    Lucknow Super Giants v Chennai Super Kings
                  </span>
                  {/* <span className="v-div mx-2">&gt;</span>
                  <span className="market-head">Match Odds</span> */}
                </div>
                <div className="col-sm-12 side-content">
                  <div className="mt-0 tab-content text-white">
                    <ul className="nav-tabs nav" role="tablist">
                      <li className="mx-2 my-auto nav-item ng-star-inserted">
                        <FcInfo /> <span>Match odds</span>
                      </li>
                    </ul>

                    {data?.data?.odds?.runner_json?.map((i, index) => (
                      <div key={"index"} className="game-box" id="1.227411685">
                        <div className="game-box-left" tabIndex="0">
                          <app-scorebox className="scorebox_size_same_as_odd">
                            <div className="status-wrapper">
                              <span className="comingup-time">
                                {" "}
                                <FcInfo />{" "}
                              </span>
                            </div>
                          </app-scorebox>
                          <div className="vertical-divider"></div>
                          <Link to={`/sports/cricket/${"i?.match_id"}`}>
                            {i?.selectionName}
                          </Link>
                        </div>
                        <div className="game-box-right" data-check="2">
                          <>
                            {i?.ex?.availableToBack?.map((i) => (
                              <app-oddsbutton
                                key={index}
                                className="box special-a gradient-special-a"
                              >
                                <div className="box special-a gradient-special-a lesser_odds_opacity">
                                  <div className="box d-md-flex d-none d-sm-none odds-box special-box-border">
                                    <span> {i?.price}</span>
                                    <div className="amount-below">
                                      <p className="transparent mb-0">{i?.size}</p>
                                    </div>
                                    {/* Add any child components or content here */}
                                  </div>
                                  <div className="box box_without_size d-flex d-md-none d-sm-flex small_box_col special-box-border">
                                    {/* Add any child components or content here */}
                                  </div>
                                </div>
                              </app-oddsbutton>
                            ))}
                            {i?.ex?.availableToLay?.map((i) => (
                              <app-oddsbutton
                                key={index}
                                className="box special-a gradient-special-b"
                              >
                                <div className="box special-b gradient-special-b lesser_odds_opacity">
                                  <div className="box d-md-flex d-none d-sm-none odds-box special-box-border">
                                    <span> {i?.price}</span>
                                    <div className="amount-below">
                                      <p className="transparent mb-0">{i?.size}</p>
                                    </div>
                                    {/* Add any child components or content here */}
                                  </div>
                                  <div className="box box_without_size d-flex d-md-none d-sm-flex small_box_col special-box-border">
                                    {/* Add any child components or content here */}
                                  </div>
                                </div>
                              </app-oddsbutton>
                            ))}
                          </>

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
                              <span
                                className="info-icon"
                                style={{ color: "#75A7F2", fontSize: "20px" }}
                              >
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
                    ))}
                  </div>
                  {/* Fancy */}
                  <div className="mt-0 tab-content text-white">
                   {mdata?.data?.length>0&& <ul className="nav-tabs nav" role="tablist">
                      <li className="mx-2 my-auto nav-item ng-star-inserted">
                        <FcInfo /> <span>Fancy Market</span>
                      </li>
                    </ul>}

                    {mdata?.data?.map((i, index) => (
                      <div key={"index"} className="game-box" id="1.227411685">
                        <div className="game-box-left" tabIndex="0">
                          <app-scorebox className="scorebox_size_same_as_odd">
                            <div className="status-wrapper">
                              <span className="comingup-time">
                                {" "}
                                {/* <FcInfo />{" "} */}
                              </span>
                            </div>
                          </app-scorebox>
                          <div className="vertical-divider"></div>
                          <Link to={`/sports/cricket/${"i?.match_id"}`}>
                            {i?.RunnerName}
                          </Link>
                        </div>
                        <div className="game-box-right" data-check="2">
                          <>
                            <app-oddsbutton className="box special-a gradient-special-a">
                              <div className="box special-a gradient-special-a lesser_odds_opacity">
                                <div className="box d-md-flex d-none d-sm-none odds-box special-box-border">
                                  <span> {i?.LayPrice1}</span>
                                  <div className="amount-below">
                                    <p className="transparent mb-0">
                                      {i?.LayPrice1}
                                    </p>
                                  </div>
                                  {/* Add any child components or content here */}
                                </div>
                              </div>
                            </app-oddsbutton>

                            <app-oddsbutton
                              key={index}
                              className="box special-a gradient-special-b"
                            >
                              <div className="box special-b gradient-special-b lesser_odds_opacity">
                                <div className="box d-md-flex d-none d-sm-none odds-box special-box-border">
                                  <span> {i?.BackPrice1}</span>
                                  <div className="amount-below">
                                    <p className="transparent mb-0">
                                      {i?.BackSize1}
                                    </p>
                                  </div>
                                  {/* Add any child components or content here */}
                                </div>
                                <div className="box box_without_size d-flex d-md-none d-sm-flex small_box_col special-box-border">
                                  {/* Add any child components or content here */}
                                </div>
                              </div>
                            </app-oddsbutton>
                                <div className="text-nowrap ps-2">
                                <div
                                  style={{ fontSize: "9px", fontWeight: "600" }}
                                >
                                 maxStack : {i?.maxStack} ₹
                                </div>
                                <div
                                  style={{ fontSize: "9px", fontWeight: "600" }}
                                >
                                maxProfit :{i?.maxProfit} ₹
                                </div>
                                </div>
                          </>

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
                              <span
                                className="info-icon"
                                style={{ color: "#75A7F2", fontSize: "20px" }}
                              >
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <NavBar/> */}
      </div>
    </div>
  );
}
