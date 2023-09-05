import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillEyeFill, BsXCircle } from "react-icons/bs";
import Layout from "./../components/Layout/Layout";
import OAuth from "../components/OAuth";
import {  FaHouseUser , FaEyeSlash , FaUser , FaEnvelope  , FaKey , FaGoogle, FaArrowRight, FaUserAstronaut, FaBlind, FaFolder, FaFileSignature } from "react-icons/fa";

import Layout2 from "../components/Layout/Layout2";

import "../CSS/toogleBtn.css";
import Layout3 from "../components/Layout/Layout3";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //loginHandler
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("Login Success");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Email Or Password");
    }
  };
  return (
    <Layout3>
      <div className="d-flex  align-items-center justify-content-center w-120 signUpInText  " >
        <form className="bg-light p-4 w-25" onSubmit={loginHandler} style={{ borderRadius:"30px"}} >
        <h4 className="bg p-2 mt-2 text-dark text-center">  <FaUserAstronaut/> &nbsp; Sign In</h4>

          <div className="mb-2">
            <br />
           <FaEnvelope/> &nbsp; <label htmlFor="exampleInputEmail1" className="form-label" style={{fontSize:"1rem"}} >
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={onChange}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-2">
           <FaKey/>  <label htmlFor="exampleInputPassword1" className="form-label"  style={{fontSize:"1rem"}}> 
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChange}
              className="form-control"
              id="password"
            />
            <span style={{fontSize:"1rem"}}>
        
              Show Password &nbsp;
              <FaEyeSlash 
                className="text ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowPassword((prevState) => !prevState);

                }}
              />
            </span>{" "}
           <br />
           <br />

                <center>
              <p style={{ fontSize:"1.2rem"}}>  <Link style={{color:"#96d40e" , textDecoration:"none" , display:"inline-block" }} to="/forgot-password">  Forgot Password</Link> <FaFileSignature/> </p> 
              </center>
          </div>
      
          <OAuth />
          <br />
          <div className="btnContainer">
          <button  type="submit" className="button">
  
    <div className="button__line" />
    <div className="button__line" />
    <span className="button__text">SignIn</span>
    <div className="button__drow1" />
    <div className="button__drow2" />
    </button>
 
</div>
         
         <br />
      
         <center> <h5>Or New User? Then </h5> </center> 

          <div className="btnContainer">
          <Link to="/signup" className="button">
  
    <div className="button__line" />
    <div className="button__line" />
    <span className="button__text">SignUP</span>
    <div className="button__drow1" />
    <div className="button__drow2" />
    </Link>
 
</div>

        </form>
      </div>
    </Layout3>
  );
};

export default Signin;
