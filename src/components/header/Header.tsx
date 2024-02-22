import React from "react";
import { useLocation } from "react-router-dom";

const Header = (): JSX.Element => {
  const location = useLocation();

  return location.pathname !== "/" ? <header>카러플 MBTI</header> : <></>;
};

export default Header;
