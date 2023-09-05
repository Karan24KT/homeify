import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import { useNavigate, Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css"; 
import "../CSS/Listing.css";
import { FaBed, FaBath , FaCar , FaHome , FaRupeeSign , FaChair , FaLandmark , FaLocationArrow , FaInfoCircle , FaMapMarked} from "react-icons/fa";
import Layout2 from "../components/Layout/Layout2";
import Layout3 from "../components/Layout/Layout3";
//config
SwipeCore.use([EffectCoverflow, Pagination]);

const Listing = () => {
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Layout3>
      <div className="container d-flex align-items-center justify-content-center pt-4">
        <div className="card" style={{ width: "600px" }}>
          <div className="card-header">
          
            {listing.imgUrls === undefined ? (
              <Spinner />
            ) : (
              
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
                {listing.imgUrls.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img className="listing-img"
                      src={listing.imgUrls[index]}
                      height={400}
                      width={800}
                      
                      alt={listing.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className="card-body">
          
          <center><h3> <FaLandmark/> &nbsp;{listing.name}</h3></center>
          <br />
           <div className="spacing2">
            <p> <FaHome/> &nbsp;  Property For : {listing.type === "rent" ? "Rent" : "Sale"}</p>
            <p><FaLocationArrow />  &nbsp; Location ~ {listing.address}</p>

            <p><FaMapMarked />  &nbsp; MapLink ~ <a href={listing.mapLink} target="_blank" rel="noopener noreferrer">{listing.mapLink}</a> </p>
            
            <p><FaBed/> &nbsp;
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <p><FaBath/> &nbsp; 
              {listing.bathrooms > 1
                ? `${listing.bathrooms} bathrooms`
                : "1 Bathroom"}
            </p>
            <p><FaCar/> &nbsp; {listing.parking ? `Parking Available` : "Parking Not Available"}</p>
            <p><FaChair/> &nbsp; {listing.furnished ? `Furnished house` : "Not Furnished"}</p>
            <p>
              <FaInfoCircle /> &nbsp;
              Flat Description : {listing.flatDescription}
              
            </p>
            <br />
            <h3> <FaRupeeSign/> 
              {" "}
              {listing.offer ? listing.discountedPrice : listing.regularPrice} /Month
              
            </h3>
            </div>
          
            <Link
              className="btn btn-success btn-spacing"
              to={`/contact/${listing.useRef}?listingName=${listing.name}`}
            >
              Contact Landlord
            </Link>
          </div>
        </div>
      </div>
      <br />
    </Layout3>
  );
};

export default Listing;
