import React from "react";
import Image from "../../assets/images/hidden.jpeg";

const PageNotFound = () => {
  return (
    <div className="col-10 m-auto">
      <div className="m-auto text-center">
        <div className="mt-5 m-auto col-10 col-md-8 col-lg-6">
          <h1 className="mt-5">404 </h1>
          <h2>Page not found!</h2>
          <img
            className="col-10 m-auto col-xl-6"
            src={Image}
            alt="monster hiding"
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
