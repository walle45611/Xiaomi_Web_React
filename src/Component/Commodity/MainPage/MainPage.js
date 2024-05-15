import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MainPage.css";
import CommodityContent from "./data/CommodityContent";
import CommodityTheme from "./data/CommodityTheme";

import Product from "./Product/Product";
import ProductTheme from "./ProductTheme/ProductTheme";

const MainPage = () => {
  return (
 
    <div className="home-main">
    <Container>
      <h2 className="home-title">
        <span>智慧科技與家庭</span>
      </h2>
      <div className="all-product">
        <div className="product-theme">
          {CommodityTheme.map((contents) => (
            <ProductTheme
              Link={contents.Link}
              imgLink={contents.imgLink}
            ></ProductTheme>
          ))}
        </div>
        <div className="product">
          {CommodityContent.map((contents) => (
            <Product
              flags={contents.flags}
              Link={contents.Link}
              imgLink={contents.imgLink}
              name={contents.name}
              price={contents.price}
            ></Product>
          ))}
        </div>
      </div>
    </Container>
  </div>
    );
};

export default MainPage;
