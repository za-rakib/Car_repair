import React from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";
import logo from '../../../images/logo-2.PNG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav  style={{padding:'0px'}} className="navbar main-nav navbar-expand-lg sticky-top active">
     <div className="container-fluid">
     <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2"> <FontAwesomeIcon className="nav-icon" icon={faBars} /></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul>
            <div className="name lav-logo mt-3">
             <img style={{height:"60px", width:'100px'}} src={logo} alt="" />
            </div>
          </ul>
        <ul className="navbar-nav ms-auto nav">
          <li className="nav-item active">
            <Link className="nav-link mr-3" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-3" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/project">
             Project
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/contactUs">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-3" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
     </div>
    </nav>
  );
};

export default Navbar;
