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
    const moveImage = () => {
      if (imageRef.current) {
        imageRef.current.style.transition = "transform 0.3s linear";
        imageRef.current.style.transform = `translateX(${24 * currentIndex}px)`;
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

  return location.pathname.includes("/test") ? (
    loading ? null : (
      <header>
        <progress
          className="progress w-56"
          value={index}
          max={maxIndex}
        ></progress>
        <img
          className="kart_img realative left-3"
          src={Cart}
          width={50}
          ref={imageRef}
        />
      </header>
    )
  ) : location.pathname.includes("/result") ? (
    <header>카러플 MBTI</header>
  ) : (
    <></>
  );
};

export default Header;
