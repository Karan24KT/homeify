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


function Advertisements() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "loanAdvertisement");

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
    <center> <h1 style={{color:"whitesmoke" , fontSize:"4rem"}}>Offers & Promotions</h1></center>
     <br />
      
      {users.map((user) => {
        return (
          
          <div>
          
            <div className="container d-flex align-items-center justify-content-center mt-4">
            <div className="card" style={{ width: "600px" , borderRadius:"25px" }}>
          <div className="card-header">
            
            {" "}
            <div>
              
        <br />
           <center><h2>{user.bankName}</h2></center>
            </div>
            <div>
          <br />
          <h3>Loan Decription : </h3>
            <p> {user.loanDescription}</p>
            </div>
            
            {user.loanAdvertisementImg.map((url, index) => (
                  <a target='_blank' key={index} href={user.bankWebsite}>
                    <img style={{width: "35rem",
    margin: "auto",
    display: "block",}}
                      src={user.loanAdvertisementImg[index]}
                      height={400}
                      width={400}
                      alt={user.bankName}
                    />
                  </a>
                ))}

           
           <br />
           <br />
              <h2>Interest Rate :- {user.interestRate}</h2>
              <br />
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

export default Advertisements;