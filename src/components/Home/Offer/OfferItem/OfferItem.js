import React from "react";
import './OfferItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OfferItem = ({ item }) => {
  return (
    <div>
      <div className="mr-3 mb-4 pt-4 offerCard d-flex hvr-shutter-in-vertical">
        <FontAwesomeIcon className="me-3 offer-icon ms-3 fa-3x offerIcon" icon={item.icon} />
        <h4 className='mt-2 offer-text'>{item.text}</h4>
      </div>
    </div>
  );
};

export default OfferItem;
