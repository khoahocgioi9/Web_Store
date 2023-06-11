import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="left">
        <h4 className="top">TRUY CẬP VÀO TÀI KHOẢN CỦA BẠN</h4>
        
        <form className="bot">
          <div>
            <input type="text" id="email" placeholder="Địa chỉ Email" />
          </div>
          <div>
            <input type="password" id="password" placeholder="Mật khẩu" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="right">
        <h4>CẦN MỘT TÀI KHOẢN?</h4>
        <div>
          <Link to="/signup">
            <button>Đăng ký</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
