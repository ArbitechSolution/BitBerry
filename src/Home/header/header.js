import React from "react";
import "./Header.css";
import Logo from "../../Assets/Images/logo.png";
import social from "../../Assets/Images/telegramIcon.png";
import social1 from "../../Assets/Images/twitterIcon.png";
import social2 from "../../Assets/Images/discordIcon.png";

function Header() {
  return (
    <div className="col-md-12 d-flex justify-content-center align-items-between border">
      <nav className=" col-md-11 navbar navbar-expand-lg navbarscreen">
        <div className="container">
          <a className="navbar-brand ml-3" href="#home">
            <img
              src={Logo}
              width={"80px"}
              height={"80px"}
              className="img-fluid img-responsive"
            />
          </a>
          <div className="">
            <button className="text-center btn-largescreen">
              LAUCNHPAD SOON
            </button>
          </div>
          <button
            className="navbar-toggler ms-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" col-md-12 navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tokenomics">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#Brp-pool"
                  text-dark
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BBR Pool
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      LP Pool
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lucky Draw
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tier NFTs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#howwework">How we work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#documents">
                  Documents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadMap">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ourWork">
                  Our Work
                </a>
              </li>
              {/* <li className="nav-item mt-4">
                <button className="text-center btn-largescreen">
                  LAUCNHPAD SOON
                </button>
              </li> */}
              <li className="nav-item mt-4 large">
                <div className="box-1 ">
                  <div className="d-flex flex-row justify-content-center">
                    <div className="p-2">
                      <img
                        classname="img-fluid"
                        width={"30px"}
                        height={"30px"}
                        src={social}
                      />
                    </div>
                    <div className="p-2 ">
                      <img
                        classname="img-fluid"
                        width={"30px"}
                        height={"30px"}
                        src={social1}
                      />
                    </div>
                    <div className="p-2 ">
                      <img
                        classname="img-fluid"
                        width={"30px"}
                        height={"30px"}
                        src={social2}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <button className="text-center btn">LAUCNHPAD SOON</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
