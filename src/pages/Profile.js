import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase.config";
import { FaEdit, FaArrowAltCircleRight } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import ListingItem from "../components/ListingItem";
import Layout2 from "../components/Layout/Layout2";

import "../CSS/profileBtn.css";
import Layout3 from "../components/Layout/Layout3";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  //useeffect for getting data
  useEffect(() => {
    const fetchUserListings = async () => {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("useRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      console.log(querySnap);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      console.log(listings);
      setListings(listings);
      setLoading(false);
    };
    fetchUserListings();
  }, [auth.currentUser.uid]);
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const logoutHandler = () => {
    auth.signOut();
    toast.success("Successfully Logout");
    navigate("/signin");
  };

  //onChange
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  //submit handler
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, { name });
        toast.success("User Updated!");
      }
    } catch (error) {
      console.log(error);
      toast("Something Went Wrong");
    }
  };

  //delete handler
  const onDelete = async (listingId) => {
    if (window.confirm("Are You Sure  want to delete ?")) {
      // await deleteDoc(doc, (db, "listings", listingId));
      await deleteDoc(doc(db, "listings", listingId));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.success("Listing Deleted Successfully");
    }
  };

  //edit handler
  const onEdit = (listingId) => {
    navigate(`/editlisting/${listingId}`);
  };
  return (
    <Layout3>
      <br />
      <br />
      <div className="container   ">
     <center> <h1 style={{color:"whitesmoke"}}>User Profile Details</h1> </center> 
        
      <br />
      </div>
      <div className="container card" style={{ width: "18rem" , borderRadius:"25px" }}>
        <div className="card-header">
          <div className="d-flex justify-content-between mt-2">
            <br />
            <p>Your Profile </p>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState);
              }}
            >
              {changeDetails ? (
                <MdDoneOutline color="green" />
              ) : (
                <FaEdit color="red" />
              )}
            </span>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={onChange}
                disabled={!changeDetails}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={onChange}
                disabled={!changeDetails}
              />
            </div>
          </form>
          <br />
          <div className="btnContainer">
          <button  onClick={logoutHandler} className="button">
  
    <div className="button__line" />
    <div className="button__line" />
    <span className="button__text"  >Logout</span>
    <div className="button__drow1" />
    <div className="button__drow2" />
    </button>
    <br />
</div>
        </div>
      </div>


          
<br />
      

      
     

      <div className="btnContainer2">
      <Link to="/create-listing" className="button2">
  
    <div className="button2__line" />
    <div className="button2__line" />
    <span className="button2__text"  >Sell or Rent Your Home</span>
    <div className="button2__drow1" />
    <div className="button2__drow2" />
    </Link>
    

      
      <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdojZAhu1a5pSVD8X6bXfoseqepstdK_e80TZh-RQZVVLY4EA/viewform"  className="button2">
  
    <div className="button2__line" />
    <div className="button2__line" />
    <span className="button2__text"  >Sell Your Used Resourses</span>
    <div className="button2__drow1" />
    <div className="button2__drow2" />
    </a>
  
</div>


      <div className="">
        {listings && listings?.length > 0 && (
          <>
          <br />
          <br />
            <center><h2 style={{background:"#0A7938" , color:"whitesmoke" , fontSize:"2.5rem" ,  padding:"1.2rem"}}>"Your Listings"</h2></center>
          <br />
            <div>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                  
                />
                
              ))}
              
            </div>
            
            <br />
          </>
        )}
      </div>
    </Layout3>
  );
};

export default Profile;
