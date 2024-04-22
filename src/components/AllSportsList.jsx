import React from "react";
import { Link } from "react-router-dom";

export default function AllSportsList() {
  return (
    <>
      <div className="menu_toggle">
        <div className="sports_link_container mt-3">
          <div className="input-group mb-2">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search a game or a competition"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="header">All Sports</div>
          <div className="accordion" id="SideMenuToggle">
            <div className="accordion-item">
              <button
                className="accordion-button accordion-header collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#smt1"
                aria-expanded="false"
                aria-controls="smt1"
              >
                <img
                  src="https://sportsradarbo.bollytech.com/assets/uploads/sports_logo/228174499_cricket_unselect.svg"
                  alt=""
                />
                Cricket
              </button>
              <div
                id="smt1"
                className="accordion-collapse collapse"
                data-bs-parent="#SideMenuToggle"
              >
                <div className="accordion-body">
                  <div className="accordion" id="SideMenuToggleSecond">
                    <div className="accordion-item">
                      <button
                        className="accordion-button accordion-header collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#smtc1"
                        aria-expanded="false"
                        aria-controls="smtc1"
                      >
                        <img
                          src="https://agsportsbookprod.bollytech.com/aggoldmarbleprod/categoryLogo.acb51c8a783589ae.svg"
                          alt=""
                        />
                        India
                      </button>
                      <div
                        id="smtc1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#SideMenuToggleSecond"
                      >
                        <div className="accordion-body">
                          <ul class="list-group">
                            <li class="list-group-item">
                              <Link to="/all-sports">A second item</Link>
                            </li>
                            <li class="list-group-item">
                              <Link to="/all-sports">A second item</Link>
                            </li>
                            <li class="list-group-item">
                              <Link to="/all-sports">A second item</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button accordion-header collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#smtc2"
                        aria-expanded="false"
                        aria-controls="smtc2"
                      >
                        <img
                          src="https://agsportsbookprod.bollytech.com/aggoldmarbleprod/categoryLogo.acb51c8a783589ae.svg"
                          alt=""
                        />
                        England
                      </button>
                      <div
                        id="smtc2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#SideMenuToggleSecond"
                      >
                        <div className="accordion-body"></div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button accordion-header collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#smtc3"
                        aria-expanded="false"
                        aria-controls="smtc3"
                      >
                        <img
                          src="https://agsportsbookprod.bollytech.com/aggoldmarbleprod/categoryLogo.acb51c8a783589ae.svg"
                          alt=""
                        />
                        International
                      </button>
                      <div
                        id="smtc3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#SideMenuToggleSecond"
                      >
                        <div className="accordion-body"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button accordion-header collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#smt2"
                aria-expanded="false"
                aria-controls="smt2"
              >
                <img
                  src="https://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1652959569_soccer_unselect.svg"
                  alt=""
                />
                Soccer
              </button>
              <div
                id="smt2"
                className="accordion-collapse collapse"
                data-bs-parent="#SideMenuToggle"
              >
                <div className="accordion-body"></div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button accordion-header collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#smt3"
                aria-expanded="false"
                aria-controls="smt3"
              >
                <img
                  src="http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/964851859_tennis_unselect.svg"
                  alt=""
                />
                Tennis
              </button>
              <div
                id="smt3"
                className="accordion-collapse collapse"
                data-bs-parent="#SideMenuToggle"
              >
                <div className="accordion-body"></div>
              </div>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button accordion-header collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#smt4"
                aria-expanded="false"
                aria-controls="smt4"
              >
                <img
                  src="http://sportsradarbo.bollytech.com/assets/uploads/sports_logo/1887449695_table_tennis_unselect.svg"
                  alt=""
                />
                Table Tennis
              </button>
              <div
                id="smt4"
                className="accordion-collapse collapse"
                data-bs-parent="#SideMenuToggle"
              >
                <div className="accordion-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
