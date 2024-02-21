import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./img/main_img.jpg";

const Main = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className="text-3xl text-center text-white pt-10 relative flex flex-col justify-center items-center"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={img}
        //src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        //https://lh3.google.com/u/0/d/1o8zsXyxurQsndrHytpDw6tpY2dHIFuyf=w2000-h3556-iv1
        alt="배경 이미지"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div className="mb-auto z-50 text-4xl">카러플 Mbti</div>
      <button
        style={{ height: "30px" }}
        className="btn btn-sm btn-warning absolute bottom-0 mb-10 text-2xl font-light"
        onClick={() => {
          navigate("/test");
        }}
      >
        START
      </button>
    </div>
  );
};

export default Main;
