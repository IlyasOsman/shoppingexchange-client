import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";


import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Order and get your food delivered within minutes at your doorstep.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Get the best dine in experience around",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Order food and pick it up at your convenient time.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotDeal, setHotDeal] = useState([]);

  useEffect(() => {
    const filteredDeal = products.filter((item) => item.category === "Electronics");
    const sliceDeal = filteredDeal.slice(0, 4);
    setHotDeal(sliceDeal);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "FASHION") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fashion"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "ELECTRONICS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Electronics"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BEAUTY") {
      const filteredProducts = products.filter(
        (item) => item.category === "Beauty"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Make a product comparison</h5>
                <h1 className="mb-4 hero__title">
                  <span>CONFUSED?</span> Access all <br /> products from
                  <span> online markets</span>
                </h1>

                <p>
                Welcome to Shopping Exchange, the ultimate online shopping destination where you can find all of your favorite products from the most 
                popular online markets in one convenient location. Whether you're 
                looking for the latest fashion trends, the newest technology, or anything in between, Shopping Exchange 
                makes it easy for you to find exactly what you're looking for. 
                With our user-friendly interface, you can browse and compare products, read reviews, and make purchases with just a few clicks. 
                Start shopping now and experience the convenience and simplicity of Shopping Exchange.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Check now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__products-btn">
                    <Link to="/products">See all products</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    compare shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">We provide you with latest</h5>
              <h2 className="feature__title">Products comparison from </h2>
              <h2 className="feature__title">
                reliable <span>online store</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Compare prices from the most reliable and popular online stores and find amazing discounts and offers available.
              </p>
              <p className="feature__text">
                Get the best prices in the market and save more{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Products</h2>
            </Col>

            <Col lg="12">
              <div className="product__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "productBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "FASHION" ? "productBtnActive" : ""
                  } `}
                  onClick={() => setCategory("FASHION")}
                >
                  Fashion
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "ELECTRONICS" ? "productBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ELECTRONICS")}
                >
              
                  Electronics
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BEAUTY" ? "productBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BEAUTY")}
                >
                  Beauty
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>shoppingExchange?</span>
                </h2>
                <p className="tasty__treat-desc">
                Shopping Exchange is the ultimate online shopping destination because it allows you to access all of your favorite 
                products from the most popular online markets in one convenient location. With our user-friendly interface, you can easily 
                browse and compare products, read reviews, and make purchases with just a few clicks. 
                Our platform saves you time and effort by eliminating the need to navigate multiple websites, and it also helps you find the best deals and discounts available.
                Shopping Exchange also provides a secure and reliable platform for making transactions and ensuring the safety of your personal information. With its convenience 
                and simplicity, Shopping Exchange makes online shopping easier and more enjoyable than ever before.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Check cheap and quality products
                    </p>
                    <p className="choose__us-desc">
                      Find the cheapest quality products from trusted vendors in the market save money.
                    </p> 
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                     Our team is always dedicated to ensure users get the best 
                     experience and we are always online to help with any issue.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Reliable store {" "}
                    </p>
                    <p className="choose__us-desc">
                      Our products meet the highest standards from the most trusted vendors.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Deals</h2>
            </Col>

            {hotDeal.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  We offer the best price comparison out there but we shall let you be the judge of that.
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;