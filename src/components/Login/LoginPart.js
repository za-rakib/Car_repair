import React from "react";
import "./LoginPart.css";
import google from '../../images/google.jpg'
import facebook from '../../images/facebook.jpg'
const LoginPart = () => {
  return (
    <div>
      <div className="login-part mt-5">
        <h4>Login</h4>
        <p>
          Doesn't have an account yet? <span> Sign Up </span>
        </p>
        <div className="email mt-4">
          <h6>Email Address</h6>
          <div className="input-group  mb-3">
            <input type="text" className=" input-class form-control" />
          </div>
        </div>
        <div className="password">
          <div className="d-flex ">
            <h6>Password</h6>
            <span className="forgot-span float-right ">Forgot password?</span>
          </div>
          <div className="input-group mb-3">
            <input type="password" className=" input-class form-control" />
          </div>
        </div>
        <div className="login-button mt-4">
          {" "}
          <button> Login</button>
        </div>
        <div className=" text-center d-flex pt-3">
            <div className="line"></div>
            <p className="px-2">or login with</p>
            <div className="line"></div>
        </div>
        <div className='socialIcon d-flex justify-content-between'>
        <button className='google'> <img src={google} alt="" /> Google</button>
        <button className='facebook'> <img src={facebook} alt="" /> Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPart;
