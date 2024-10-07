import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
