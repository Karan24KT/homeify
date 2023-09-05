
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout3 = ({ children }) => {
  return (
    <>
    <Header />
    <main style={{ minHeight: "100vh" , background:"linear-gradient( #006758 ,#108425)" }}>{children}</main>
   
  </>
  )
}

export default Layout3