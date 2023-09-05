import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";

import "../CSS/HomePage.css";
import "../Images/mainImg.jpg"
import Layout2 from "../components/Layout/Layout2";
const MainHomePage = () => {
    const navigate = useNavigate();
    const img1 =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const img2 =
    "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

  return (
    <>

    <Layout2>
    
        <section className="toRentOrSale" >


<div className="container" >
 
  <h3 style={{ color: "white", textAlign: "center", fontSize: '3rem', padding: '2rem' }}>"Categories"</h3>
  <br />

  <div className="toRentOrSaleCont">
   
      <div className="Imagecontainer">
        <img src={img1} alt="Rent" style={{ width: "100%" , borderRadius:"25px" }} />
        <button
          className="btn"
          onClick={() => navigate("/category/rent")}
        >
          TO RENT
        </button>
      </div>
    
 
      <div className="Imagecontainer">
        <img src={img2} alt="Rent" style={{ width: "100%" , borderRadius:"25px" }} />
        <button
          className="btn"
          onClick={() => navigate("/category/sale")}
        >
          TO SALE
        </button>
      </div>
      
    </div>
    </div>

</section>

</Layout2>
    </>
  )
}

export default MainHomePage;