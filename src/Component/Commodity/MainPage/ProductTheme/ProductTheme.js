import React from "react";
import { Card, Col } from "react-bootstrap";

const ProductTheme = (props) => {
  return (
    <Card style={{ width: `234px`,height:`300px` }}>
      <a href={props.Link}>
        <img src={props.imgLink}></img>
      </a>
    </Card>
  );
};

export default ProductTheme;
