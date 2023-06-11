import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <h4>THÔNG TIN CÁ NHÂN </h4>
      <div className="form">
        <div className="left">
          <div className="item">
            <input type="text" id="email" placeholder="ĐỊA CHỈ EMAIL" />
          </div>
          <div className="item">
            <input type="password" id="password" placeholder="MẬT KHẨU" />
          </div>
          <div className="item">
            <input
              type="password"
              id="rePassword"
              placeholder="NHẬP LẠI MẬT KHÂU"
            />
          </div>
          <div className="item">
            <input type="text" id="phoneNB" placeholder="SỐ ĐIỆN THOẠI" />
          </div>
        </div>

        <div className="right">
          <div className="item">
            <input type="text" id="firstname" placeholder="TÊN" />
          </div>
          <div className="item">
            <input type="text" id="lastname" placeholder="HỌ" />
          </div>
        </div>
      </div>
      <div className="checkbox">
        <div className="item">
          <input type="checkbox" />
          Tôi muốn nhận bản tin của SHOP qua email
        </div>
        <div className="item">
          <input type="checkbox" />
          Tôi chấp nhận {"  "}
           <Link
            to="https://static.zara.net/static/pdfs/VN/privacy-policy/privacy-policy-vi_VN-20210706.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
             tuyên bố về quyền riêng tư
          </Link>
        </div>
      </div>
      <button>TẠO TÀI KHOẢN</button>
    </div>
  );
};

export default Signup;
