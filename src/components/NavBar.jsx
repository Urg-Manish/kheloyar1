/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
import { useGetWalletMutation } from "../services/jsonServerApi";
import axios from "axios";
import Cookies from "universal-cookie";
import { useCookies } from "react-cookie";

export default function NavBar() {
const [liablity,setLiablity]= useState()
const [balance,setbalance]= useState()

  // const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const cookies = new Cookies();
  const token = cookies.get('token');
  console.log('Token:', token);
  useEffect(() => {
//     let x = document.cookie;
// console.log({x})
    // console.log({cookies})
  }, []);

  const axiosConfig = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json', // Set your content type if needed
      // Add other headers if necessary
    }
  };

  const getWalletData = async () => {
    try {
        const response = await axios.post('http://localhost:8787/api/v5/wallet-balance',{}, axiosConfig);
        console.log(response.data); // Log the response data
        // Handle success
        setbalance(response?.data?.data?.balance)
        setLiablity(response?.data?.data?.liablity)
    } catch (error) {
        console.error('Error:', error);
        // Handle error
    }
};
  const [isOpen, setIsOpen] = useState(false);
const [getWallet,{data}]=useGetWalletMutation()
useEffect(()=>{
token&&  getWallet()
  getWalletData()
},[]) 
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
        <span className="red-text wallet-value accent-3" style={{ color: 'white', marginLeft: '5px', fontWeight: 500 }}> {liablity||0}</span>
      </div>
      <div className="text-white">
        <span className="wallet-name">Balance : </span>
        <span className="wallet-value white-color" style={{ marginLeft: '5px', fontWeight: 500 }}> {balance}</span>
      </div>
    </div>
          </span>
          <span className="float-end bg-warning px-2 rounded gap-1">
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
          </span>
        </div>
        <div
          className="container-fluid text-white justify-content-center "
          style={{ flexWrap: "nowrap" }}
        >
          <span className="navbtn py-2  rounded">
          <Link to={'/sports'}>
            <img
              src="		https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Exchange.svg"
              height={"25px"}
              alt=""
              />
            &nbsp; SPORTS
              </Link>
          </span>

          <span className="navbtn py-2  rounded">
          <Link to={`/all-sports`}>
            <img
              src="		https://dqqdyv927mezc.cloudfront.net/ssexch/web/images/sp-bk.svg"
              height={"25px"}
              alt=""
              />
            &nbsp; SPORTS BOOK
              </Link>
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
          <Link to={`/casinos/games/live-casino`}>
            <img
              src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Casino.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; ALL CASINOS
            </Link>
          </span>
          <span className="navbtn py-2  rounded">
            <Link to={`/sports/sportsbyid/4`}>
            <img
              src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Cricket.svg"
              height={"25px"}
              alt=""
              />
            &nbsp; CRICKET
              </Link>
          </span>
          <span className="navbtn py-2  rounded">
              <Link to={`/sports/sportsbyid/1`}>
            <img
              src="	https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Soccer.svg"
              height={"25px"}
              alt=""
            />
            &nbsp; SOCCER
          </Link>
          </span>
          <span className="navbtn py-2  rounded">
          <Link to={`/sports/sportsbyid/2`}>
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/landing-nav/Tennis.svg"
              height={"25px"}
              alt=""
              />
            &nbsp; TENNIS
              </Link>
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
