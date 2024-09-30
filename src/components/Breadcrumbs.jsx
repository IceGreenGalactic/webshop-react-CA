import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchSingleProduct } from "../api/apiCalls";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [productTitle, setProductTitle] = useState(null);

  useEffect(() => {
    const getProductTitle = async () => {
      if (pathnames[0] === "SingleProductPage" && pathnames[1]) {
        try {
          const productId = pathnames[1];
          const productData = await fetchSingleProduct(productId);
          setProductTitle(productData.data.title);
        } catch (error) {
          console.error("Error fetching product title:", error);
        }
      }
    };

    getProductTitle();
  }, [pathnames]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/"
          className="text-secondary text-decoration-none">Home</Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          if (value === "SingleProductPage" && productTitle) {
            return (
              <li key={to} className="breadcrumb-item ">
                <Link to={`/SingleProductPage/${pathnames[1]}`}
                className="text-dark text-decoration-none">
                  {productTitle}
                </Link>
              </li>
            );
          }

          if (index === 1 && pathnames[0] === "SingleProductPage") {
            return null;
          }

          return (
            <li key={to} className="breadcrumb-item">
              <Link to={to} className="text-dark text-decoration-none">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
