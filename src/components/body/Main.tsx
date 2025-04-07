import React from "react";
import { useNavigate } from "react-router-dom";

const Main = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className="text-3xl text-center text-white pt-10 relative flex flex-col justify-center items-center"
      style={{
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={
          "https://res.cloudinary.com/dszuqn0vi/image/upload/v1741247205/main_crop_mcmqzm.jpg"
        }
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
