import React from "react";
import { Card } from "react-bootstrap";

const HotProduct = (props) => {
  return (
    <Card style={{ width: `234px`, height: `300px` }}>
      <div className="flag">
          <div className={"flag-item-"+props.id}>{props.id}</div>
      </div>

      <a href={props.link}>
        <img src={props.imgLink}></img>
      </a>
      <h3 className="title">
        <Card.Link src={props.link}>{props.name}</Card.Link>
      </h3>
      <p className="price">{props.price}</p>
    </Card>
  );
};

export default HotProduct;
