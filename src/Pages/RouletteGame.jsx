import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import { useGetRouletteMutation } from "../services/jsonServerApi";
export default function RouletteGame() {
  const params = useParams()
  const [category,setCategory]= useState(params?.type)
  const [getData, { data }] = useGetRouletteMutation({
    category: category,
    limit: 1000,
  });
  useEffect(()=>{
    setCategory(params?.type)
  },[params?.type])
  useEffect(()=>{
getData({
  category: category,
  limit: 1000,
})
  },[category])
  return (
    <>
      <main>
        <Topbar />

        <section className="content-wrapper cas-wrapper">
          <div className="container-fluid px-5 py-3">
            <ul
              className="nav nav-pills justify-content-center mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  onClick={()=>setCategory('roulette')}
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button onClick={()=>setCategory("live-casino")}
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  // data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  // aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Live Games
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button onClick={()=>setCategory("table-games")}
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  // data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Table Games
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="content-container flex-wrap gap-3 justify-content-center d-flex">
                {data?.data?.map((i,index)=>(
                  <div key={index} className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src={i?.Image}
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>{i?.category}</span>
                        </div>
                        <p>{i?.game_name}</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>{i?.provider_name}</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                       <Link to={i?.Url}>
                       
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                        LOGIN 
                        </button>
                       </Link>
                      </div>
                    </div>
                  </div>
                ))}
                  
                
                 
                 
                </div>
              </div>
           
            </div>
          </div>
        </section>
        <div className="casino-side-container">
          <div>
            <div className="img-container">
              <div className="product-box">
                <div className="product-opacity" />
                <img src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/casinoV4/sidebar/evo.png" />
                <div className="product-content">
                  <p className="text-center">Evolution</p>
                  <button className="btn btn-default m-auto d-block">
                    PLAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="img-container">
              <div className="product-box">
                <div className="product-opacity" />
                <img src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/casinoV4/sidebar/Ezugi300x280.png" />
                <div className="product-content">
                  <p className="text-center">Ezugi</p>
                  <button className="btn btn-default m-auto d-block">
                    PLAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="img-container">
              <div className="product-box">
                <div className="product-opacity" />
                <img src="https://dqqdyv927mezc.cloudfront.net/kheloyar/casinosNew/aura_gaming_logo.webp" />
                <div className="product-content">
                  <button className="btn btn-default m-auto d-block">
                    PLAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="img-container">
              <div className="product-box">
                <div className="product-opacity" />
                <img src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/casinoV4/sidebar/QT300x280.png" />
                <div className="product-content">
                  <p className="text-center">QT</p>
                  <button className="btn btn-default m-auto d-block">
                    PLAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="img-container">
              <div className="product-box">
                <div className="product-opacity" />
                <img
                  style={{ height: "100%" }}
                  src="https://dqqdyv927mezc.cloudfront.net/ssexch/mob/assets/images/casino/qt/VirtualSports.png"
                />
                <div className="product-content">
                  <p className="text-center">Virtual Sports</p>
                  <button className="btn btn-default m-auto d-block">
                    PLAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal play-popup fade"
          id="PlayNote"
          tabindex="-1"
          aria-labelledby="PlayNoteLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body p-0">
                <img
                  src="https://www.kheloyaar360.net/assets/100pointsq.png"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
              <div className="modal-footer m-2 p-1 flex-nowrap gap-3 justify-content-center border-0">
                <button type="button" className="btn m-0 w-50 btn-success">
                  Accept
                </button>
                <button
                  type="button"
                  className="btn m-0 w-50 btn-danger"
                  data-bs-dismiss="modal"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
