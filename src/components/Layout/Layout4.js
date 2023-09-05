
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout4 = ({ children }) => {
  return (
    <>
    <Header />
    <main style={{ minHeight: "80vh"  }}>{children}</main>
 
  </>
  )
}

export default Layout4