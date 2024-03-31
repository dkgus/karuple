import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../asset/data";
import Home from "./img/home.png";
import { matchType } from "./matchType";

const MyResult = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState<number[]>([]);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const answer = JSON.parse(localStorage.getItem("record") || "[]");
    const ownType = localStorage.getItem("ownType") || "";
    if (!answer || !ownType) {
      return;
    } else {
      setRecord(answer);
      setType(ownType);
    }
  }, []);


  return (
    <div className="p-3">
      <div>내가 선택한 답변</div>
      <div
        className="custom_scroll pt-10"
        style={{ maxHeight: "76dvh", overflowY: "scroll" }}
      >
        {data.map((item, index) => (
          <>
            <div className="chat chat-start" key={index}>
              <div className="chat-image avatar">
                <div className="w-7 rounded-full">
                  <img alt="img" src={matchType[id].image} />
                </div>
              </div>
              <div className="chat-bubble text-xs">
                {item.id}. {item.question}
              </div>
            </div>

            <div className="chat chat-end">
              <div className="chat-bubble">
                {item.answers.map((elem, idx) => (
                  <div
                    key={idx}
                    className={
                      record[index] === idx
                        ? "text-xs text-green-500"
                        : "text-xs"
                    }
                  >
                    {elem.text}
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="pt-6 flex justify-center">
        <img src={Home} className="w-7" onClick={() => navigate("/")} />
        <button
          className={"my_btn ml-3 py-0"}
          onClick={() => navigate(`/result/${type}`)}
        >
          내 유형으로 돌아가기
        </button>
        <button className={"my_btn ml-3 py-0"}
          onClick={() => navigate("/list")}>
          전체 유형보기
        </button>
      </div>
    </div>
  );
};

export default MyResult;
