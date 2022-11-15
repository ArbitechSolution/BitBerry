import React from "react";
import "./Universe.css";
import social from "../../Assets/Images/telegramIcon.png";
import social1 from "../../Assets/Images/twitterIcon.png";
import social2 from "../../Assets/Images/discordIcon.png";
import Picture1 from "../../Assets/Images/Group8.png";

function Universe() {
  return (
    <>
      <div className="row bg  d-flex">
        <div className="col-md-12">
          <div className="box">
            <div className="d-flex flex-column bd-highlight p-2 ">
              <div className="p-2 bd-highlight">
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social}
                />
              </div>
              <div className="p-2 bd-highlight">
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social1}
                />
              </div>
              <div className="p-2 bd-highlight">
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social2}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 txt-uni">
            <h3 className="">WE ARE</h3>
            <h3 className="">BUILDING THE BEST</h3>
            <h3 className="TEXT-BG">WEBTOON UNIVERSE</h3>
          </div>
        </div>
        <div></div>
        <div className="col-md-12 pic-bg">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-end">
              <div className="">
                <img
                  src={Picture1}
                  className="img-fluid img-1"
                  width={"350px"}
                />
              </div>
            </div>
            <div className="col-md-5">
              <p className="p1">
                We provide a level playing field for all webtoon creators to
                draw, contribute and earn money.
              </p>
              <p className="p2">
                Bitberry focuses on supporting many ambitious creators by
                bringing the realm of blockchain technology and NFT to the
                webtoon and entertainment industry. Bitberry aims to be the best
                web 3.0 project in Korea, becoming a leader in the webtoons,
                animation industries by 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
