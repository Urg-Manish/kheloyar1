// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying" className="carousel slide"  data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/banners/3589.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item"  data-bs-interval="2000">
            <img
              src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/banners/2824.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
         
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
      </div>
{/*       
   <center className="bg-transparent mx-1 ">
      <button className="btn btn-warning rounded-pill m-4 signup ">SIGNUP</button>
    
      </center> */}
    </>
  );
}
