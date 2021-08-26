import React from "react";
import about from "../../../images/about.webp";
import "./About.css";

const About = () => {
  return (
    <div className=" container-fluid about-container">
      <h1 className="text-center about-header mb-5 pt-5">About Our Gerez</h1>
      <div className="row offset-md-1 pb-5">
        <div className="row col-md-5 ml-5 pl-5">
          <img style={{ height: "auto", width: "auto" }} src={about} alt="" />
        </div>
        <div className=" about-text col-md-6 ms-5 ps-5">
          <h1>
            We're Certified and Expert <br />
            Car Servicing Agency
          </h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing <br/>
            pleasure  and praising pain was born will give
          </p>
          <div>
            <div className='about-list'>
              <h4>
                <span className="about-span me-2">01</span> Professional Expert
              </h4>
              <p className="me-5">Quis autem eum reprehenderit voluptate</p>
            </div>
            <div className='about-list'>
              <h4>
                <span  className="about-span me-2">02</span> Award Wining Company
              </h4>
              <p>Quis autem eum reprehenderit voluptate</p>
            </div>
            <div className='about-list'>
              <h4>
                <span  className="about-span me-2">03</span> Quality Service Agency
              </h4>
              <p>Quis autem eum reprehenderit voluptate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
