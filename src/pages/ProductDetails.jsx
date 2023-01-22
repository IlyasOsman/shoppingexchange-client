import React, { useState, useEffect } from "react";
import { Table } from "reactstrap"
import {  useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import "../styles/product-details.css";
import ProductCard from "../components/UI/product-card/ProductCard";
import Spinner from "../components/UI/spinner/Spinner";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://enigmatic-wildwood-08782.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });

    fetch(`https://enigmatic-wildwood-08782.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProduct(data.filter((item) => item.category === product.category));
      });
  }, [id, product.category]);

  const { title, price, category, desc, image01 } = product;

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (loading) {
    return <Spinner />;
  }


  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Price: <span>Kshs {price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>

                    {/* filling with data from backend */}
                  <Table hover>
                  <thead>
                    <tr>
                      <th>
                        Store
                      </th>
                      <th>
                        Price
                      </th>
                      <th>
                        Shipping fee
                      </th>
                      <th>
                        Link
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.stores.map(store => (
                      <tr key={store.name}>
                        <td>{store.name}</td>
                        <td>{store.price}</td>
                        <td>{store.fee}</td>
                        <td>
                          <button onClick={() => window.open(store.link,'_blank')} className="addTOCart__btn" >visit store</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                </div>

              ) : (
                <div className="tab__content">
                <Table hover>
                  <thead>
                    <tr>
                      <th>
                        Store
                      </th>
                      <th>
                        Average Reviews
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.stores.map(store => (
                      <tr key={store.name}>
                        <td>{store.name}</td>
                        <td>{store.reviews}</td>
                        <td>
                          <button onClick={() => window.open(store.link,'_blank')} className="addTOCart__btn" >visit store</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;