import React from "react";
import PricingDetails from "./PricingDetails";
import "./Pricing.css";
const pricingData = [
  {
    name: "FIRST PMS",
    price: "78.98",
    text: "PMS is the abbreviation of Preventive Maintenance Schedule in car service. It is one of the universal manuals.",
  },
  {
    name: "ENGINE DIAGNOSTICS",
    price: "99.99",
    text: "An engine diagnostic is a test which is performed to learn more about why an engine is not functioning properly.",
  },
  {
    name: "TOW TRUCK",
    price: "88.91",
    text: "Tow trucks work by fitting brackets in between the wheels of a car and securing the car safely to the truck.",
  },
  {
    name: "CAR WASH",
    price: "49.99",
    text: "Well Experienced Professional for Car Wash and Cleaning; A Prompt and Convenient on time Car Wash Experience.",
  },
];
const Pricing = () => {
  return (
    <section className="price mt-5">
      <div className="container  mt-5">
        <div className="text-center price-text">
          <p>PRICE & PLANS</p>
          <h2>Pricing</h2>
        </div>
        <div className="row pt-2">
          {pricingData.map((services) => (
            <PricingDetails services={services} key={services.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
