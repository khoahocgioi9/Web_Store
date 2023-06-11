import React, { useEffect, useState } from "react";
import { data } from "./data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Slider.scss";

// tự chuyển slider sau 5 giây
// => dùng useState để lưu trạng thái của slide hiện tại
// useEffect để thiết lập hàm tự động chuyển slide sau 5 giây
// setTimeout để thiết lập hàm callback sẽ được gọi sau 5 giây tiếp 


//bấm dấu mũi tên sẽ chuyển slider
// => dùng useState lưu trạng thái của slide hiện tại
// tạo 1 event onclick khi click vào nút mũi tên prev thì giá trị slide 
// sẽ giảm đi 1 và sẽ chuyển sang slide cuối nếu currentslide là 1 và ngược lại


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    },5000);
    return () => {
      clearTimeout(timer);
    };
  },[currentSlide, data.length]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
