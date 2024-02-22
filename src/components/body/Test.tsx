import React, { useEffect, useState } from "react";
import data from "../asset/data";
import { useNavigate } from "react-router-dom";

interface Answer {
  text: string;
  point: number;
}

interface Question {
  id: number;
  question: string;
  type: string;
  answers: Answer[];
}

interface AnswerSheet {
  type: string;
  score: number;
  result: string;
}

const Test = (): JSX.Element => {
  const style = {
    width: "80%",
    fontSize: "20px",
    class: "card mx-auto mt-7 rounded-lg",
  };
  const navigate = useNavigate();

  const [idx, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [answerSheet, setAnswerSheet] = useState<AnswerSheet[]>([]);

  useEffect(() => {
    const initializeAnswerSheet = () => {
      const arr: AnswerSheet[] = [];
      const types: string[] = ["first", "second", "third", "fourth"];
      for (let i = 0; i < 4; i++) {
        arr.push({
          type: types[i],
          score: 0,
          result: "",
        });
      }
      setAnswerSheet(arr);
    };

    initializeAnswerSheet();
  }, []);

  const handleAnswerClick = (point: number, type: string) => {
    setAnswerSheet((prevSheet) =>
      prevSheet.map((sheet) =>
        sheet.type === type ? { ...sheet, score: sheet.score + point } : sheet
      )
    );

    if (idx + 1 !== data.length) {
      setIndex((prevIdx) => prevIdx + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        navigate("/result/1");
      }, 3000);
    }
  };

  const currentQuestion: Question = data[idx];

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
            Q{currentQuestion.id}. {currentQuestion.question}
          </div>
          {currentQuestion.answers.map((answer, index) => (
            <div
              key={index}
              className={style.class + " bg-base-100/50 active:bg-base-100"}
              style={style}
              onClick={() =>
                handleAnswerClick(answer.point, currentQuestion.type)
              }
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
