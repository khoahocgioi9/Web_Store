import React from "react";
import "./Cart.scss";
import { data } from "./data";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
