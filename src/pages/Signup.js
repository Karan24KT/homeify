import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { toast } from "react-toastify";
import { BsFillEyeFill } from "react-icons/bs";
import { FaUserGraduate, FaHouseUser , FaEyeSlash , FaUser , FaEnvelope  , FaKey , FaGoogle, FaArrowRight } from "react-icons/fa";

import "../CSS/toogleBtn.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import OAuth from "../components/OAuth";
import Layout2 from "../components/Layout/Layout2";
import Layout3 from "../components/Layout/Layout3";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitHndler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Signup Successfully !");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  return (
    <Layout3>
      <div className="d-flex  align-items-center justify-content-center w-120 signUpInText" style={{padding:"20px" ,}}>
        <form className="bg-light p-4 w-25" style={{ borderRadius:"30px"}} onSubmit={onSubmitHndler}>
          <h4 className=" p-2 mt-2 text-dark text-center"> <FaUserGraduate/> &nbsp; Sign Up </h4>

          <div className="mb-3" style={{fontSize:"1rem"}} >
          <FaUser/> &nbsp;  <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Name
            </label>
            <input
              type="text"
              value={name}
              className="form-control"
              id="name"
              onChange={onChange}
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-3" style={{fontSize:"1rem"}} >
          <FaEnvelope/> &nbsp; <label htmlFor="exampleInputEmail1" className="form-label">
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
          <div className="mb-3" style={{fontSize:"1rem"}}>
          <FaKey/> &nbsp; <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChange}
              className="form-control"
              id="password"
            />
            <p>
            
              Show Password
              <FaEyeSlash
                className="text ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowPassword((prevState) => !prevState);
                }}
              />
            </p>
          </div>

          
        
          <div>
            <OAuth />
            
          
           
         
     <br />
          </div>

       
          <div className="btnContainer">
          <button  type="submit" className="button">
  
    <div className="button__line" />
    <div className="button__line" />
    <span className="button__text">SignUp</span>
    <div className="button__drow1" />
    <div className="button__drow2" />
    </button>
 
</div>
         
         <br />
      
         <center> <h5>Already a User? Then </h5> </center> 

          <div className="btnContainer">
          <Link to="/signin" className="button">
  
    <div className="button__line" />
    <div className="button__line" />
    <span className="button__text">SignIn</span>
    <div className="button__drow1" />
    <div className="button__drow2" />
    </Link>
 
</div>
        </form>
      </div>
    </Layout3>
  );
};

export default Signup;
