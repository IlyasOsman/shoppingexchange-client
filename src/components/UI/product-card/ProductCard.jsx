import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
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

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/products/${id}`}>{title}</Link>
        </h5>
        <div >
          <span className="product__price">From {price} in 2 stores</span>
         
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