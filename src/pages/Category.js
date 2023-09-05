import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { db } from "./../firebase.config";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem";
import Layout2 from "../components/Layout/Layout2";

const Category = () => {
  const [listing, setListing] = useState("");
  const [lastFetchListing, setLastFetchListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  //fetch listing
  useEffect(() => {
    const fetchListing = async () => {
      try {
        //refrence
        const listingsRef = collection(db, "listings");
        //query
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(1)
        );
        //execute query
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListing(listings);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Unble to fetch data");
      }
    };
    //func call
    fetchListing();
  }, [params.categoryName]);

  //loadmore pagination func
  const fetchLoadMoreListing = async () => {
    try {
      //refrence
      const listingsRef = collection(db, "listings");
      //query
      const q = query(
        listingsRef,
        where("type", "==", params.categoryName),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(10)
      );
      //execute query
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListing((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Unble to fetch data");
    }
  };

  return (
      <>
    <Layout2> 
     
      {/* <div className=" container-fluid">
        <br />
        <center><h1 style={{color:"whitesmoke" , fontSize:"4rem"}}>
          {params.categoryName === "rent"
            ? "Places For Rent"
            : "Plces For Sale"}
        </h1></center>
        <br />
        <br />
        {loading ? (
          <Spinner />
        ) : listing && listing.length > 0 ? (
          <>
            <div>
              {listing.map((list) => (
                <ListingItem listing={list.data} id={list.id} key={list.id} />
              ))}
            </div>
          </>
        ) : (
          <p>No Listing For {params.categoryName} </p>
        )}
      </div> */}
      <div className=" container-fluid">
        <br />
        <center><h1 style={{color:"whitesmoke" , fontSize:"4rem"}}>
          {params.categoryName === "rent"
            ? "Places For Rent"
            : "Places For Sale"}
        </h1></center>
        <br />
        <br />
        {loading ? (
          <Spinner />
        ) : listing && listing.length > 0 ? (
            <div className="container-fluid d-flex align-items-center justify-content-center my-4">
          
            <div className="card d-flex align-items-center justify-content-center" style={{width:"25rem" , minHeight:"20rem" , backgroundColor:"greenYellow", marginTop : "15px"}}>
              {listing.map((list) => (
                
                
                <div className="card-body">
        <ListingItem listing={list.data} id={list.id} key={list.id} />
      </div>
              ))}
            </div>
          
            </div>
        ) : (
          <p>No Listing For {params.categoryName} </p>
        )}
      </div>
      
      <div className="d-flex align-items-center justify-content-center mt-4">
        {lastFetchListing && (
          <button style={{backgroundColor:"greenYellow" , color:"smokewhite" }}
            className="btn  text-center"
            onClick={fetchLoadMoreListing}
          >
            Load More
          </button>
        )}
      </div>
    </Layout2>
    </>
  );
};

export default Category;
