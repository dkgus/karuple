import React from "react";
import { useNavigate } from "react-router-dom";
import Dao from "./img/dao.jpg";
import "./style.css";

interface Props {
  setIndexChecker: (value: number) => void;
}

const Result = (props: Props): JSX.Element => {
  const { setIndexChecker } = props;
  const navigate = useNavigate();
  const btnClass = "text-sm bg-base-100/50 p-2 rounded ";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="img_container flex-1"
        style={{ overflowY: "auto", margin: "0 15px 0px 15px" }}
      >
        <img src={Dao} className="mask mask-circle mx-auto h-full " alt="Dao" />
      </div>
      <div className="text_container flex-1">
        <div>다오</div>
        <div
          className="bg-base-100/50 mx-10 rounded custom_scroll text-base"
          style={{
            height: "10%",
            overflowY: "scroll",
            minHeight: "57%",
            maxHeight: "48vh",
          }}
        >
          다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤
          테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격
          스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오
          성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트
          다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤
          테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격
          스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트다오 성격
          스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오
          성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트
          다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤
          테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오 성격
          스크롤 테스트 다오 성격 스크롤 테스트 다오 성격 스크롤 테스트 다오
          성격 스크롤 테스트 다오 성격 스크롤 테스트
        </div>
      </div>
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
          <span className={btnClass + "mr-3"}>내가 선택한 답안보기</span>
          <span className={btnClass}>전체 유형보기</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
