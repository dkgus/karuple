import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dao from "./img/dao.jpg";
import Desyni from "./img/desyni.jpg";
import Baejji from "./img/baejji.jpg";
import Eddi from "./img/eddi.jpg";
import Marid from "./img/marid.jpg";
import Sugar from "./img/sugar.jpg";
import Miz from "./img/miz.jpg";
import Mos from "./img/mos.jpg";
import Ilyeong from "./img/ilyeong.jpg";
import Chenchen from "./img/chenchen.jpg";
import Neo from "./img/neo.jpg";
import Naiad from "./img/naiad.jpg";
import Reune from "./img/reune.jpg";
import Hellios from "./img/hellios.jpg";
import Toreu from "./img/toreu.jpg";
import Daisy from "./img/daisy.jpg";

import "./style.css";

interface Props {
  setIndexChecker: (value: number) => void;
}

const Result = (props: Props): JSX.Element => {
  const { setIndexChecker } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  const [colorLine, setColorLine] = useState<string[]>([]);

  const matchType: Record<
    string,
    { image: string; name: string; tag: string[] }
  > = {
    ESFP: { name: "다오", image: Dao, tag: ["열혈", "밝음", "낙관"] },
    INTP: { name: "디지니", image: Desyni, tag: ["부끄럼", "과감"] },
    ISFP: { name: "배찌", image: Baejji, tag: ["단순", "낙관", "게으름"] },
    ISTJ: { name: "에띠", image: Eddi, tag: ["똑똑함", "박학다식", "설계"] },
    INFP: {
      name: "마리드",
      image: Marid,
      tag: ["도도", "낭만", "사랑"],
    },
    ENTJ: { name: "슈가", image: Sugar, tag: ["열정", "승리"] },
    ESTJ: {
      name: "미즈 로두마니",
      image: Miz,
      tag: ["리더", "뛰어난 기술", "고집"],
    },
    ISTP: { name: "모스", image: Mos, tag: ["튜닝 마스터", "손기술", "성실"] },
    ESTP: { name: "일영", image: Ilyeong, tag: ["대범", "거침없음", "명랑"] },
    ENFP: { name: "첸첸", image: Chenchen, tag: ["활발", "친절", "활동적"] },
    ESFJ: { name: "네오", image: Neo, tag: ["정의", "노력"] },
    INFJ: { name: "나이아드", image: Naiad, tag: ["내성적", "희망"] },
    ISFJ: { name: "르네", image: Reune, tag: ["내성적", "친구 좋아"] },
    INTJ: { name: "헬리오스", image: Hellios, tag: ["신비주의"] },
    ENTP: { name: "토르", image: Toreu, tag: ["용감", "자신감", "호쾌", "힘"] },
    ENFJ: { name: "데이지", image: Daisy, tag: ["친절", "관리자", "열정"] },
  };

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
            onClick={() => navigate("/my_result")}
          >
            내가 선택한 답안보기
          </span>
          <span className={btnClass}>전체 유형보기</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
