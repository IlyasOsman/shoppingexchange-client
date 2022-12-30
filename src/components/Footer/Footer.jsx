import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>ShoppingExchange</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">LET US HELP YOU</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Report a Product</span>
                <p>Advertise with us</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>About us</span>
                <p>Terms and condition</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Nairobi, West-3100, Kenya</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0712345678</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright @ 2022. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
              <a href="http://www.youtube.com" target='_blank' rel="noreferrer" ><i class="ri-facebook-line"></i></a>
              </span>

              <span>
                <a href="http://www.youtube.com" target='_blank' rel="noreferrer"><i class="ri-github-line"></i></a>
              </span>

              <span>
                <a href="http://www.youtube.com" target='_blank' rel="noreferrer"><i class="ri-youtube-line"></i></a>
              </span>

              <span>
                <a href="http://www.linkedin.com" target='_blank' rel="noreferrer" ><i class="ri-linkedin-line"></i></a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;