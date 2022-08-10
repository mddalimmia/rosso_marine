import Navbar from "../navbar";
import Footer from "../Footer";
import React, { Children } from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      {Children}
      <Footer />
    </>
  );
};

export default Layout;
