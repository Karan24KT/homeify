
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout2 = ({ children }) => {
  return (
    <>
    <Header />
    <main style={{ minHeight: "80vh" , background:"linear-gradient( #006758 ,#108425)" }}>{children}</main>
    <Footer />
  </>
  )
}

export default Layout2