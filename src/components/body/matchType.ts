import {
  Dao,
  Baejji,
  Desyni,
  Eddi,
  Marid,
  Sugar,
  Miz,
  Mos,
  Ilyeong,
  Chenchen,
  Neo,
  Naiad,
  Reune,
  Hellios,
  Toreu,
  Daisy,
} from "./img";

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

export default matchType;
