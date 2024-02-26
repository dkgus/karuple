import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dao from "./img/dao.jpg";
import Daisy from "./img/daisy.jpg";
import "./style.css";

interface Props {
  setIndexChecker: (value: number) => void;
}

const Result = (props: Props): JSX.Element => {
  const { setIndexChecker } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id ", id);

  const matchType = {
    ESFP: "다오",
    INTP: "디지니",
    ISFP: "배찌",
    ISTJ: "에띠",
    INFP: "마리드",
    ENTJ: "슈가",
    ESTJ: "미즈 로두마니",
    ISTP: "모스",
    ESTP: "일영",
    ENFP: "첸첸",
    ESFJ: "네오",
    INFJ: "나이아드",
    ISFJ: "르네",
    INTJ: "헬리오스",
    ENTP: "토르",
    ENFJ: "데이지",
  };

  const btnClass = "text-sm bg-base-100/50 p-2 rounded ";

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
        <img src={Dao} className="mask mask-circle mx-auto h-full " alt="Dao" />
      </div>
      <div className="text_container flex-1">
        <div>{matchType[id]}</div>
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
