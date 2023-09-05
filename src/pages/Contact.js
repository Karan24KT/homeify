import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout3 from "../components/Layout/Layout3";
import Layout2 from "../components/Layout/Layout2";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [landlord, setLandlord] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Unble to ftech data");
      }
    };
    getLandlord();
  }, [params.landlordId]);
  return (
    <Layout2>
      <div className=" container  ">
        <br />
       <center><h1 style={{color:"white"}}>Contact Details</h1></center> 
        <div>
          {landlord !== "" && (
            <main>
              <h2 style={{color:"whitesmoke"}}>Name : {landlord?.name}</h2>

              {/* <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  value={message}
                  id="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <label htmlFor="floatingTextarea"> your message</label>
              </div> */}
              <a target="_blank"
                href={`mailto:${landlord.email}?Subject=${searchParams.get(
                  "listingName"
                )}&body=${message}`}
              >
                <button className="btn btn-primary mt-2">Send Message via Mail</button>
              </a>
            </main>
          )}
        </div>
      </div>
    </Layout2>
  );
};

export default Contact;
