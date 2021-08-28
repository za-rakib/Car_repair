import React from "react";
import "./Contact2.css";

const Contact2 = () => {
  return (
    <section className="appointment-full img">
      <div className="container-fluid">
        <div className="row d-flex justify-content-end">
          <div className="col-md-12 col-lg-6 col-sm-16 half px-5  py-5 pl-lg-5">
            <span className="subheading">Booking an Appointment</span>
            <h2 className="mb-4">Free Consultation</h2>
            <form action="#" className="appointment">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="form-field">
                      <div className="select-wrap">
                        <select name="" id="" className="form-control input-field">
                          <option value="">Select services</option>
                          <option value="">Change Oil</option>
                          <option value="">Engine Repair</option>
                          <option value="">Battery Replace</option>
                          <option value="">Change Tire</option>
                          <option value="">Tow Truck</option>
                        </select>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Your Name"
                    />
                  </div>
                  <br />
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Vehicle number"
                    />
                       <br />
                  </div>
                </div>
              
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="input-wrap">
                      <div className="icon">
                        <span className="fa fa-calendar"></span>
                      </div>
                      <input
                        type="text"
                        className="form-control input-field"
                        placeholder="Date"
                      />
                         <br />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="input-wrap">
                      <input
                        type="text"
                        className="form-control input-field "
                        placeholder="Time"
                        autocomplete="off"
                      />
                         <br />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group message-field">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      className="form-control "
                      placeholder="Message"
                    ></textarea>
                       <br />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group input-field">
                    <button type="submit" className="btn btn form-btn btn-dark py-3 px-4 form-control">Send message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
