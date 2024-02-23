import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
interface Props {
  index: number;
  loading: boolean;
}
const Header = (props: Props): JSX.Element => {
  const { index, loading } = props;
  const location = useLocation();
  const maxIndex = 12;

  return location.pathname.includes("/test") ? (
    loading ? null : (
      <header>
        <progress
          className="progress w-56"
          value={index}
          max={maxIndex}
        ></progress>
      </header>
    )
  ) : location.pathname.includes("/result") ? (
    <header>카러플 MBTI</header>
  ) : (
    <></>
  );
};

export default Header;
