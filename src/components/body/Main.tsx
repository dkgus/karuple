import React from "react";
import { useNavigate } from "react-router-dom";

const Main = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className="text-3xl text-center text-white pt-10 relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url("https://lh3.google.com/u/0/d/1o8zsXyxurQsndrHytpDw6tpY2dHIFuyf=w2000-h3556-iv1")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="mb-auto">카러플 Mbti</div>
      <button
        className="btn btn-warning absolute bottom-0 mb-10"
        onClick={() => {
          navigate("/test");
        }}
      >
        시작하기
      </button>
    </div>
  );
};

export default Main;
