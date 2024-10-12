import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSingleProduct } from "../../api/apiCalls";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbWrapper,
  BreadcrumbList,
} from "./Breadcrumbs.styles";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [productTitle, setProductTitle] = useState(null);

  useEffect(() => {
    const getProductTitle = async () => {
      if (pathnames[0] === "product" && pathnames[1]) {
        try {
          const id = pathnames[1];
          const productData = await fetchSingleProduct(id);
          setProductTitle(productData.data.title);
        } catch (error) {
          console.error("Error fetching product title:", error);
        }
      }
    };

    getProductTitle();
  }, [pathnames]);

  const productPath = `/product/${pathnames[1]}`;

  return (
    <BreadcrumbWrapper className="col-10 m-auto" aria-label="breadcrumb">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isActive =
            location.pathname === to ||
            (value === "product" &&
              productTitle &&
              location.pathname === productPath);

          if (value === "product" && productTitle) {
            return (
              <BreadcrumbItem key={to}>
                <BreadcrumbLink
                  to={productPath}
                  className={isActive ? "active" : ""}
                >
                  {productTitle}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          }

          if (index === 1 && pathnames[0] === "product") {
            return null;
          }

          return (
            <BreadcrumbItem key={to}>
              <BreadcrumbLink to={to} className={isActive ? "active" : ""}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbWrapper>
  );
}

export default Breadcrumbs;
