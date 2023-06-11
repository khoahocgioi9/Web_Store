import React from "react";
import "./Cart.scss";
import { data } from "./data";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const totalPrice = () => {
    const selectedProducts = data.slice(0,4)

    const sum = selectedProducts.reduce((sum,product)=>{
        return sum + product.price;
    },0)
  return totalPrice;
}

const Cart = () => {
    const sumPrice = totalPrice();

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0,100)} </p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteForeverIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>{sumPrice}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
