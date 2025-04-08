import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Cart from "../body/img/kart.png";

interface Props {
  index: number;
  loading: boolean;
}

const Header = (props: Props): JSX.Element => {
  const { index, loading } = props;
  const location = useLocation();
  const maxIndex = 12;

  const imageRef = useRef<HTMLImageElement>(null);
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    const barWidth = document.querySelector(".progress")?.clientWidth;
    const length = barWidth / 12;
    const moveImage = () => {
      if (imageRef.current) {
        imageRef.current.style.transition = "transform 0.3s linear";
        imageRef.current.style.transform = `translateX(${
          (length - 1) * currentIndex
        }px)`;
      }
    };

    const intervalId = setInterval(moveImage, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [location.pathname]);

  return location.pathname.includes("/test") ? (
    loading ? null : (
      <header>
        <progress
          className="progress w-full mx-auto"
          style={{ maxWidth: "80%" }}
          value={currentIndex}
          max={maxIndex}
        ></progress>
        <img
          className="kart_img relative left-7"
          src={Cart}
          width={50}
          ref={imageRef}
          alt="car_img"
        />
      </header>
    )
  ) : location.pathname.includes("/result") ? (
    // <header>카러플 MBTI</header>
    <></>
  ) : (
    <></>
  );
};

export default Header;
