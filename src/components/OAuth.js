import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoolgleAuthHandler = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Problem With Google Auth ");
    }
  };

  return (
    <div>
    
      <span className="mt-2">
        Sign {location.pathname === "/signup" ? "Up" : "in"} With Google &nbsp;
        <span onClick={onGoolgleAuthHandler} style={{fontSize:"1.2rem" , cursor:"pointer"}}>
          <FaGoogle/>
        </span>
      </span>
    </div>
  );
};

export default OAuth;
