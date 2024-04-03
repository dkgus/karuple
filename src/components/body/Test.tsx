import React, { useEffect, useState } from "react";
import data from "../asset/data";
import { useNavigate } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
interface Answer {
  text: string;
  point: number;
}

interface Question {
  id: number;
  question: string;
  type: string;
  answers: Answer[];
  src: string;
}

interface AnswerSheet {
  type: string;
  score: number;
  result: string;
  order: number[] | number;
}

interface Props {
  loading: boolean;
  setLoading: (value: boolean) => void;
  setIndexChecker: (value: number) => void;
  setAccessType: (value: string) => void;
}
const Test = (props: Props): JSX.Element => {
  const { loading, setLoading, setIndexChecker, setAccessType } = props;
  const style = {
    width: "80%",
    fontSize: "20px",
    class: "card mx-auto mt-7 rounded-lg",
  };
  const navigate = useNavigate();

  const [idx, setIndex] = useState<number>(0);
  const [answerSheet, setAnswerSheet] = useState<AnswerSheet[]>([]);
  const [result, setResult] = useState<string>("");
  const [record, setRecord] = useState<number[]>([]);

  useEffect(() => {
    const initializeAnswerSheet = () => {
      setLoading(false);

      const arr: AnswerSheet[] = [];
      const types: string[] = ["first", "second", "third", "fourth"];
      for (let i = 0; i < 4; i++) {
        arr.push({
          type: types[i],
          score: 0,
          result: "",
          order: [],
        });
      }

      setAnswerSheet(arr);
    };

    initializeAnswerSheet();
  }, []);

  useEffect(() => {
    if (record.length >= 12) {
      localStorage.setItem("record", JSON.stringify(record));
    }
  }, [record]);

  const calFunc = () => {
    let arr: string[] = [];
    let answer: string = "";

    for (let i = 0; i < answerSheet.length; i++) {
      const type = ["E-I", "N-S", "F-T", "J-P"];
      const spliceWord = type.map((i) => i.split("-"));
      if (answerSheet[i].score > 0) {
        arr.push(spliceWord[i][0]);
      } else {
        arr.push(spliceWord[i][1]);
      }
      continue;
    }
    answer = arr.join("");
    setResult(answer);
    setAccessType("P");
    return answer;
  };

  const handleAnswerClick = (point: number, type: string) => {
    setAnswerSheet((prevSheet) =>
      prevSheet.map((sheet) => {
        return sheet.type === type
          ? {
              ...sheet,
              score: sheet.score + point,
            }
          : sheet;
      })
    );

    if (idx + 1 !== data.length) {
      setIndex((prevIdx) => prevIdx + 1);
    } else {
      setLoading(true);
      const data = calFunc();
      localStorage.setItem("ownType", data);
      setTimeout(() => {
        navigate(`/result/${data}`);
      }, 1000);
    }
  };

  const currentQuestion: Question = data[idx];
  {
    console.log("currentQuestion.src", currentQuestion.src);
  }
  const srcSet = `${currentQuestion.src} 1000w, ${currentQuestion.src} 2000w`;

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
          <div className={style.class + " bg-white"} style={style}>
            <div>
              <ProgressiveImage src={currentQuestion.src} placeholder={""}>
                {(src: string) => (
                  <picture>
                    <source srcSet={srcSet} media="(max-width: 768px)" />
                    <img
                      alt="img"
                      src={src}
                      srcSet={srcSet}
                      className="rounded-t-lg"
                    ></img>
                  </picture>
                )}
              </ProgressiveImage>
            </div>
            <div className="text-center text-[20px] px-2">
              Q{currentQuestion.id}. {currentQuestion.question}
            </div>
          </div>
          {currentQuestion.answers.map((answer, index) => (
            <div
              key={index}
              className={
                style.class + " bg-white bg-opacity-50 active:bg-white p-3"
              }
              style={style}
              onClick={() => {
                setRecord([...record, index]);
                setIndexChecker(currentQuestion.id);
                handleAnswerClick(answer.point, currentQuestion.type);
              }}
            >
              {answer.text}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Test;
