import React, { useState } from "react";
import data from "../asset/data";
import { useNavigate } from "react-router-dom";

const Test = (): JSX.Element => {
  const style = {
    width: "80%",
    fontSize: "20px",
    class: "card mx-auto mt-7 rounded-lg",
  };
  const navigate = useNavigate();

  const [idx, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="loading loading-dots loading-md absolute top-1/3"></span>
          <div className="absolute top-1/2">결과를 산출중입니다.</div>
        </div>
      ) : (
        <>
          <div className={style.class + " bg-base-100"} style={style}>
            Q{data[idx].id}. {data && data[idx].question}
          </div>
          <div
            className={style.class + " bg-base-100/50"}
            style={style}
            onClick={() => {
              if (idx + 1 !== data.length) {
                setIndex((prev) => prev + 1);
              } else {
                setLoading(true);
                setTimeout(() => {
                  navigate("/result/1");
                }, 3000);
              }
            }}
          >
            답변
          </div>
        </>
      )}
    </div>
  );
};

export default Test;
