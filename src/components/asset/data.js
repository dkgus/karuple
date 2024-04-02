import {
  China,
  FactoryOut,
  Factory,
  Gangnam,
  Hawaii,
  Istanbul,
  London,
  NewYork,
  Singapore,
  Village,
  Japan,
  Tomb,
} from "../body/img";

const data = [
  {
    id: 1,
    question:
      "오늘 처음 게임을 시작한 당신, 갑자기 같은 팀원이 느리다고 욕을한다면?",
    type: "third",
    src: China,
    answers: [
      {
        idx: 0,
        text: "1. 오늘 시작한 게임이기 때문에 신경 쓰지 않는다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 그래도 그렇게 까지 욕을 할 일인가  신경이 쓰인다.",
        point: -1,
      },
    ],
  },
  {
    id: 2,
    question: "카트에 푹 빠진 당신, 당신의 스타일은?",
    type: "fourth",
    src: FactoryOut,
    answers: [
      {
        idx: 0,
        text: "1. 몇 달에 걸쳐 꾸준히 게임 캐릭터를 키운다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 몇 주 동안 미친 듯이 카트를 하고 접는다.",
        point: -1,
      },
    ],
  },
  {
    id: 3,
    question: "당신이 더 흥미를 갖는 것은 무엇인가요?",
    type: "second",
    src: Gangnam,
    answers: [
      {
        idx: 0,
        text: "1. 카트의 성능과 더 좋은 주행 테크닉",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 아기자기하고 예쁜 맵과 화려한 그래픽",
        point: -1,
      },
    ],
  },
  {
    id: 4,
    question: "게임을 하다보니 자꾸만 지고있다. 이때 당신의 반응은?",
    type: "third",
    src: Factory,
    answers: [
      {
        idx: 0,
        text: "1. 다른 사람들은 어떻게 기술을 사용하는지 궁금해진다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 연속으로 지니까 속상해서 게임이 하고 싶지 않다.",
        point: -1,
      },
    ],
  },
  {
    id: 5,
    question: "간만에 여유시간이 생겨 카트가 생각난 당신, 이때 당신의 행동은?",
    type: "first",
    src: Hawaii,
    answers: [
      {
        idx: 0,
        text: "1. 부족했던 맵이나, 해보고 싶었던 기술 위주로 혼자 연습한다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 주변에 친한 친구들에게 게임 하자고 불러낸다.",
        point: -1,
      },
    ],
  },
  {
    id: 6,
    question: "새로운 맵에 들어온 당신, 이때 당신에게 어떤것이 더 중요한가요?",
    type: "second",
    src: Istanbul,
    answers: [
      {
        idx: 0,
        text: "1. 눈 앞에 있는 함정을 피하고 더 빠른 길을 찾는 것이 중요하다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 맵 전체의 구조를 이해하는것이 더 중요하다.",
        point: -1,
      },
    ],
  },
  {
    id: 7,
    question:
      "카트에서 오늘  처음 게임을 한 팀원이 나한테 친추를 걸어온다. 이때 나의 반응은?",
    type: "first",
    src: London,
    answers: [
      {
        idx: 0,
        text: "1. 모르는 사람의 친추는 어색해서든, 관심이 없어서든  일단 받지 않는다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 딱히 거절할 이유가 없기 때문에 흔쾌히 받아준다.",
        point: -1,
      },
    ],
  },
  {
    id: 8,
    question: "눈 앞에서 1등을 놓친 당신에게 더 화나는 것은?",
    type: "fourth",
    src: NewYork,
    answers: [
      {
        idx: 0,
        text: "1. 게임 도중 치명적인 실수를 한 나 자신",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 아까부터 1, 2등을 다투면서 나를 밀고 1등을 한 유저",
        point: -1,
      },
    ],
  },
  {
    id: 9,
    question: "랭킹전에서 1등을 한 당신, 이때 반응은?",
    type: "first",
    src: Singapore,
    answers: [
      {
        idx: 0,
        text: "1. 유저 중에 실력이 좋았던 사람의 카트와 펫의 스펙을 스캔한다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 캡쳐를 하고 캡쳐본을 친구들에게 자랑한다.",
        point: -1,
      },
    ],
  },
  {
    id: 10,
    question:
      "대망의 승급전, 팀원의 실수로 팀킬이 되는 아이템을 맞고 지게 된 당신, 팀원이 게임이 끝난 뒤 사과한다면?",
    type: "third",
    src: Village,
    answers: [
      {
        idx: 0,
        text: "1. 기술적으로 부족한 부분을 조언을 해준다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 고의가 아니였기때문에 이해하고 넘어간다.",
        point: -1,
      },
    ],
  },
  {
    id: 11,
    question:
      "딱 한 번 해 본 신 맵에 들어온 당신, 앞에서 달리던 유저가 갑자기 엉뚱한 길로 가기 시작한다. 이때 당신의 행동은?",
    type: "fourth",
    src: Japan,
    answers: [
      {
        idx: 0,
        text: "1. 저 유저가 길을 모르는건지 알 수 없으므로 일단 내가 알던 길로 간다.",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 히든 맵을 찾은 것 같다는 생각이 들어서 따라가본다.",
        point: -1,
      },
    ],
  },
  {
    id: 12,
    question:
      "어떤 유저의 잘 꾸며놓은 마이룸에 구경을 가게 된 당신, 이때 더욱 눈길이 가는것은?",
    type: "second",
    src: Tomb,
    answers: [
      {
        idx: 0,
        text: "1. 분위기에 어울리는 감각있고 센스있는 인테리어 아이템들",
        point: 1,
      },
      {
        idx: 1,
        text: "2. 마이룸의 컨셉을 잘 잡아놓은 통일성 있는 구조",
        point: -1,
      },
    ],
  },
];

export default data;
