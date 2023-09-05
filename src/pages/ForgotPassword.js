import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import Layout2 from "../components/Layout/Layout2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
      navigate("/signin");
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  };
  return (
    <Layout2>
      <div className="container ">
        <br />
        <br />
        <br />
        <center><h1 style={{color:"whitesmoke"}}>Reset Your Password</h1></center>
        <div className="d-flex  align-items-center justify-content-center w-120  " style={{padding:"45px"}}>
        <form  className="bg-light p-4 w-50" onSubmit={onSubmitHandler} style={{ borderRadius:"20px"}}>
          <div className="container mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              reset
            </button>
            <Link to="/signin">Sign In</Link>
          </div>
        </form>
        </div>
      </div>
    </Layout2>
  );
};

export default ForgotPassword;
