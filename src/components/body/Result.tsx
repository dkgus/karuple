import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import KakaoBtn from "./kakaoBtn/KakaoBtn";
import { matchType } from "./matchType";
import { colorGenerator } from "./randomColor";

import "./style.css";

interface Props {
  accessType: string;
  setIndexChecker: (value: number) => void;
}

const Result = (props: Props): JSX.Element => {
  const { accessType, setIndexChecker } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  const [colorLine, setColorLine] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem("type", id);
  }, []);

  useEffect(() => {
    const colors: string[] = [
      "#FFF7F1",
      "#FFE4C9",
      "#E78895",
      "#BED1CF",
      "#B784B7",
      "#E493B3",
      "#EEA5A6",
    ];
    const newBadgeColors = colorGenerator(matchType[id].tag.length, colors);

    setColorLine(newBadgeColors);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="img_container flex-1"
        style={{ overflowY: "auto", margin: "0 15px 0px 15px" }}
      >
        <img
          src={matchType[id].image}
          className="mask mask-circle mx-auto h-full "
          alt="Dao"
        />
      </div>
      <div className="text_container flex-1">
        <div>{matchType[id].name}</div>
        <div
          className="bg-white bg-opacity-50 mx-10 rounded custom_scroll text-base"
          style={{
            height: "10%",
            overflowY: "scroll",
            minHeight: "57%",
            maxHeight: "48vh",
          }}
        >
          {matchType[id].tag.map((item, idx) => (
            <div
              className={`badge border-0 ml-1 rounded text-black my-3`}
              key={item}
              style={{ backgroundColor: colorLine[idx] }}
            >
              # {item}
            </div>
          ))}

          <div className="text-sm">
            {matchType[id].desc.split("\n").map((line, index) => (
              <p className="text-sm" key={index}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
      {accessType === "P" ? (
        <div className="btn_box absolute bottom-5 w-full">
          <div>
            <span
              className="my_btn mr-3 pb-1"
              onClick={() => {
                setIndexChecker(0);
                navigate("/");
              }}
            >
              테스트 다시하기
            </span>
            <KakaoBtn id={id} />
          </div>
          <div>
            <span
              className="my_btn mr-3"
              onClick={() => navigate(`/my_result/${id}`)}
            >
              내가 선택한 답안보기
            </span>
            <span className="my_btn" onClick={() => navigate("/list")}>
              전체 유형보기
            </span>
          </div>
        </div>
      ) : (
        <div className="btn_box absolute bottom-5 w-full">
          <span className="my_btn mr-3 pb-1" onClick={() => navigate("/list")}>
            전체 유형보기
          </span>
          <span
            className="my_btn mr-3 pb-1"
            onClick={() => {
              setIndexChecker(0);
              navigate("/");
            }}
          >
            테스트 다시하기
          </span>
        </div>
      )}
    </div>
  );
};

export default Result;
