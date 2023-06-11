import React, { useEffect, useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutLinedIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../cart/Cart";
import { Switch } from "antd";
import ThemeContext from "../../context/themeContext";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      // Ngưỡng cuộn xuống khi navbar cố định
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const themeContext = useContext(ThemeContext);

  const handeChangeTheme = (val) => {
    themeContext.setTheme(val ? "light" : "dark");
  };

  return (
    <nav
      className={isSticky ? "navbar sticky" : "navbar"}
      style={{
        backgroundColor: themeContext.theme === "light" ? "#fff" : "#17181c",
      }}
    >
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
            {/* <Switch
              checkedChildren='Light'
              checked={themeContext.theme === "light" ? true : false}
              unCheckedChildren='Dark'
              onChange={val => handeChangeTheme(val)}
            /> */}
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            LAMASTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              HomePage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/blog">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/blog">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/blog">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <div className="personIcon">
              <Link className="link" to="/login">
                <PersonIcon />
              </Link>
            </div>
            <FavoriteIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutLinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </nav>
  );
};

export default Navbar;
