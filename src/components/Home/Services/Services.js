import React from "react";
import ServicesDetails from "../ServicesDetails/ServicesDetails";
import service from '../../../images/car-service.png'
import battery from '../../../images/battery.png'
import maintenance from '../../../images/maintenance.png'
import ac from '../../../images/air-conditioner.png'
import engine from '../../../images/car-engine.png'
import tire from '../../../images/change.png'
import './Services.css'
const serviceData = [
  {
    name: "CAR SERVICE",
    img: service ,
    text:"Affordable car service near you at the best car service centers by experienced mechanics using genuine OEM parts & manufacturer recommended."
  },
  {
    name: "BATTERY",
    img: battery,
    text:"The car battery provides the jolt of electricity necessary to power all the electrical components in your vehicle. Talk about a pretty huge responsibility."
  },
  {
    name: "CAR MAINTENANCE",
    img:  maintenance,
    text:"Properly maintaining your car is key to keeping it in top condition. It can also help ensure your safety, the safety of your passengers and your fellow drivers."
  },
  {
    name: "AC REPAIR",
    img: ac,
    text:"Keep your car’s ac in a perfect condition. Our ac service packages includes ac gas refilling, blower cleaning, cooling coil cleaning, Condenser cleaning."
  },
  {
    name: "Engine Repair",
    img: engine,
    text:"The chain of reactions which achieve that objective is set in motion by a spark , which ignites a mixture of petrol vapour and compressed air inside."
  },
  {
    name: "Tire Change",
    img: tire,
    text:"Whether you need new tyres or wheel alignment & balancing, we provide everything. Increase the life of car's tyres with our wheel care packages"
  },
];
const Services = () => {
  return (
    <section className=" container services-container mt-5" id="services">
      <div className="text-center text">
        <h2>OUR CAR SERVICES</h2>
      </div>
    
        <div className="row mt-5 pt-3">
          {serviceData.map((services) => (
            <ServicesDetails services={services} key={services.name} />
          ))}
        </div>
    
    </section>
  );
};

export default Services;
