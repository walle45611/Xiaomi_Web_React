import { Carousel, Container } from "react-bootstrap";
import Star from "./Star/StarCommodity";
import img from "./imgData";
import "./Home.css";

const Home = () => {
  const lists = img.map((list) => (
    <Carousel.Item className="slide">
      <img
        className="d-block w-100 CarouselImg"
        key={list.id}
        src={list.link}
      />
    </Carousel.Item>
  ));

  const onMouseOverHome = (e) => {
    document.querySelector(".nav-category-item").classList.remove("current");
  };
  return (
    <>
      <div className="home-hero-container" onMouseOver={onMouseOverHome}>
        <Container>
          <div className="home-hero">
            <div className="home-hero-slider">
              <Carousel
                className="xm-slider"
                style={{ maxWidth: `100%` }}
                fade={true}
              >
                {lists}
              </Carousel>
            </div>
            <div className="home-hero-sub">
              <ul className="home-promo-list">
                <li>
                  <a href="https://www.mi.com/tw/product/redmi-10c/">
                    <img src="https://i01.appmifile.com/webfile/globalimg/summer/20220811-170355.png?width=296&height=170"></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.mi.com/tw/product/redmi-note-11s/">
                    <img src="https://i01.appmifile.com/webfile/globalweb/picture/20221009-175620.jpg?width=296&height=170" />
                  </a>
                </li>
                <li>
                  <a href="https://event.mi.com/tw/business">
                    <img src="https://i01.appmifile.com/webfile/globalimg/summer/20220811-170352.png?width=296&height=170" />
                  </a>
                </li>
                <li>
                  <a href="https://www.po.co/tw/">
                    <img src="https://i01.appmifile.com/webfile/globalimg/summer/20220811-173533.png?width=296&height=170" />
                  </a>
                </li>
              </ul>
            </div>
            <a
              className="home-invite J_home_coupon"
              href="https://event.mi.com/tw/huiyuanquanyi"
            >
              <img
                className="home-invite-img"
                src="https://i01.appmifile.com/webfile/globalimg/yanganna/member-s-p.png"
              />
            </a>
          </div>
          <Star></Star>
        </Container>
      </div>
    </>
  );
};

export default Home;
