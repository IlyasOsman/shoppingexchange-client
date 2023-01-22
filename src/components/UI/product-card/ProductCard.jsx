import React from "react";


import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price, stores } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  const user = localStorage.getItem("user");

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          { user ?
          <Link to={`/products/${id}`}>{title}</Link>
          :
            <Link to={'/login'}>{title}</Link>
          }
        </h5>
        <div >
          <span className="product__price">From Kshs {price} in {stores.length} stores</span>
        
        </div> 
        <div className="d-flex align-items-centre justify-content-end" >
          <button className="addTOCart__btn button" onClick={addToCart}>
            +
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;