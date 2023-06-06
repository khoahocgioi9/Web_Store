import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://levents.asia/wp-content/uploads/2023/03/z4235418461268_dbd588d10e6eb6c656f3de03faf73e5e-1000x1000.jpg",
    "https://levents.asia/wp-content/uploads/2022/10/z3810485399599_d68c22adf8fc59cbe8ca125d90645f84-1000x1000.jpg",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
          doloremque voluptatibus! Cumque, at est, aspernatur aut porro odio
          nesciunt exercitationem consectetur inventore sunt fugiat fuga
          voluptatem! Ipsa ab optio consequuntur?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className="add">
          <button>
            <AddShoppingCartIcon /> ADD TO CART
          </button>
        </div>
        <div className="links">
          <span>
            <FavoriteIcon /> ADD TO WISH LIST
          </span>
          <span>
            <BalanceIcon /> ADD TO COMPARE
          </span>
        </div>
        <div className="info">
          <p>Vendor: Polo</p>
          <p>Product Type: T-Shirt</p>
          <p>Tag: T-Shirt, Women, Top</p>
        </div>
        <hr />
        <div className="info">
          <p>DESCRIPTION</p>
          <hr />
          <p>ADDITIONAL INFORMATION</p>
          <hr />
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
};
