import { Row, Col, Container } from "react-bootstrap/";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram,ImYoutube } from "react-icons/im";
import {FaLine} from "react-icons/fa";
import "./Footer.css";

const footer=() =>{
  return (
    <div className="site-footer">
      <div className="footer-service">
        <Container>
          <Row className="list-service clearfix">
            <Col className="footer-Item">
              <a>
                <i className="icon-footer-gift icon-footer"></i>
                <div className="info-desc">
                  <strong>免運費</strong>
                  <br></br>
                  <span>全場滿 NT$800</span>
                </div>
              </a>
            </Col>
            <Col className="footer-Item">
              <a>
                <i className="icon-footer icon-footer-express"></i>
                <div className="info-desc">
                  <strong>黑貓宅急便</strong>
                  <br></br>
                  <span>服務升級，限時送達</span>
                </div>
              </a>
            </Col>
            <Col className="footer-Item">
              <a>
                <i className="icon-footer icon-footer-qiye"></i>
                <div className="info-desc">
                  <strong>團購採購通道</strong>
                  <br></br>
                  <span>採購小米好禮專屬通道</span>
                </div>
              </a>
            </Col>
            <Col className="social-media">
              <span>關於我們</span>
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <ImInstagram />
              </a>
              <a>
                <ImYoutube/>
              </a>
              <a>
                <FaLine></FaLine>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-content">
        <Container>
          <Row className="footer-links clearfix">
            <Col>
              <dl className="col-links col-links-first">
                <dt>產品與配件</dt>
                <dd>
                  <ul>
                    <li>
                      <a href="">熱門商品分類</a>
                    </li>
                    <li>
                      <a href="">全部商品分類</a>
                    </li>
                  </ul>
                </dd>
                <dd>
                  <ul>
                    <li>
                      <a href="">官方翻新機</a>
                    </li>
                    <li>
                      <a href="">Ｆ碼通道</a>
                    </li>
                  </ul>
                </dd>
              </dl>
            </Col>
            <Col>
              <dl className="col-links col-links-first">
                <dt>幫助中心</dt>
                <dd>
                  <a href="">購物指南</a>
                </dd>
                <dd>
                  <a href="">付款幫助</a>
                </dd>
                <dd>
                  <a href="">PayPal使用幫助</a>
                </dd>
                <dd>
                  <a href="">分期付款</a>
                </dd>
                <dd>
                  <a href="">常見Q&A</a>
                </dd>
                <dd>
                  <a href="">線上填寫折讓入口</a>
                </dd>
                <dd>
                  <a href="">退款資料補充</a>
                </dd>
              </dl>
            </Col>
            <Col>
              <dl className="col-links col-links-first">
                <dt>客戶支援</dt>
                <dd>
                  <a href="">服務條款及細則</a>
                </dd>
                <dd>
                  <a href="">維修站地點</a>
                </dd>
                <dd>
                  <a href="">售後服務政策</a>
                </dd>
                <dd>
                  <a href="">退貨須知</a>
                </dd>
                <dd>
                  <a href="">配送規範</a>
                </dd>
                <dd>
                  <a href="">使用者指南</a>
                </dd>
                <dd>
                  <a href="">尊享服務</a>
                </dd>
              </dl>
            </Col>
            <Col>
              <dl className="col-links col-links-first">
                <dt>關於小米</dt>
                <dd>
                  <a href="">瞭解小米</a>
                </dd>
                <dd>
                  <a href="">管理團隊</a>
                </dd>
                <dd>
                  <a href="">誠信規範</a>
                </dd>
                <dd>
                  <a href="">投資者關係</a>
                </dd>
                <dd>
                  <a href="">係認中心</a>
                </dd>
              </dl>
            </Col>
            <Col>
              <dl className="col-links col-links-first">
                <dt>小米哪裡買</dt>
                <dd>
                  <a href="">小米之家/小米專賣店</a>
                </dd>
                <dd>
                  <a href="">官方授權通路</a>
                </dd>
                <dd>
                  <a href="">聯絡我們</a>
                </dd>
              </dl>
            </Col>
            <Col>
              <div className="col-contact">
                <p className="phone">02-77255376</p>
                <p className="serv-time">
                  服務時間 09:00-18:00 含節假日
                  <br></br>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="footer-info clearfix">
              <div className="info-text">
                <p>
                  © 2010 - 2022 Xiaomi 版權所有
                  <a href=""> 旗下網站：</a>
                  <a href="">小米商城 </a>
                  <a href="">MIUI</a>
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default footer;
