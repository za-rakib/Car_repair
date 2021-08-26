import React from "react";
import service from "../../../images/service.jpg";
import {
  faWrench,
  faUserCog,
  faCarAlt,
  faMapMarkerAlt,
  faArrowRight,
  faDigitalTachograph
} from "@fortawesome/free-solid-svg-icons";
import "./Offer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OfferItem from "./OfferItem/OfferItem";

//fake data
const Items = [
  {
    icon: faCarAlt,
    text: "Auto Engine Servicing",
  },
  {
    icon: faMapMarkerAlt,
    text: "Diagnostic Tests",
  },
  {
    icon: faUserCog,
    text: "Vaccume  Cleaning ",
  },
  {
    icon: faWrench,
    text: "Interior Cleaning",
  },
  {
    icon: faDigitalTachograph,
    text: "Car AC Repair",
  },
];

const Offer = () => {
  return (
    <section className="container-fluid offer-container mt-5 pb-5">
        {/* offer header */}
      <div className="text-center Offer-header-text pt-5 mb-5">
        <h4>What We Offer</h4>
        <h2 className='mb-5 pb-5 mt-3'>We Provide Quality Service</h2>
      </div>

      <div className="row">
          {/* service item */}
        <div className="col-md-3 offset-md-1">
          {Items.map((item) => (
            <OfferItem item={item} />
          ))}
        </div>
         {/* service image */}
        <div className="col-md-4">
          <img
            style={{ height: "auto", width: "400px" }}
            src={service}
            alt=""
          />
        </div>
        {/* offer text part */}
        <div className="col-md-3 offer-part mb-5 pb-2">
          <div>
            <h3 className=" ms-2 mt-5 pt-3 mb-3">
              We have 25 years of experience in auto servicing
            </h3>
            <p className="ms-2 mb-3">
              Car Lovers Automotive Inc. comprises of highly qualified personnel
              always prepared eager to meet your every automotive needs.
            </p>
            <ul className="service-list mt-4 mb-5">
              <li>Tire and while</li>
              <li>Drivability Problem </li>
              <li>Automotive Filters</li>
            </ul>
            <button type="button" className=" mb-5 mt-2 ms-4 offer-btn btn ">
              Learn More{" "}
              <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
