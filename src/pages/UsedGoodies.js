import React from 'react'
import Layout from '../components/Layout/Layout'
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useState, useEffect } from "react";

import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Layout2 from '../components/Layout/Layout2';
import { BsBorderRight } from 'react-icons/bs';


function UsedGoodies() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "usedResourses");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
    <Layout2> 
     <br />
     <br />
    <center> <h1 style={{color:"whitesmoke" , fontSize:"4rem"}}>Pre-Owned Resources</h1></center>
      
      {users.map((user) => {
        return (
          
          <div style={{fontSize:"0.8rem"}}>
          
            <div className="container d-flex align-items-center justify-content-center mt-4 pb-4">
            <div className="card" style={{ borderRadius:
              "25px" , width: "600px" } }>
          <div className="card-header">
            
            {" "}
            <div>
              
        <br />
           <center><h2>"{user.productName}"</h2></center>
            </div>
            <br />
            <div>
              <h5>Product Description: </h5>
            <p>{user.productDescription}</p>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                className="mySwipe"
              >
            {user.productImages.map((url, index) => (
                  <span key={index}>
                    <img style={{width: "25rem",
    margin: "auto",
    display: "block",}}
                      src={user.productImages[index]}
                      height={400}
                      width={400}
                      alt={user.productName}
                    />
                  </span>
                ))}

           </Swiper>
           <br />
             <center> <h4>Owner Name : {user.ownerName}</h4>
              <br /> 
              <div style={{fontSize:"1.2rem"}}> 

              <p>Contact via Email : {user.contactOwner}</p>
              <p>Contact via Number : {user.contactNumber}</p>
              </div>
              </center>
           </div>

          </div>
          </div>
          </div>
        );
      })}
    </Layout2>
    </div>
  );
}

export default UsedGoodies