/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Providers() {
  return (
    <>
      <div className="container-fluid text-white">
        <div>
          <span className="float-start fw-bold fs-3">
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/WhiteIcons/Providers.svg"
              height={"25px"}
              alt=""
            />
            Providers
          </span>
          <span className="float-end text-warning">
            See All&nbsp;
            <FaArrowRight />
          </span>
        </div>
        <br />
        <div className="d-flex my-4">
          <img
            className="rounded mx-1"
            width={"250px"}
            height={"168px"}
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/EGaming.webp"
            alt=""
          />
          <img
            className="rounded mx-1"
            width={"250px"}
            height={"168px"}
            src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Ez.webp"
            alt=""
          />
          <img
            className="rounded mx-1"
            width={"250px"}
            height={"168px"}
            src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/VivoGaming.webp"
            alt=""
          />
            <img
            className="rounded mx-1"
            width={"250px"}
            height={"168px"}
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/casinosNew/Aura%20Gaming.webp"
            alt=""
          />
            <img
            className="rounded mx-1"
            width={"250px"}
            height={"168px"}
            src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/QTech.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
