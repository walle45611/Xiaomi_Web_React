import React from "react";
import { Container } from "react-bootstrap";
import HotCommodity from "./HotCommodity";
import HotProduct from "./HotProduct";
import "./Hot.css"

const Hot = () => {
  return (
    <div className="hot-product">
      <Container>
        <h2 className="hot-title">
          <span>熱賣產品排行</span>
        </h2>
        <div className="hot-product-list">
          {HotCommodity.map((contents) => (
            <HotProduct
              link={contents.Link}
              imgLink={contents.imgLink}
              name = {contents.name}
              id = {contents.id}
              price = {contents.price}
            ></HotProduct>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Hot;
