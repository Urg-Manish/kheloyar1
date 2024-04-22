/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GrLogin } from "react-icons/gr";
import { FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Login from "./Login";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid mx-4 my-1">
          <a className="navbar-brand" href="#">
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg"
              className="w-50"
              alt=""
            />
          </a>
          <span className="float-end px-2 rounded gap-1 d-flex">
            <button className="header_top_txt_inn">
              <img
                src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/cash1.svg"
                alt=""
                height={'18px'}
              />
              Deposit
            </button>
            <div>
      <div className="text-white">
        <span className="wallet-name">Liability : </span>
        <span className="red-text wallet-value accent-3" style={{ color: 'white', marginLeft: '5px', fontWeight: 500 }}> 0</span>
      </div>
      <div className="text-white">
        <span className="wallet-name">Balance : </span>
        <span className="wallet-value white-color" style={{ marginLeft: '5px', fontWeight: 500 }}> 0</span>
      </div>
    </div>
          </span>
          {/* <span className="float-end bg-warning px-2 rounded gap-1">
            <span onClick={()=>setIsOpen(true)}  className="bg-dark text-warning">
              <GrLogin />
              Login
            </span>
            <Link className="text-dark" to='/signup'>
            <span>
              <FaUserPlus />
              Signup
            </span>
            </Link>
          </span> */}
        </div>
        <div
          className="container-fluid text-white justify-content-center "
          style={{ flexWrap: "nowrap" }}
        >
          <span className="navbtn py-2  rounded">
            <img
              src="		https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Exchange.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; SPORTS
          </span>
          <span className="navbtn py-2  rounded">
            <img
              src="		https://dqqdyv927mezc.cloudfront.net/ssexch/web/images/sp-bk.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; SPORTS BOOK
          </span>
          <span className="navbtn py-2  rounded">
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/InPlay.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; IN PLAY
          </span>
          <span className="navbtn py-2  rounded">
            <img
              src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Casino.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; ALL CASINOS
          </span>
          <span className="navbtn py-2  rounded">
            <img
              src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Cricket.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; CRICKET
          </span>
          <span className="navbtn py-2  rounded">
            <img
              src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Soccer.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; SOCCER
          </span>
          <span className="navbtn py-2  rounded">
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Tennis.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; TENNIS
          </span>
          <span className="navbtn py-2  rounded">
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/HorseRacing.webp"
              height={"25px"}
              alt=""
            />
            &nbsp; HORSE RACING
          </span>
        </div>
      </nav>
      <div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <Login isOpen={isOpen} setIsOpen={setIsOpen} />
              {/* <Lorem count={2} /> */}
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
