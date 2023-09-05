import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";

import "../CSS/HomePage.css";
import "../Images/mainImg.jpg"
import Layout3 from "../components/Layout/Layout3";
import Layout4 from "../components/Layout/Layout4";
const HomePage = () => {
  const navigate = useNavigate();

  const img1 =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const img2 =
    "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

  return (
    <Layout4>
      {/* <div className="animated-typing">
      <Typed>
       strings = {['Website For The Students' ,'For The Students' , 'For The Students' ]
       
      } typeSpeed = {150}
      backSpeed = {100}
      loop
      </Typed>
      </div> */}
      <section className="homeSection1">
        <div>
          <h1 style={{ color: "white", textAlign: "center", fontSize: '3rem', padding: '2rem' }}>Welcome To Homeify</h1>

          <img className="Home_img1" src={require('../Images/mainImg2.jpg')} alt="Rent" />
        </div>

      </section>



      {/* <Slider /> */}

      <section className="homeSection2">




        <div className="container">
          <div>
            <h1 style={{ color: "black", textAlign: "center", fontSize: '3rem', padding: '2rem' }}>Services Offered</h1>
          </div>
          <div className="mainContainerHyper">


            <div className="containerHyper">
              <div className="cardHyper">
                <div className="image">
                 <a href="/explore"> <img className="bd-placeholder-img card-img-top" src={require('../Images/home.jpg')} alt="Rent" />
</a>
                </div>
                <div className="content">
                {/* background: linear-gradient(  #006758 ,#108425 ); */}
               <a href="/explore" style={{textDecoration:"none" , color:"#006758"}}>  <br /> 
               
               <br />
               <h3 className="card-text"  style={{textDecoration:"none" }}>Appartment </h3>

                  <center >    <p style={{ textAlign: "center", margin: "10px auto " ,color:"black"}}>~Your Comfort Zone</p>
                  </center >
                  
                  </a>
                </div>
              </div>
            </div>
            <div className="containerHyper">
              <div className="cardHyper">


                <div className="image">
                <a href="/Meals">   <img className="bd-placeholder-img card-img-top" src={require('../Images/Meal.png')} alt="food" /></a>

                </div>
                <div className="content">
                <a href="/Meals" style={{textDecoration:"none" , color:"#006758"}}> <br /><br />  <h3  style={{textDecoration:"none" , color:"#006758"}} className="card-text">Meal Services </h3>
                

                  <center >    <p style={{ textAlign: "center", margin: "10px auto " ,color:"black" }}>~Home Made Goodness Delivered.</p>
                  </center >
              
                </a>
                </div>
                
              </div>
            </div>
            <div className="containerHyper">
              <div className="cardHyper">

                <div className="image">
                <a href="/edloans"> <img className="bd-placeholder-img card-img-top" src={require('../Images/loan.jpg')} alt="offers" /> </a> </div>
                <div className="content">
                  
                <a href="/edloans" style={{textDecoration:"none" , color:"#006758"}}> <br /><br /> <h3 className="card-text" style={{textDecoration:"none" }}>Partnership Services</h3>
                  <center><p style={{ textAlign: "center", margin: "10px auto " ,color:"black" }}>~Deals, Offers And Happiness</p></center >
                 
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>





      </section>

      

      <section className="unsiversity" style={{marginBottom:"2px"}}>

        <img className="Home_img5_university" style={{borderRadius:"50px"}} src={require('../Images/uni2.jpg')} alt="unsiversity" />
      </section>
      <section className="homeSection3">
        <div className="whyChoseHomiefy">
          <div>
            <img className="Home_img3" src={require('../Images/choose.jpg')} alt="whyHomeify" />
          </div>
          <div>

            <img className="Home_img4" src={require('../Images/whyHomiefy3.png')} style={{borderRadius:"50px"}} alt="Rent" />
          </div>
        </div>
      </section>

    <br />
    </Layout4>
  );
};

export default HomePage;
