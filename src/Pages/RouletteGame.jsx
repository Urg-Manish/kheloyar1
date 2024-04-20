import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
export default function RouletteGame() {
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
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Live Games
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Virtual Games
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div className="content-container flex-wrap gap-3 justify-content-center d-flex">
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/949.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>First Person Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVO</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=CQC-jungleparty_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Jungle Party</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>CQC</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=CQC-miniroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Mini Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>CQC</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/1024.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>French Roulette Classic</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹50</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/108.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>American Roulette 3D</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/861.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=GA-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>GA</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=HAB-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>HAB</span>
                          <span className="min-mx min-mx-bg">₹500</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-rouletteadvanced_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Advanced</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-roulettetouch_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Touch</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-americanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>American Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-frenchroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>French Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/6511.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Bombay Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>OT</span>
                          <span className="min-mx min-mx-bg">₹250</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/2276.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>OT</span>
                          <span className="min-mx min-mx-bg">₹500</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=PP-rouletteeu_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette EU</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>PP</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=PP-golden10_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Golden 10</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>PP</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/862.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RED</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/900002.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Auto Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RG</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=RLX-roulettenouveau_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Nouveau</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RLX</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=SHS-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>SHS</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=WAZ-goldroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Gold Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>WAZ</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=WAZ-casinoroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Casino Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>WAZ</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=YGG-goldenchiproulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Golden Chip Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>YGG</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <div className="content-container flex-wrap gap-3 justify-content-center d-flex">
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/949.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>First Person Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVO</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=CQC-jungleparty_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Jungle Party</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>CQC</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=CQC-miniroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Mini Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>CQC</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/1024.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>French Roulette Classic</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹50</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/108.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>American Roulette 3D</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/861.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=GA-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>GA</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=HAB-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>HAB</span>
                          <span className="min-mx min-mx-bg">₹500</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-rouletteadvanced_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Advanced</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-roulettetouch_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Touch</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-americanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>American Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-frenchroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>French Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/6511.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Bombay Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>OT</span>
                          <span className="min-mx min-mx-bg">₹250</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/2276.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>OT</span>
                          <span className="min-mx min-mx-bg">₹500</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=PP-rouletteeu_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette EU</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>PP</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=PP-golden10_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Golden 10</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>PP</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/862.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RED</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/900002.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Auto Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RG</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=RLX-roulettenouveau_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Nouveau</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RLX</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=SHS-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>SHS</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=WAZ-goldroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Gold Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>WAZ</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=WAZ-casinoroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Casino Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>WAZ</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=YGG-goldenchiproulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Golden Chip Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>YGG</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <div className="content-container flex-wrap gap-3 justify-content-center d-flex">
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/949.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>First Person Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVO</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=CQC-jungleparty_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Jungle Party</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>CQC</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=CQC-miniroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Mini Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>CQC</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/1024.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>French Roulette Classic</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹50</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/108.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>American Roulette 3D</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/861.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>EVP</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=GA-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>GA</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=HAB-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>HAB</span>
                          <span className="min-mx min-mx-bg">₹500</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-rouletteadvanced_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Advanced</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-roulettetouch_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Touch</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-americanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>American Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=NE-frenchroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>French Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>NE</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/6511.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Bombay Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>OT</span>
                          <span className="min-mx min-mx-bg">₹250</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/2276.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>OT</span>
                          <span className="min-mx min-mx-bg">₹500</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=PP-rouletteeu_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette EU</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>PP</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=PP-golden10_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Golden 10</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>PP</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/862.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RED</span>
                          <span className="min-mx min-mx-bg">₹1000</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://dqqdyv927mezc.cloudfront.net/CasinoImages/900002.png"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Auto Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RG</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=RLX-roulettenouveau_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Roulette Nouveau</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>RLX</span>
                          <span className="min-mx"></span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=SHS-europeanroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>European Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>SHS</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=WAZ-goldroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Gold Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>WAZ</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=WAZ-casinoroulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Casino Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>WAZ</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card-container">
                      <div className="img-container">
                        <img
                          alt=""
                          src="https://lobby.qtlauncher.com/images/?id=YGG-goldenchiproulette_en_US&type=banner&version=3292880859965&showIcon=true&width=450&theme=dark"
                        />
                      </div>
                      <div className="game-desc">
                        <div className="details">
                          <span>Table Games</span>
                        </div>
                        <p>Golden Chip Roulette</p>
                        <div className="details mt-1 d-flex justify-content-between">
                          <span>YGG</span>
                          <span className="min-mx min-mx-bg">₹100</span>
                        </div>
                      </div>
                      <div className="detail-content">
                        <button
                          className="btn m-auto d-block"
                          data-bs-toggle="modal"
                          data-bs-target="#PlayNote"
                        >
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
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
