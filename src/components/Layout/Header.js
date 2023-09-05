import React from "react";
import { Link } from "react-router-dom";
import {  FaHome  } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg"  style={{color:"white" , background:"#006857" , margin:"2px 0 0 0"}} >
        <div className="container">
          <Link className="navbar-brand" style={{fontSize:"1.4rem" , color:"white"}} to="/">
           <FaHome/> Homeify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" style={{fontSize:"1.4rem" , color:"white"}} aria-current="page" to="/explore">
                  Explore
                </Link>
              </li>
              
             
              <li className="nav-item">
                <Link className="nav-link" style={{fontSize:"1.4rem" , color:"white"}} to="/usedGoodies">
                  Resourses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{fontSize:"1.4rem" , color:"white"}} to="/Meals">
                  Meals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{fontSize:"1.4rem" , color:"white"}} to="/edloans">
                Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  style={{fontSize:"1.4rem" , color:"white"}} to="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Header;
