import React from "react";
import { Link } from "react-router-dom";
import AllSportsList from "../components/AllSportsList";
import Topbar from "../components/Topbar";
export default function AllSports() {
  return (
    <>
      <main>
        <Topbar />
        <section className="game-body">
          <div className="row mx-0">
            <div className="col-md-3 ps-0 pe-5">
              <AllSportsList />
            </div>
            <div className="col-md-6 pe-0">
              <div className="middle-section">
                <div className="icons_main">
                  <div className="icons">
                    <div className="icons_list selection">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenu_1_icon"
                          style={{
                            backgroundImage:
                              'url("https://agsportsbookprod.bollytech.com/aggoldmarbleprod/live_selected.7e81e40db45fc9dd.svg")',
                          }}
                        ></div>
                        <div className="nameAlign">Live Now</div>
                      </div>
                    </div>
                    <div className="icons_list un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenu_3_icon"
                          style={{
                            backgroundImage:
                              'url("https://agsportsbookprod.bollytech.com/aggoldmarbleprod/favoritesIcon_unselected.bc355e0a80b1d4bc.svg")',
                          }}
                        ></div>
                        <div className="nameAlign">Favourites</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/228174499_cricket_unselect.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Cricket</div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(5)</div>
                        </div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1652959569_soccer_unselect.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Soccer</div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(2)</div>
                        </div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/964851859_tennis_unselect.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Tennis</div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(6)</div>
                        </div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1887449695_table_tennis_unselect.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Table Tennis</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1733700526_american_football_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">American Football</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1075152761_aussie_rules_unselect.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Aussie Rules</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/353893227_baseball_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Baseball</div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(8)</div>
                        </div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/161567484_basketball_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Basketball</div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(1)</div>
                        </div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1940745524_darts_unselect.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Darts</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1255434690_CS_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">ESport Counter-Strike</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/802690035_dota_2_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">ESport Dota</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg"></div>
                        <div className="nameAlign">
                          ESport League of Legends
                        </div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/419982100_field_hockey_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Field hockey</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/679747151_futsal_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Futsal</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/3968385_handball_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Handball</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/494042141_ice_hockey_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Ice Hockey</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/2045466965_rugby_unselect.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Rugby</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1474880101_snooker_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Snooker</div>
                      </div>
                    </div>
                    <div className="icons_list icon_desktop un-selection1">
                      <div className="nameAlign1">
                        <div className="sportsIconBg">
                          <div
                            className="sportsMenuIcon"
                            style={{
                              backgroundImage:
                                'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/285202028_volleyball_unselected.svg")',
                            }}
                          />
                        </div>
                        <div className="nameAlign">Volleyball</div>
                      </div>
                    </div>

                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/228174499_cricket_unselect.svg")',
                          }}
                        />

                        <div className="nameAlign">Cricket </div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(5)</div>
                        </div>
                      </div>
                      <span className="tooltiptext">Cricket</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1652959569_soccer_unselect.svg")',
                          }}
                        />

                        <div className="nameAlign">Soccer </div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(2)</div>
                        </div>
                      </div>
                      <span className="tooltiptext">Soccer</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/964851859_tennis_unselect.svg")',
                          }}
                        />

                        <div className="nameAlign">Tennis </div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(6)</div>
                        </div>
                      </div>
                      <span className="tooltiptext">Tennis</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1887449695_table_tennis_unselect.svg")',
                          }}
                        />

                        <div className="nameAlign">Table Tennis </div>
                      </div>
                      <span className="tooltiptext">Table Tennis</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1733700526_american_football_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">American Football </div>
                      </div>
                      <span className="tooltiptext">American Football</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1075152761_aussie_rules_unselect.svg")',
                          }}
                        />

                        <div className="nameAlign">Aussie Rules </div>
                      </div>
                      <span className="tooltiptext">Aussie Rules</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/353893227_baseball_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">Baseball </div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(8)</div>
                        </div>
                      </div>
                      <span className="tooltiptext">Baseball</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/161567484_basketball_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">Basketball </div>
                        <div className="liveCounts">
                          <div className="livecount_desktop">(1)</div>
                        </div>
                      </div>
                      <span className="tooltiptext">Basketball</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1940745524_darts_unselect.svg")',
                          }}
                        />

                        <div className="nameAlign">Darts </div>
                      </div>
                      <span className="tooltiptext">Darts</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1255434690_CS_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">ESport Counter-Strike </div>
                      </div>
                      <span className="tooltiptext">ESport Counter-Strike</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/802690035_dota_2_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">ESport Dota </div>
                      </div>
                      <span className="tooltiptext">ESport Dota</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div className="nameAlign">
                          ESport League of Legends
                        </div>
                      </div>
                      <span className="tooltiptext">
                        ESport League of Legends
                      </span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/419982100_field_hockey_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">Field hockey </div>
                      </div>
                      <span className="tooltiptext">Field hockey</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/679747151_futsal_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">Futsal </div>
                      </div>
                      <span className="tooltiptext">Futsal</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/3968385_handball_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">Handball </div>
                      </div>
                      <span className="tooltiptext">Handball</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/494042141_ice_hockey_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">Ice Hockey </div>
                      </div>
                      <span className="tooltiptext">Ice Hockey</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/2045466965_rugby_unselect.svg")',
                          }}
                        />

                        <div className="nameAlign">Rugby </div>
                      </div>
                      <span className="tooltiptext">Rugby</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1474880101_snooker_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">Snooker </div>
                      </div>
                      <span className="tooltiptext">Snooker</span>
                    </div>
                    <div className="icons_list icon_mobile un-selection1">
                      <div className="nameAlign1">
                        <div
                          className="sportsMenuIcon"
                          style={{
                            backgroundImage:
                              'url("http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/285202028_volleyball_unselected.svg")',
                          }}
                        />

                        <div className="nameAlign">Volleyball </div>
                      </div>
                      <span className="tooltiptext">Volleyball</span>
                    </div>
                  </div>
                </div>

                <div className="accordion mt-2" id="AllGames">
                  <div className="accordion-item">
                    <button
                      className="accordion-button accordion-header"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <img
                        src="http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/468405774_cricket_select.svg"
                        alt=""
                      />
                      Cricket
                    </button>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="accordion-item">
                          <button
                            className="accordion-button accordion-header"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOneChild"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOneChild"
                          >
                            <i className="bi bi-star me-2"></i>
                            T20 ACC Premier Cup (International)
                          </button>
                          <div
                            id="panelsStayOpen-collapseOneChild"
                            className="accordion-collapse collapse show"
                          >
                            <div className="accordion-body">
                              <div className="events-overall-div">
                                <div className="market_append_list">
                                  <div className="animated fadeIn fast delay-0s">
                                    <div className="overall-event-data">
                                      <div className="gameinfo-area">
                                        <div className="matchinfo">
                                          <div className="matchInner_Info">
                                            <div className="country_score_main">
                                              <div className="country-name">
                                                <div className="teamName">
                                                  Oman
                                                </div>
                                                <div className="teamName">
                                                  Hong Kong, China
                                                </div>
                                              </div>
                                              <div className="scoredetails">
                                                <span className="scoredetails_div_21">
                                                  <div className="Score_21"></div>
                                                  <br />
                                                  <div className="Score_21">
                                                    <span>34/2</span>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="matchStatusInfo_cont">
                                            <div className="matchDesk_desc">
                                              <div className="matchInnerDesc">
                                                <div className="live1"></div>
                                              </div>
                                              <div className="matchContent">
                                                <div className="timestatus-info">
                                                  <div className="statustxt-withoutSpace">
                                                    <div className="matchData_content">
                                                      First innings, away team
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="timestatus-info timeStatus"></div>
                                              <div className="stop_clock">
                                                <div className="stop_clock_inner" />
                                              </div>
                                            </div>
                                            <div className="cashout_desktop"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gameinfo-area2">
                                        <div className="gameinfoInner">
                                          <span className="button">
                                            <div
                                              className="team_section01"
                                              style={{
                                                flexDirection: "column",
                                              }}
                                            >
                                              <div className="betslip-away-team1">
                                                1
                                              </div>
                                              <div className="team-button">
                                                <div className="team-button-inner">
                                                  <div className="teamscoreval">
                                                    1.16
                                                  </div>
                                                </div>
                                                <div className="disable_visible" />
                                                <div className="disable">
                                                  <div className="disable_lock" />
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="team_section01"
                                              style={{
                                                flexDirection: "column",
                                              }}
                                            >
                                              <div className="betslip-away-team1">
                                                2
                                              </div>
                                              <div className="team-button">
                                                <div className="team-button-inner">
                                                  <div className="teamscoreval">
                                                    4.20
                                                  </div>
                                                </div>
                                                <div className="disable_visible" />
                                                <div className="disable">
                                                  <div className="disable_lock" />
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                        <div className="mainPlusScore_cont">
                                          <div className="plusscoreval">+5</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button
                            className="accordion-button accordion-header"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOneChild2"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOneChild2"
                          >
                            <i className="bi bi-star me-2"></i>
                            T20 ACC Premier Cup (International)
                          </button>
                          <div
                            id="panelsStayOpen-collapseOneChild2"
                            className="accordion-collapse collapse show"
                          >
                            <div className="accordion-body">
                              <div className="events-overall-div">
                                <div className="market_append_list">
                                  <div className="animated fadeIn fast delay-0s">
                                    <div className="overall-event-data">
                                      <div className="gameinfo-area">
                                        <div className="matchinfo">
                                          <div className="matchInner_Info">
                                            <div className="country_score_main">
                                              <div className="country-name">
                                                <div className="teamName">
                                                  Oman
                                                </div>
                                                <div className="teamName">
                                                  Hong Kong, China
                                                </div>
                                              </div>
                                              <div className="scoredetails">
                                                <span className="scoredetails_div_21">
                                                  <div className="Score_21"></div>
                                                  <br />
                                                  <div className="Score_21">
                                                    <span>34/2</span>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="matchStatusInfo_cont">
                                            <div className="matchDesk_desc">
                                              <div className="matchInnerDesc">
                                                <div className="live1"></div>
                                              </div>
                                              <div className="matchContent">
                                                <div className="timestatus-info">
                                                  <div className="statustxt-withoutSpace">
                                                    <div className="matchData_content">
                                                      First innings, away team
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="timestatus-info timeStatus"></div>
                                              <div className="stop_clock">
                                                <div className="stop_clock_inner" />
                                              </div>
                                            </div>
                                            <div className="cashout_desktop"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gameinfo-area2">
                                        <div className="gameinfoInner">
                                          <span className="button">
                                            <div
                                              className="team_section01"
                                              style={{
                                                flexDirection: "column",
                                              }}
                                            >
                                              <div className="betslip-away-team1">
                                                1
                                              </div>
                                              <div className="team-button">
                                                <div className="team-button-inner">
                                                  <div className="teamscoreval">
                                                    1.16
                                                  </div>
                                                </div>
                                                <div className="disable_visible" />
                                                <div className="disable">
                                                  <div className="disable_lock" />
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="team_section01"
                                              style={{
                                                flexDirection: "column",
                                              }}
                                            >
                                              <div className="betslip-away-team1">
                                                2
                                              </div>
                                              <div className="team-button">
                                                <div className="team-button-inner">
                                                  <div className="teamscoreval">
                                                    4.20
                                                  </div>
                                                </div>
                                                <div className="disable_visible" />
                                                <div className="disable">
                                                  <div className="disable_lock" />
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                        <div className="mainPlusScore_cont">
                                          <div className="plusscoreval">+5</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="overall-event-data">
                                      <div className="gameinfo-area">
                                        <div className="matchinfo">
                                          <div className="matchInner_Info">
                                            <div className="country_score_main">
                                              <div className="country-name">
                                                <div className="teamName">
                                                  Oman
                                                </div>
                                                <div className="teamName">
                                                  Hong Kong, China
                                                </div>
                                              </div>
                                              <div className="scoredetails">
                                                <span className="scoredetails_div_21">
                                                  <div className="Score_21"></div>
                                                  <br />
                                                  <div className="Score_21">
                                                    <span>34/2</span>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="matchStatusInfo_cont">
                                            <div className="matchDesk_desc">
                                              <div className="matchInnerDesc">
                                                <div className="live1"></div>
                                              </div>
                                              <div className="matchContent">
                                                <div className="timestatus-info">
                                                  <div className="statustxt-withoutSpace">
                                                    <div className="matchData_content">
                                                      First innings, away team
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="timestatus-info timeStatus"></div>
                                              <div className="stop_clock">
                                                <div className="stop_clock_inner" />
                                              </div>
                                            </div>
                                            <div className="cashout_desktop"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="gameinfo-area2">
                                        <div className="gameinfoInner">
                                          <span className="button">
                                            <div
                                              className="team_section01"
                                              style={{
                                                flexDirection: "column",
                                              }}
                                            >
                                              <div className="betslip-away-team1">
                                                1
                                              </div>
                                              <div className="team-button">
                                                <div className="team-button-inner">
                                                  <div className="teamscoreval">
                                                    1.16
                                                  </div>
                                                </div>
                                                <div className="disable_visible" />
                                                <div className="disable">
                                                  <div className="disable_lock" />
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              className="team_section01"
                                              style={{
                                                flexDirection: "column",
                                              }}
                                            >
                                              <div className="home-away-team1">
                                                2
                                              </div>
                                              <div className="team-button">
                                                <div className="team-button-inner">
                                                  <div className="teamscoreval">
                                                    4.20
                                                  </div>
                                                </div>
                                                <div className="disable_visible" />
                                                <div className="disable">
                                                  <div className="disable_lock" />
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                        <div className="mainPlusScore_cont">
                                          <div className="plusscoreval">+5</div>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ps-2 pe-0">
              <ul
                className="nav sports-nav nav-pills"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-betslip-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-betslip"
                    type="button"
                    role="tab"
                    aria-controls="pills-betslip"
                    aria-selected="true"
                  >
                    <img
                      src="https://agsportsbookprod.bollytech.com/aggoldmarbleprod/betslip_selectedIcon.74655cb35d0f8122.svg"
                      alt=""
                    />
                    Betslip
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-betHistory-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-betHistory"
                    type="button"
                    role="tab"
                    aria-controls="pills-betHistory"
                    aria-selected="false"
                  >
                    <img
                      src="https://agsportsbookprod.bollytech.com/aggoldmarbleprod/bethistory_unselectedIcon.8971c3d2270a3dac.svg"
                      alt=""
                    />
                    Bet History
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-betslip"
                  role="tabpanel"
                  aria-labelledby="pills-betslip-tab"
                  tabIndex={0}
                >
                  <div className="no_bet_message"> Bet slip is empty.</div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-betHistory"
                  role="tabpanel"
                  aria-labelledby="pills-betHistory-tab"
                  tabIndex={0}
                >
                  <div className="history_bet_slip">
                    <ul
                      className="nav sports-nav nav-pills"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-open-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-open"
                          type="button"
                          role="tab"
                          aria-controls="pills-open"
                          aria-selected="true"
                        >
                          Open
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-settled-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-settled"
                          type="button"
                          role="tab"
                          aria-controls="pills-settled"
                          aria-selected="false"
                        >
                          Settled
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-open"
                        role="tabpanel"
                        aria-labelledby="pills-open-tab"
                        tabIndex={0}
                      ></div>
                      <div
                        className="tab-pane fade"
                        id="pills-settled"
                        role="tabpanel"
                        aria-labelledby="pills-settled-tab"
                        tabIndex={0}
                      >
                        <div className="history_list bet_history_list">
                          <div className="betlist_main">
                            <div className="multibet-history-detail">
                              <div className="team_result">
                                <div className="outCome_name">
                                  <div className="outCome_name_inner">
                                    Lancashire @ 7.4
                                  </div>
                                  <div className="match_name">
                                    <u>Surrey vs. Lancashire</u>
                                  </div>
                                  <div className="match_start_time">
                                    25/06/2023 15:30
                                  </div>
                                </div>

                                <div className="bet_status_1">Win</div>
                              </div>
                            </div>
                            <div className="reference_num">
                              <u>Ref.No: AAA18420527062310344405585</u>
                            </div>
                            <div className="betDetails">
                              <div className="betTime">27/06/2023 10:18</div>
                              <div className="bettype">Single</div>
                            </div>

                            <div className="amount_details">
                              <div className="MultibetOddDetails">
                                <div className="stake">
                                  <div className="stake_header">Org.Stake:</div>
                                  <div className="stake_value">400.00</div>
                                </div>
                                <div className="stake">
                                  <div className="stake_header">
                                    Tot.Returns:
                                  </div>
                                  <div className="stake_value">2,960.00</div>
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
          </div>
        </section>
      </main>
    </>
  );
}
