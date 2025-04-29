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
        src="https://res.cloudinary.com/dszuqn0vi/image/upload/f_auto,q_auto,dpr_auto/v1745817285/main_crop_mcmqzm_defshe.webp"
        alt="배경 이미지"
        decoding="async"
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
        onClick={() => navigate("/test")}
        style={{
          zIndex: 1,
          transform: "translateY(200px)",
          willChange: "transform",
          width: "200px",
          height: "17vh",
          backgroundImage:
            "url('https://res.cloudinary.com/dfzexvi1u/image/upload/w_200,f_auto,q_auto,dpr_auto/v1744015945/btnImg_nr9hnj.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="시작 버튼"
      />
    </div>
  );
};

export default Main;
