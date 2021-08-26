import React from "react"
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./HeaderMain.css";
// Slider Image
import image1 from "../../../images/c.webp";
import image2 from "../../../images/cover4.webp";
import image3 from "../../../images/cover1.jpg";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const HeaderMain = () => {
  return (
    <div style={{padding:'0px'}} className="container-fluid">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide
            className="text-center swiper-img"
            style={{ height: "550px", width: "100%" }}
          >
            <img src={image1} alt="car" className="h-100" />
          </SwiperSlide>

          <SwiperSlide
            className="text-center"
            style={{ height: "550px", width: "100%" }}
          >
            <img src={image2} alt="dfklsd" className="h-100" />
          </SwiperSlide>
          <SwiperSlide
            className="text-center"
            style={{ height: "550px", width: "100%" }}
          >
            <img src={image3} alt="dfklsd" className="h-100" />
          </SwiperSlide>
        </Swiper>
      </>

      <main className="header-main">
        <div className="text-center d-flex align-items-center justify-content-center">
          <div className="a text-center">
            <h1 >BEST CAR SERVICE IS <br/> ONE CLICK AWAY</h1>
            <button className="btn header-btn">
              Learn more <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="col-md-4"></div>
      </main> 
    </div>
  );
};

export default HeaderMain;
