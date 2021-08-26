import React from "react";
import { useHistory } from "react-router-dom";


import "./ServicesDetails.css";
const ServicesDetails = ({ services }) => {
      const history = useHistory()
      const handleBuy = (servicesType) => {
          history.push(`/dashboard/${servicesType}`);
      }
  return (
    <div className="col-md-4">
      <div className="service-card mr-3 mb-5 ml-5 rounded">
        <div className="p-3">
          <div className="row">
            <div className="col-md-4 mt-3">
              <div className="img-div">
                <img
                  className="img-fluid card-img text-center"
                  src={services.img}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-8 pe-0">
              <div className="card-body p-0">
                <h5 className="card-title">{services.name}</h5>
                <p className="card-text">{services.text}</p>
              </div>
            </div>
          
          </div>
          <div className='text-center pt-3'>
          <button type="button" className="btn service-btn btn-danger" onClick={() => handleBuy(services.servicesType)}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
