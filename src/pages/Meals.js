import React from 'react'
import Layout from '../components/Layout/Layout'
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";

import "../CSS/Meal.css";

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
  const usersCollectionRef = collection(db, "meals");

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
    <center> <h1 style={{color:"whitesmoke" , fontSize:"4rem"}}>Meals</h1></center>
     <br />
      
      {users.map((user) => {
        console.log(user)
        return (
          
          <>
                <div class="mealContainer" >
      <div class="box my-4">
        <div class="top">
         <a href= {user.mapLink} target='_blank'></a> <img src={user.MealImg} alt="MealImg" />
          <span
            ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
          ></span>
        </div>
        <div class="bottom">
            {/* MealAvgPricing
120
MealDescription
"Paneer Starter"
MealImg
"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ntycrczy6tddf4uqfs9s"
RestaurantsName
"Nisarga Family restaurant"
ResturantAddress
"Kothrud Pune"
mapLink
"https://goo.gl/maps/xtYkVYzZGbGAAhNs6" */}
          <h3>{user.RestaurantsName}</h3>
          <p>
            {user.MealDescription}
          </p>
          {/* <div class="advants">
            <div>
              <span>Bedrooms</span>
              <div><i class="fas fa-th-large"></i><span>3</span></div>
            </div>
            <div>
              <span>Bathrooms</span>
              <div><i class="fas fa-shower"></i><span>3</span></div>
            </div>
            <div>
              <span>Area</span>
              <div>
                <i class="fas fa-vector-square"></i
                ><span>4300<span>Sq Ft</span></span>
              </div>
            </div>
          </div> */}
          <div class="price">
            <span>{user.ResturantAddress}</span>
            <a href={user.mapLink} style={{fontSize:"1.0"}} target='_blank'>{user.mapLink}</a>
          </div>
          <div class="price">
            <span>Meal Average Pricing</span>
            <span>Rs {user.MealAvgPricing}</span>
          </div>
        </div>
      </div>
     <br />
      
    </div>
          </>
        );
      })}
    </Layout2>
    </div>
  );
}

export default Advertisements;