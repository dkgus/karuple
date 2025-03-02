import React, { useEffect } from "react";
import logo from "../img/yellow_logo.png";

const KakaoBtn = (props: { id: string }): JSX.Element => {
  const { id } = props;
  const imgType = {
    ESFP: "dao.jpg",
    INTP: "desyni.jpg",
    ISFP: "baejji.jpg",
    ISTJ: "eddi2.jpg",
    INFP: "marid.jpg",
    ENTJ: "sugar.jpg",
    ESTJ: "miz.jpg",
    ISTP: "mos.jpg",
    ESTP: "ilyeong.jpg",
    ENFP: "chenchen.jpg",
    ESFJ: "neo.jpg",
    INFJ: "naiad.jpg",
    ISFJ: "reune.jpg",
    INTJ: "hellios.jpg",
    ENTP: "toreu.jpg",
    ENFJ: "daisy.jpg",
  };

  useEffect(() => {
    if (!id) return;

    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init(process.env.REACT_APP_KAKAO_ID);
        }

        const shareKakao = () => {
          kakao.Share.createDefaultButton({
            container: "#kakaotalk-sharing-btn",
            objectType: "feed",
            content: {
              title: "카러플 MBTI",
              description: "나만의 카러플 캐릭터 찾기",
              imageUrl: "https://i.ibb.co/q0VsfBz/village.jpg",
              link: {
                mobileWebUrl: `https://karuplus-mbti.netlify.app/result/${id}`,
                webUrl: `https://karuplus-mbti.netlify.app/result/${id}`,
              },
            },

            buttons: [
              {
                title: "친구의 유형보기",
                link: {
                  mobileWebUrl: `https://karuplus-mbti.netlify.app/result/${id}`,
                  webUrl: `https://karuplus-mbti.netlify.app/result/${id}`,
                },
              },
              // {
              //   title: "테스트 해보기",
              //   link: {
              //     mobileWebUrl: "https://karuplus-mbti.netlify.app",
              //     webUrl: "https://karuplus-mbti.netlify.app",
              //   },
              // },
            ],
          });
        };

        shareKakao();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <span className="my_btn pb-1" id="kakaotalk-sharing-btn" autoFocus>
      <img
        src={logo}
        alt="카카오톡 로고"
        style={{
          display: "inline-block",
          width: "25px",
          height: "25px",
          verticalAlign: "sub",
        }}
      />
      공유하기
    </span>
  );
};

export default KakaoBtn;
