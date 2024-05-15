import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  return (
    <Card style={{ width: `234px`, height: `300px` }}>
      <div className="flag">
        <div className="flags-list">
          <div className="flag-saleoff">{props.flags}</div>
        </div>
      </div>

      <a href={props.Link}>
        <img src={props.imgLink}></img>
      </a>
      <h3 className="title">
        <Card.Link src={props.Link}>{props.name}</Card.Link>
      </h3>
      <p className="price">{props.price}</p>
    </Card>
  );
};

export default Product;
