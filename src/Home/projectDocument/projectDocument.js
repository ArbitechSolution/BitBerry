import React, { useEffect, useState } from "react";
import roadmap from "../../Assets/Images/document.png";
import imgLeft from "../../Assets/Images/Group331.png";
import imgCenter from "../../Assets/Images/Group341.png";
import imgRight from "../../Assets/Images/Group351.png";
import group1 from "../../Assets/Images/Group37.png";
import group2 from "../../Assets/Images/Group38.png";
import group3 from "../../Assets/Images/Group39.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import "./projectDocument.css";
function ProjectDocument() {
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState(prevState => !prevState)
      setAnimationState1(prevState => !prevState)
    }, 2000);
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="contianer projectDocument mt-5" id="documents">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={roadmap} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8 col-10 subHeading-project mx-auto">
          <img src={Circle} width={"40px"} className="imgProject" />
          <div className="color-bright">
            <span className={animationState ? "header header--pushDownOne" : "header"}>project</span>
            &nbsp;
            <span className={animationState1 ? "header header--pushDownTwo" : "header"}>document</span>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 text-center">
          <p className="subPara">
            Learn more about our ecosystem through these attachements.
          </p>
        </div>
      </div>
      <div className="row squareBgImg d-flex justify-content-center mt-4">
        <div className="col-md-12 d-flex flipcart ">
          <div className="hover-button"
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >

            <img
              src={imgLeft}
              className="img-fluid  imgDoc hover-button--off"
              alt=""
            />
            <a href="https://drive.google.com/file/d/1QrcvJ4RgyHmOYMsQRaIwPlQgN6r0gHPB/view" target="_blank">
              <img
                src={group1}
                className="img-fluid  imgDoc hover-button--on"
                alt=""
              />
            </a>
          </div>
          <div className="hover-button"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos="flip-left">
            <img
              src={imgCenter}
              className="img-fluid imgDoc hover-button--off"
              alt=""
            />
            <a href="https://drive.google.com/file/d/1OIlbyo_Cru4trlVUVyozrfr8sMSkIiv7/view?usp=sharing" target="_blank">
              <img
                src={group2}
                className="img-fluid  imgDoc hover-button--on"
                alt=""
              />
            </a>
          </div>
          <div className="hover-button"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos="flip-left">
            <img
              src={imgRight}
              className="img-fluid imgDoc hover-button--off"
              alt=""
            />
            <a href="https://drive.google.com/file/d/1elWtInE_eJg1OYQdxqxbsn2whqdP6wjp/view?usp=sharing" target="_blank">
              <img
                src={group3}
                className="img-fluid  imgDoc hover-button--on"
                alt=""
              />
            </a>
          </div>
        </div>
        <div
          id="carouselExampleControls1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="hover-button">
                <img
                  src={imgLeft}
                  className="img-fluid  imgDoc hover-button--off"
                  alt=""
                />
                <a href="https://drive.google.com/file/d/1QrcvJ4RgyHmOYMsQRaIwPlQgN6r0gHPB/view" target="_blank">
                  <img
                    src={group1}
                    className="img-fluid  imgDoc hover-button--on"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <span className="catext">COMPANY PROFILE </span>
                <button className="cabutton ms-2" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">{"- - ->"}</button>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hover-button">
                <img
                  src={imgCenter}
                  className="img-fluid imgDoc hover-button--off"
                  alt=""
                />
                <a href="https://drive.google.com/file/d/1OIlbyo_Cru4trlVUVyozrfr8sMSkIiv7/view?usp=sharing" target="_blank">
                  <img
                    src={group2}
                    className="img-fluid  imgDoc hover-button--on"
                    alt=""
                  />
                </a>
              </div>
              <span className="catext">PITCH DECK </span>
              <button className="cabutton ms-2" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">{"- - ->"}</button>
            </div>
            <div className="carousel-item">
              <div className="hover-button">
                <img
                  src={imgRight}
                  className="img-fluid imgDoc hover-button--off"
                  alt=""
                />
                <a href="https://drive.google.com/file/d/1elWtInE_eJg1OYQdxqxbsn2whqdP6wjp/view?usp=sharing" target="_blank">
                  <img
                    src={group3}
                    className="img-fluid  imgDoc hover-button--on"
                    alt=""
                  />
                </a>
              </div>
              <span className="catext">WHITEPAPER </span>
              <button className="cabutton ms-2" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">{"- - ->"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDocument;