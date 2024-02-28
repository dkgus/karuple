import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { matchType } from "./matchType";

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

  const btnClass = "text-sm bg-base-100/50 p-2 rounded ";

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

    const newBadgeColors = Array.from(
      { length: matchType[id].tag.length },
      () => colors[Math.floor(Math.random() * colors.length)]
    );
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
          className="bg-base-100/50 mx-10 rounded custom_scroll text-base"
          style={{
            height: "10%",
            overflowY: "scroll",
            minHeight: "57%",
            maxHeight: "48vh",
          }}
        >
          {matchType[id].tag.map((item, idx) => (
            <div
              className={`badge border-0 ml-1 rounded`}
              key={item}
              style={{ backgroundColor: colorLine[idx] }}
            >
              # {item}
            </div>
          ))}

          <div className="text-sm">
            다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤
            테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격
            스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오
            성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트
            다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤
            테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격
            스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트다오
            성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트
            다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤
            테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격
            스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오
            성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트
            다오 성격 스크롤 테스트 다오 성격 스크롤 테스트
          </div>
        </div>
      </div>
      {accessType === "P" ? (
        <div className="btn_box absolute bottom-5 w-full">
          <div>
            <span
              className={btnClass + "mr-3 pb-1"}
              onClick={() => {
                setIndexChecker(0);
                navigate("/");
              }}
            >
              테스트 다시하기
            </span>
            <span className={btnClass + "pb-1"}>카카오톡 공유</span>
          </div>
          <div>
            <span
              className={btnClass + "mr-3"}
              onClick={() => navigate(`/my_result/${id}`)}
            >
              내가 선택한 답안보기
            </span>
            <span className={btnClass} onClick={() => navigate("/list")}>
              전체 유형보기
            </span>
          </div>
        </div>
      ) : (
        <div className="btn_box absolute bottom-5 w-full">
          <span className={btnClass} onClick={() => navigate("/list")}>
            전체 유형보기
          </span>
        </div>
      )}
    </div>
  );
};

export default Result;
