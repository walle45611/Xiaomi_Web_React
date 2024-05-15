import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./StarCommodity.css";
import starCommodityEle from "./StarCommodityData";

const StarCommodity = () => {
  const starCommodityEles = starCommodityEle.map((list) => (
    <li className={"rainbow-item-" + list.itemNum}>
      <a href={list.Link}>
        <img src={list.imgLink}></img>
      </a>
      <h3 className="title">
        <a href={list.Link}>{list.name}</a>
      </h3>
      <p className="desc">{list.desc}</p>
      <p className="price">{list.price}</p>
    </li>
  ));

  const [marginState, setMarginState] = useState(false);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const time = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    if (count % 8 === 0) {
      setMarginState(!marginState);
    }
    return () => {
      clearInterval(time);
    };
  }, [count]);

  const handleClickPre = () => {
    setCount((count) => 1);
    setMarginState((marginState) => false);
  };
  const handleClickNext = () => {
    setCount((count) => 1);
    setMarginState((marginState) => true);
  };

  return (
    <>
      <div className="home-star-goods">
        <Container>
          <div className="box-hd">
            <h2>
              <spa className="starTitle">明星商品</spa>
            </h2>
            <div className="more">
              <a
                href="javascript:void(0)"
                onClick={handleClickPre}
                className="control"
                style={{ pointerEvents: marginState ? `auto` : `none` }}
              >
                &#60;
              </a>
              <a
                href="javascript:void(0)"
                onClick={handleClickNext}
                className="control"
                style={{
                  pointerEvents: marginState ? `none` : `auto`,
                }}
              >
                &#62;
              </a>
            </div>
          </div>
          <div className="box-bd">
            <div className="warp-test" style={{ overflow: `hidden` }}>
              <ul
                className="xm-carousel-list xm-carousel-col-5-list goods-list rainbow-list J_carouselList"
                style={{
                  width: `2480px`,
                  marginLeft: marginState ? `-1240px` : `0px`,
                  transition: `margin-left 0.5s ease 0s`,
                }}
              >
                {starCommodityEles}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default StarCommodity;
