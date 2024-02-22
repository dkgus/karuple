import React, { useState } from "react";
import data from "../asset/data";

const Test = (): JSX.Element => {
  const commonClass = "card mx-auto mt-7 rounded-lg";

  const comonStyle = {
    width: "80%",
    fontSize: "20px",
  };

  return (
    <div>
      <div className={commonClass + " bg-base-100"} style={{ ...comonStyle }}>
        Q1. 질문 질문
      </div>
      <div
        className={commonClass + " bg-base-100/50"}
        style={{ ...comonStyle }}
      >
        답변
      </div>
    </div>
  );
};

export default Test;
