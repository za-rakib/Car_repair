import React from "react";
import "./PricingDetails.css";
const PricingDetails = ({ services }) => {
  return (
    <div className="col-md-3 col-lg-3 py-5 mb-5">
      <div className=" pricing-card rounded">
        <div className="p-3">
          <div className="ps-4">
            <div className="excerpt d-block pt-3 mb-3">{services.name}</div>
            <div className="mb-4">
              <span className="price-amount">
                <sup className='me-1'>$</sup>
                {services.price}
              </span>
            </div>
            <div className="pricing-text">
              <p>{services.text}</p>
            </div>
          </div>
          <div className="mb-3 text-center">
            <button href="/" className="btn w-75 price-btn py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
