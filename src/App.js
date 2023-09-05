import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";

import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";
import MainHomePage from "./pages/MainHomePage";
import Advertisments from "./pages/Advertisments";
import UsedGoodies from "./pages/UsedGoodies";
import Meals from "./pages/Meals";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<MainHomePage />} />
        <Route path="/offers" element={<Offers />} />

        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/editlisting/:listingId" element={<EditListing />} />
        <Route path="/signin" element={<Signin />} />
        
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/contact/:landlordId" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-listing" element={<CreateListing />} />
       
        <Route path="/edloans" element={<Advertisments />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/usedGoodies" element={<UsedGoodies />} />
        <Route
          path="/category/:categoryName/:listingId"
          element={<Listing />}
        />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
